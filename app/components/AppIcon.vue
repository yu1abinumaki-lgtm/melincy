<script setup lang="ts">
type IconName = 'arrow-up-right' | 'arrow-right' | 'arrow-down' | 'close' | 'menu' | 'copy' | 'check' | 'spark' | 'code' | 'layers' | 'server' | 'plus' | 'telegram'
const props = defineProps<{ name: IconName }>()
const paths: Record<IconName, string[]> = {
  'arrow-up-right': ['M5 19 19 5M5 5h14v14'],
  'arrow-right': ['M4 12h16m-6-6 6 6-6 6'],
  'arrow-down': ['M12 4v16m-6-6 6 6 6-6'],
  close: ['m6 6 12 12M18 6 6 18'],
  menu: ['M4 8h16M4 16h16'],
  copy: ['M8 8h12v12H8zM16 8V4H4v12h4'],
  check: ['m5 12 4 4L19 6'],
  spark: ['m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z'],
  code: ['m8 5-7 7 7 7m8-14 7 7-7 7m-3-16-2 18'],
  layers: ['m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5'],
  server: ['M3 3h18v7H3zM3 14h18v7H3zM6 6.5h.01M6 17.5h.01M16 6.5h2M16 17.5h2'],
  plus: ['M12 4v16M4 12h16'],
  telegram: ['m21 3-4 18-6-5-3 3v-6l10-7-12 5-4-2 19-6Z']
}
</script>
<template><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path v-for="(path, i) in paths[props.name]" :key="i" :d="path" /></svg></template>
