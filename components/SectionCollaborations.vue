<template>
  <section class="section section-Collaborations">
    <markdown class="typeTextCaps" :input="blok.text" />
    <ul class="section-Collaborations_Logos">
      <li v-for="(image, i) in blok.logos" :key="i">
        <a :href="'https://' + image.name" target="_blank" rel="noreferrer">
          <!-- prettier-ignore -->
          <img
        v-lazy="`${transformImage(image.filename, '1440x0')}`"
        :data-srcset="`
            ${transformImage(image.filename, '2000x0')} 2000w,
            ${transformImage(image.filename, '1600x0')} 1600w,
            ${transformImage(image.filename, '140x0')} 140w, 
            ${transformImage(image.filename, '1200x0')} 1200w,
            ${transformImage(image.filename, '1000x0')} 1000w, 
            ${transformImage(image.filename, '800x0')} 800w, 
            ${transformImage(image.filename, '600x0')} 600w, 
            ${transformImage(image.filename, '400x0')} 400w, 
            `"
        class="lazy scrollSlow-Door"
        sizes="33vw"
        :alt="image.name" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  methods: {
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""
      let imageService = "//img2.storyblok.com/"
      let pathOne = image.replace("https://a.storyblok.com", "")
      let pathTwo = pathOne.replace("//a.storyblok.com", "")
      return imageService + option + pathTwo
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Collaborations
  padding-top: var(--spacing-section-vertical-small)
  background: $lightgrey
  .markdown
    margin-bottom: var(--spacing-item-vertical)
    padding: 0 var(--spacing-section-horizontal)
  ul
    display: flex
    flex-wrap: no-wrap
    justify-content: space-between
    @media screen and (max-width: $breakpoint-mobile)
      justify-content: flex-start
    li
      margin-left: calc(#{var(--spacing-section-horizontal)} / 2)
      margin-right: calc(#{var(--spacing-section-horizontal)} / 2)
      margin-bottom: var(--spacing-section-vertical-small)
      display: inline-block
      height: 6rem
      flex: 1
      @media screen and (min-width: $breakpoint-laptop)
        height: 8vw
      &:first-child
        margin-left: var(--spacing-section-horizontal)
      &:last-child
        margin-right: var(--spacing-section-horizontal)
      img
        height: 100%
        width: 100%
        object-fit: contain
</style>
