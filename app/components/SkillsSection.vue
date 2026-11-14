<script setup lang="ts">
import { technologies } from '~/data/portfolio'
</script>
<template>
  <section id="stack" class="section container" aria-labelledby="stack-title"><div class="section-heading"><div><p class="eyebrow"><span>03</span> НАВЫКИ И ИНСТРУМЕНТЫ</p><h2 id="stack-title">Хорошая основа.<br><span class="accent">Продуманные детали.</span></h2></div><p>Стек, на котором работает этот сайт.<br>Личные компетенции дополню позже.</p></div>
    <div class="stack-list"><article v-for="(technology, index) in technologies" :key="technology.name" class="technology"><span class="technology-number">{{ String(index + 1).padStart(2, '0') }}</span><h3>{{ technology.name }}</h3><span class="technology-category">{{ technology.category }}</span><p>{{ technology.description }}</p></article></div>
    <div class="stack-footnote"><AppIcon name="code" /><p>Этот сайт: Vue-компоненты, строгие типы и собственный CSS.</p><span>Создан с вниманием к деталям</span></div>
  </section>
</template>
