<template>
  <div class="home-container" id="start">
    <h2 class="image-description"> Sztuka przyszłości, emocje teraźniejszości.</h2>
    <div class="image-container">
      <img src="public/img/floating-pyramid.webp" alt="floating pyramid" class="image-home"/>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  overflow: hidden;

}

.image-home {
  width: 500px;
  height: auto;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeIn 1.9s ease-out forwards;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3),
  0 5px 10px rgba(0, 0, 0, 0.2),
  inset 0 0 20px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.image-home:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4),
  0 10px 20px rgba(0, 0, 0, 0.3),
  inset 0 0 30px rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
}

.image-description {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5em;
  color: #99ccff;
  text-shadow: 0 0 5px;
  text-align: center;
  animation: textFadeIn 2s ease-out forwards;
  letter-spacing: 2px;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes textFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>