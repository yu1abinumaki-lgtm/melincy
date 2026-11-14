<script setup lang="ts">
import { profile } from '~/data/portfolio'
const year = useState('copyright-year', () => new Date().getFullYear())
</script>
<template><footer class="site-footer container"><a class="brand" href="#home">melincy<span class="accent">.</span></a><p>© {{ year }} {{ profile.name }}</p><a class="back-top" href="#home">К началу <AppIcon name="arrow-up-right" /></a></footer></template>
