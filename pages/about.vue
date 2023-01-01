<template>
  <section class="about">
    <h1 class="about-title">About page title</h1>

    <div class="about-container">
      <div class="about-info">
        <p class="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio libero rerum commodi nihil aperiam at possimus inventore
          facilis ab quibusdam?
        </p>

        <p class="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, facilis.
        </p>

        <p class="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium in, necessitatibus aspernatur iure veniam est?
        </p>

        <p class="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia labore cum
          ab provident, nesciunt unde. Placeat dolor, alias iste sit explicabo distinctio
          labore a laudantium provident atque ex, repellat veritatis.
        </p>
      </div>

      <div class="about-img" />
    </div>
  </section>
</template>

<style lang="scss">
  .about {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 800px;

    &-title {
      text-align: center;
      @include text-for-title;
    }

    &-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 0 20px;
      align-items: center;

      @include onDesktop {
        flex-direction: row;
        gap: 50px;
        align-items: normal;
      }
    }

    &-text {
      @include text-for-paragraph;
    }

    &-img {
      display: flex;
      background-image: url('~assets/images/logo_black.png');
      width: 180px;
      height: 100px;
      background-size: contain;
      background-repeat: no-repeat;

      @include onDesktop {
        display: block;
        background-image: url('~assets/images/black-t-shirt.jpg');
        width: 800px;
        height: auto;
        background-size: cover;
        background-position: center;
        border-radius: 40px;
      }
    }
  }
</style>
