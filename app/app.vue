<script setup lang="ts">
import '@fontsource-variable/onest'
const neon = ref(true)
onMounted(() => {
  try { neon.value = localStorage.getItem('melincy-neon') !== 'off' } catch { /* Настройка работает и без localStorage. */ }
})
function toggleNeon() {
  neon.value = !neon.value
  try { localStorage.setItem('melincy-neon', neon.value ? 'on' : 'off') } catch { /* Закрытые хранилища не мешают странице. */ }
}
</script>
<template>
  <div class="portfolio" :data-neon="neon ? 'on' : 'off'">
    <a class="skip-link" href="#main">К содержимому</a>
    <SiteHeader :neon="neon" @toggle-neon="toggleNeon" />
    <main id="main" tabindex="-1"><HeroSection /><ProjectsSection /><AboutSection /><SkillsSection /><ContactSection /></main>
    <SiteFooter />
  </div>
</template>
