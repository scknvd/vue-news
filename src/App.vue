<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <router-view></router-view>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    HeaderNav: Nav,
    FooterNav: Footer
  }
}
</script>
