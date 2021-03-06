<template>
  <div class="home">
    <div class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        alt="hero"
      >

      <div class="hero-intro">
        
        <h1 class="headline-one">{{ data.heroText || $title || 'Hello' }}</h1>

        <p class="description">
          {{ data.tagline || $description || 'Welcome to your VuePress site' }}
        </p>

        <p class="btn btn--cta" v-if="data.actionText && data.actionLink">
          
          <NavLink class="" :item="actionLink"/>

        </p>

      </div>

    </div>

    <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content custom/>

    <div
      class="footer"
      v-if="data.footer"
    >
      <p>
        {{ data.footer }}
      </p>
      <a href="https://www.ion2s.com/impressum/">Legal</a> &nbsp;|&nbsp; <a href="https://www.ion2s.com/datenschutz/">Privacy</a>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
  .hero
    align-items center
    display flex
    position relative
    
    .hero-intro
      align-items center
      background alpha($oloidPrimary, 70%)
      padding 2rem
      position absolute
      right 0
      text-align left
      
    img
      max-height 480px
      max-width 100%
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto 0
    .description
      font-family 'Roboto Mono', monospace
      margin 0 auto 1rem
      max-width 30ch
      font-size 1.2rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      margin 2rem auto
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features    
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content center
  .feature
    flex-grow 1
    flex-basis 30%
    padding 1rem
    max-width 30%
    transition 150ms cubic-bezier(0.18, 0.89, 0.32, 1.28) transform
          

    h2
      font-family 'Roboto Mono', monospace
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
      font-family 'Roboto Mono', monospace
  .footer
    font-size 0.75rem
    padding 2.5rem    
    text-align center
    color lighten($textColor, 25%)
    a
      color #fff

    a:hover
      color $accentColor

@media (max-width: $MQMobile)
  .home
    .hero-intro
      text-align center
    .features
      flex-direction column
    .feature
      margin-bottom 2rem
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem

@media (min-width: $MQNarrow)
  .home
    .hero-intro
      text-align left
      
@media (min-width: $MQTablet)
  .home
    .feature:hover
      transform  scale(1.1) translateZ(30px)

</style>
