<template>
  <div class="section-Wrapper section-Page">
    <section class="section-Error">
      <div class="section-Error_Content">
        <p>
          Oops! Deze pagina bestaat niet.<br />
          Ga naar <nuxt-link to="/">home</nuxt-link>,
          <nuxt-link to="/moonlab">Moonlab</nuxt-link> of lees mijn
          <nuxt-link to="/herinneringen">herinneringen</nuxt-link>.
        </p>
      </div>
    </section>
  </div>
</template>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section
  &-Error
    min-height: 100vh
    width: 100%
    display: flex
    justify-content: space-around
    align-items: center
    p
      display: block
      text-align: center
    a
      border-bottom: $darkbrown solid 1px
</style>
