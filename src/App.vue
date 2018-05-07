<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <navbar></navbar>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from './pages/elements/Navbar'

export default {
  name: 'app',
  components: {
    'navbar': Navbar
  },
  created () {
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">

.fade-enter-active, .fade-leave-active {
  transition: all .25s ease;
  transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateY(20px);
}
</style>
