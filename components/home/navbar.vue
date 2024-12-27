<template>
  <nav class="navbar">
    <ul class="navbar-menu">
      <li><a href="#home" class="links">STRONA GŁÓWNA</a></li>
      <li><span class="dot">•</span></li>
      <li><a href="#about" class="links">O MNIE</a></li>
      <li><span class="dot">•</span></li>
      <li>
        <a href="/" class="name links">Tomasz Nowicki Art</a>
      </li>
      <li><span class="dot">•</span></li>
      <li><a href="#links" class="links">GALERIA</a></li>
      <li><span class="dot">•</span></li>
      <li><a href="#contact" class="links">KONTAKT</a></li>

    </ul>
  </nav>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;


  &-menu {
    display: flex;
    align-items: center;
    padding: 0;
    list-style: none;
  }

  &-menu li {
    margin: 0 2em;
  }

  .links {
    text-decoration: none;
    color: #99ccff;
    font-weight: bold;
    font-size: 1em;
    transition: all 0.3s ease;
  }

  .links:hover {
    color: #007acc;
  }

  .dot {
    color: #99ccff;
    font-size: 20px;
  }

  .name {
    font-size: 1.2em;
    color: #99ccff;
    text-shadow: 0 0 5px;

  }
}
</style>