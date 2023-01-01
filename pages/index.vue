<template>
  <section class="home">
    <h1 class="home-title">Home page</h1>

    <div class="home-container">
      <div class="home-img" />

      <p class="home-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis deleniti, itaque et ea excepturi quisquam repudiandae
        nam esse incidunt laborum porro quia recusandae voluptatibus,
        reiciendis, repellendus ut soluta odio libero error non ipsa vero!
        Vero inventore aliquam, perspiciatis omnis expedita asperiores magni
        similique, illo error saepe doloribus non! Adipisci tempore libero
        ratione dolore quo. Aliquam ipsum voluptatibus illum accusantium sapiente.
      </p>
    </div>
  </section>
</template>

<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 800px;

    &-title {
      text-align: center;
      @include text-for-title;
    }

    &-container {
      padding: 0 20px;
    }

    &-img {
      background-image: url(~assets/images/emotional-attractive-happy-woman-holding-colorful-dresses-clothing-store.jpg);
      height: 400px;
      width: 100%;
      background-size: cover;
      border-radius: 40px;
      background-position: center;
      background-repeat: no-repeat;

      @include onDesktop {
        height: 400px;
      }
    }

    &-text {
      text-align: center;
      @include text-for-paragraph;
      margin-top: 40px;
    }
  }
</style>
