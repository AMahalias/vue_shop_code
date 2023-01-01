<template>
  <div class="main">
    <Navbar />

    <main>
      <div class="container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  body {
    margin: 0 0 100px 0;
  }
</style>
