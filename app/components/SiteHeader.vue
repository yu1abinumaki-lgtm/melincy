<script setup lang="ts">
import { navigation } from '~/data/portfolio'
defineProps<{ neon: boolean }>()
defineEmits<{ toggleNeon: [] }>()
const menuOpen = ref(false)
const active = ref('')
const menuButton = useTemplateRef<HTMLButtonElement>('menuButton')
let observer: IntersectionObserver | undefined
let desktop: MediaQueryList | undefined
const closeMenu = () => { menuOpen.value = false }
function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape' && menuOpen.value) { closeMenu(); menuButton.value?.focus() }
}
function onClick(event: MouseEvent) {
  if (event.target instanceof Element && !event.target.closest('.site-header')) closeMenu()
}
onMounted(() => {
  desktop = matchMedia('(min-width: 801px)')
  desktop.addEventListener('change', closeMenu)
  document.addEventListener('keydown', onKey)
  document.addEventListener('click', onClick)
  observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) active.value = entry.target.id
  }, { rootMargin: '-15% 0px -60% 0px' })
  document.querySelectorAll('main > section[id]').forEach(section => observer?.observe(section))
})
onBeforeUnmount(() => {
  observer?.disconnect()
  desktop?.removeEventListener('change', closeMenu)
  document.removeEventListener('keydown', onKey)
  document.removeEventListener('click', onClick)
})
</script>
<template>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#home" aria-label="Melincy - на главную" @click="closeMenu"><span class="brand-symbol" aria-hidden="true">m<span>.</span></span><span>melincy<span class="accent">.</span></span></a>
      <nav id="navigation" class="navigation" :class="{ 'is-open': menuOpen }" aria-label="Основная навигация">
        <a v-for="item in navigation" :key="item.id" :href="`#${item.id}`" :aria-current="active === item.id ? 'location' : undefined" @click="closeMenu">{{ item.label }}</a>
        <a class="mobile-contact" href="#contact" @click="closeMenu">Связаться <AppIcon name="arrow-up-right" /></a>
      </nav>
      <div class="header-actions">
        <button class="light-toggle" type="button" :aria-pressed="neon" :aria-label="neon ? 'Отключить неоновую подсветку' : 'Включить неоновую подсветку'" @click="$emit('toggleNeon')"><AppIcon name="spark" /><span>Неон</span><span class="toggle-indicator" aria-hidden="true" /></button>
        <a class="header-contact" href="#contact">На связи <AppIcon name="arrow-up-right" /></a>
        <button ref="menuButton" class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="navigation" :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'" @click="menuOpen = !menuOpen"><AppIcon :name="menuOpen ? 'close' : 'menu'" /></button>
      </div>
    </div>
  </header>
</template>
