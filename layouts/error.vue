<template>
  <section class="error">
    <h1 class="error-title">Error 404</h1>

    <div class="error-text">Oooops! We cannot found such page!</div>

    <div class="error-img" />

    <nuxt-link to="/" class="error-link">Back to home page</nuxt-link>
  </section>
</template>

<style lang="scss">
  .error {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;

    &-title {
      text-align: center;
      @include text-for-title;
    }

    &-img {
      background-image: url('~assets/images/error.png');
      height: 400px;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }

    &-text {
      @include text-for-paragraph;
    }

    &-link {
      @include text-for-paragraph;
      text-decoration: none;
      font-style: italic;
      font-weight: 700;
    }
  }
</style>
