<template>
  <section class="products">
    <h1 class="products-title">
      Products Page
    </h1>

    <div class="filter-container">
      <select
        class="filter-select"
        @change="onChange()"
        v-model="key"
      >
        <option value="" class="filter-option">All products</option>
        <option
          v-for="item in categories"
          :value="item"
          v-text="item"
          :key="item"
          class="filter-option"
        />
      </select>
    </div>

    <ul class="products-list">
      <li v-for="product in products" :key="product.id" class="product-item">
        <img class="product-img" :src="`${product.image}`">

        <div class="product-title">{{product.title}}</div>

        <div class="product-description">
          <a href="#" @click.prevent="handleDescription(product.id)" class="product-description-link">About product</a>
          <div id="toggle" :class="{ active: activeIndex === product.id }">
            {{product.description}}

            <div
            class="product-description-close"
            :class="{ active: activeIndex === product.id }"
            @click="handleDescription(0)"
          >
            Close description
          </div>
          </div>
        </div>

        <div class="product-price">${{product.price}}</div>
        <a href="#" @click.prevent="openProduct(product)" class="product-link">
          Show more
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      key: '',
      category: '',
      categories: [`Men's clothing`, 'Jewelery', 'Electronics', `Women's clothing`]
    }
  },
  async fetch({store}) {
    try {
      if (store.getters['products/products'].length > 0) {
        return
      }

      await store.dispatch('products/fetch')
    } catch {
      throw new Error('Products are not found')
    }
  },

  computed: {
    products() {
      const productsFromServer = this.$store.getters['products/products']
      const filteredProducts = productsFromServer.filter(product => product.category === this.category.toLowerCase())
      return !!this.category.length ? filteredProducts : productsFromServer
    }
  },

  methods: {
    openProduct(product) {
      this.$router.push(`/products/${product.id}`)
    },

    handleDescription(index) {
      this.activeIndex = index
    },

    onChange() {
      this.category = this.key
    },
  }
}
</script>

<style lang="scss">
  .products {
    &-title {
      text-align: center;
      @include text-for-title;
    }

    &-list {
      display: grid;
      grid-template-columns: auto;
      margin: 0 auto;
      gap: 20px;
      max-width: 300px;
      padding: 0 20px;

      @include onDesktop {
        grid-template-columns: repeat(4, 300px);
        padding: 0;
        max-width: 1200px;
      }
    }
  }

  .product {
    &-item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      list-style-type: none;
      height: 300px;
      border-radius: 20px;
      padding: 20px 10px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

      @include hover(scale, 1.1);
      @include hover(z-index, 2);
    }

    &-img {
      margin: 20px;
      height: 40%;
    }

    &-title {
      @include text-for-paragraph;
      text-align: center;

      @include onDesktop {
        font-size: 15px;
      }
    }

    &-price {
      @include text-for-paragraph;
      font-weight: 700;
    }

    &-description {
      @include text-for-paragraph;

      @include onDesktop {
        font-size: 15px;
      }

      &-link {
        color: #000;
      }

      &-close {
        display: none;

        &.active {
          display: block;
          z-index: 5;
          margin-top: 10px;
          text-align: center;
          font-size: 14px;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }

    &-link {
      @include text-for-link;
      margin-bottom: 20px;
    }
  }

  #toggle {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px;
    font-size: 13px;
    transition: width 300ms;

    &.active {
      display: inline-block;
      height: 90%;
      border-radius: 20px;
      z-index: 3;
      width: 270px;
      background-color: #fff;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }

  .filter {
    &-container {
      display: flex;
      justify-content: space-evenly;
      max-width: 300px;
      margin: 0 auto;

      @include onDesktop {
        max-width: 840px;
      }
    }

    &-select {
      @include text-for-nav;
      color: #000;
      width: 100%;
      padding: 10px;
      margin-bottom: 40px;
      border-radius: 5px;
      outline: none;
      border: none;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

      @include onDesktop {
        max-width: 300px;
      }
    }

    &-option {
      @include text-for-nav;
      color: #000;
    }
  }
</style>
