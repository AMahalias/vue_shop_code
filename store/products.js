export const state = () => ({
  products: [],
  selectedProduct: null
})

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  setCurrentProduct(state, selectedProduct) {
    state.selectedProduct = selectedProduct
  }
}

export const actions = {
  async fetch({commit}) {
    try {
      const products = await this.$axios.$get('https://fakestoreapi.com/products')
      await commit('setProducts', products)
    } catch {
      throw new Error('There is a problem with loading data')
    }
  },

  async fetchProduct({commit}, productId) {
    try {
      const selectedProduct = await this.$axios.$get('https://fakestoreapi.com/products/' + productId)
      await commit('setCurrentProduct', selectedProduct)
    } catch {
      throw new Error('There is a problem with loading data for selected product')
    }
  }
}

export const getters = {
  products: s => s.products,
  selectedProduct: s => s.selectedProduct
}
