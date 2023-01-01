<template>
  <section class="productPage">
    <h1 class="productPage-title">{{product.title}}</h1>

    <div class="productPage-container">
      <img class="productPage-image" :src="`${product.image}`">

      <div class="productPage-info">
        <p class="productPage-detail">
          <span class="productPage-detail-name">Category:</span>

          {{product.category}}
        </p>

        <p class="productPage-detail">
          <span class="productPage-detail-name">Description:</span>

          {{product.description}}
        </p>

        <h3 class="productPage-detail">
          <span class="productPage-detail-name">Price:</span>

          ${{product.price}}
        </h3>

        <p class="productPage-detail">
          <span class="productPage-detail-name">Rate:</span>

          {{product.rating.rate}}⭐
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async fetch({store, params}){
    console.log(params)
    await store.dispatch('products/fetchProduct', params.id)
  },
  computed: {
    product() {
      return this.$store.getters['products/selectedProduct']
    }
  }
}
</script>

<style lang="scss">
  .productPage {
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
      gap: 30px;
      padding: 20px;
      margin: 0 20px;
      align-items: center;
      border-radius: 40px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

      @include onDesktop {
        flex-direction: row;
        padding: 40px;
      }
    }

    &-image {
      max-width: 200px;

      @include onDesktop {
        max-width: 400px;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      @include text-for-paragraph;
    }

    &-detail {
      &-name {
        @include text-for-paragraph;
        font-weight: 700;
      }
    }
  }
</style>
