<template>
  <header>
    <div class="container-fluid">
      <div class="header d-md-flex justify-content-between align-items-center py-3 pl-2">
        <!-- logo -->
        <div id="logo">
          <h1>
            <router-link to="/">Food Blog</router-link>
          </h1>
        </div>
        <!-- //logo -->
        <!-- nav -->
        <div class="nav_w3ls">
          <nav>
            <label for="drop" class="toggle">Menu</label>
            <input type="checkbox" id="drop">
            <ul class="menu">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/about">About Us</router-link>
              </li>
              <li>
                <router-link to="/posts">My Posts</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact Us</router-link>
              </li>
              <li>
                <a href="https://w3layouts.com/" target="_blank" class="nav-button">Get Started</a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- //nav -->
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
