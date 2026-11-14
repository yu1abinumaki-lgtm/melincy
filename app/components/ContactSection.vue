<script setup lang="ts">
import { profile } from '~/data/portfolio'
const copied = ref(false)
const status = ref('')
const handle = useTemplateRef<HTMLElement>('handle')
let resetTimer: ReturnType<typeof setTimeout> | undefined
async function copyContact() {
  try {
    await navigator.clipboard.writeText(profile.telegram)
    copied.value = true
    status.value = 'Ник скопирован в буфер обмена.'
  } catch {
    if (handle.value) {
      const range = document.createRange()
      range.selectNodeContents(handle.value)
      const selection = window.getSelection()
      selection?.removeAllRanges(); selection?.addRange(range)
    }
    status.value = 'Ник выделен. Скопируйте его вручную.'
  }
  clearTimeout(resetTimer)
  resetTimer = setTimeout(() => { copied.value = false; status.value = '' }, 4000)
}
onBeforeUnmount(() => clearTimeout(resetTimer))
</script>
<template>
  <section id="contact" class="contact-section" aria-labelledby="contact-title"><div class="contact-haze neon-decoration" aria-hidden="true"/><div class="container contact-inner">
    <p class="eyebrow"><span>04</span> ДАВАЙ НА СВЯЗЬ</p><p class="contact-overline">Идея, предложение или просто привет?</p><h2 id="contact-title">Всё начинается<br>с <span>одного сообщения.</span></h2><p class="contact-description">Обсудим твой проект, работу в команде<br>или то, что хочется создать.</p><div class="contact-actions"><a class="button button-primary" :href="profile.telegramUrl" target="_blank" rel="noopener noreferrer">Написать в Telegram <AppIcon name="arrow-up-right" /></a><button class="contact-copy" type="button" :aria-label="copied ? 'Ник скопирован' : 'Скопировать ник Telegram'" @click="copyContact"><span ref="handle">{{ profile.telegram }}</span><AppIcon :name="copied ? 'check' : 'copy'"/></button></div><p class="copy-status" aria-live="polite" role="status">{{ status }}</p><p class="missing-contacts">Почта пока не указана <span>·</span> GitHub ещё нет</p>
  </div></section>
</template>
