<script setup lang="ts">
import type { Project } from '~/types/portfolio'
const dialog = useTemplateRef<HTMLDialogElement>('dialog')
const selected = ref<Project | null>(null)
let trigger: HTMLElement | null = null
let savedOverflow = ''
const backdropDown = ref(false)
const links = computed(() => (selected.value?.links || []).filter(link => {
  try { return ['https:', 'http:'].includes(new URL(link.url).protocol) } catch { return false }
}))
async function open(project: Project, origin?: HTMLElement) {
  trigger = origin || (document.activeElement instanceof HTMLElement ? document.activeElement : null)
  selected.value = project
  await nextTick()
  savedOverflow = document.body.style.overflow
  dialog.value?.showModal()
  document.body.style.overflow = 'hidden'
  if (dialog.value) dialog.value.scrollTop = 0
}
function close() { dialog.value?.close() }
function onClose() { document.body.style.overflow = savedOverflow; trigger?.focus({ preventScroll: true }) }
function onBackdrop(event: MouseEvent) {
  if (!backdropDown.value || event.target !== dialog.value) return
  const bounds = dialog.value?.getBoundingClientRect()
  if (bounds && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) close()
}
onBeforeUnmount(() => { if (dialog.value?.open) document.body.style.overflow = savedOverflow })
defineExpose({ open })
</script>
<template>
  <dialog ref="dialog" class="project-dialog" aria-labelledby="project-dialog-title" @close="onClose" @pointerdown="backdropDown = $event.target === dialog" @click="onBackdrop">
    <template v-if="selected">
      <div class="dialog-top"><span class="micro-label">{{ selected.category }}</span><button class="icon-button" type="button" aria-label="Закрыть проект" autofocus @click="close"><AppIcon name="close" /></button></div>
      <div class="dialog-content"><p v-if="selected.isExample" class="example-banner">Пример оформления. Это не реальный проект.</p><h2 id="project-dialog-title">{{ selected.title }}</h2><p class="dialog-description">{{ selected.description }}</p><section v-for="detail in selected.details" :key="detail.title" class="project-detail"><h3>{{ detail.title }}</h3><p>{{ detail.text }}</p></section><div class="tags"><span v-for="tool in selected.tools" :key="tool" class="tag">{{ tool }}</span></div><div v-if="links.length" class="dialog-links"><a v-for="link in links" :key="link.url" :href="link.url" class="button button-primary" target="_blank" rel="noopener noreferrer">{{ link.label }} <AppIcon name="arrow-up-right" /></a></div></div>
    </template>
  </dialog>
</template>
