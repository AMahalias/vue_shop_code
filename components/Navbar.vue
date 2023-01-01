<template>
  <nav class="nav">
    <div class="nav-logo" />

    <ul class="nav-container">
      <li class="nav-item">
        <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">
          Home
        </nuxt-link>
      </li>

      <li class="nav-item">
        <nuxt-link no-prefetch active-class="active" class="nav-link" to="/about">
          About
        </nuxt-link>
      </li>

      <li class="nav-item">
        <nuxt-link no-prefetch active-class="active" class="nav-link" to="/products">
          Products
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
  .nav {
    display: flex;
    align-items: center;
    background-color: #000;
    justify-content: space-between;

    &-logo {
      background-image: url('~assets/images/logo_white.png');
      height: 50px;
      width: 70px;
      background-size: contain;
      background-repeat: no-repeat;
      margin-left: 20px;
      margin-top: 10px;

      @include onDesktop {
        width: 100px;
        margin-top: 0;
      }
    }

    &-container {
      display: flex;
      gap: 30px;
      margin: 0;
      padding: 20px;

      @include onDesktop {
        gap: 50px;
      }
    }

    &-item {
      list-style-type: none;
    }

    &-link {
      text-decoration: none;
      border-bottom: 1px solid transparent;
      padding-bottom: 5px;
      @include text-for-nav;
      @include hover(border-color, #fff);
    }
  }
</style>
