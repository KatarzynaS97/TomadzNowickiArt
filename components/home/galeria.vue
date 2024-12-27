<template>
  <div class="gallery-container" id="galleria">
    <h2 class="gallery-title">Galeria obrazów</h2>
    <Galleria :value="images"
              :showThumbnails="false"
              :showItemNavigators="true"
              :numVisible="5"
              containerStyle="max-width: 600px"
              class="galleria"
              circular>
      <template #item="slotProps">
        <img :src="slotProps.item.source" :alt="slotProps.item.title" class="image-galley"/>
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item.source" :alt="slotProps.item.title" class="image-item"/>
      </template>
      <template #caption="slotProps">
        <div class="image-caption">{{ slotProps.item.title }}</div>
        <p class="image-title">{{ slotProps.item.description }}</p>
      </template>
    </Galleria>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const images = ref([
  {source: 'img/castle-tree.webp', title: 'Obraz 1', description: 'Opis obrazu 1'},
  {source: 'img/floating-pyramid.webp', title: 'Obraz 2', description: 'Opis obrazu 2'},
  {source: 'img/foggy-portal.webp', title: 'Obraz 3', description: 'Opis obrazu 3'},
  {source: 'img/hovering-pyramid.webp', title: 'Obraz 4', description: 'Opis obrazu 4'},
  {source: 'img/in-the-air.webp', title: 'Obraz 5', description: 'Opis obrazu 5'},
  {source: 'img/nokturn.webp', title: 'Obraz 6', description: 'Opis obrazu 6'},
  {source: 'img/pyramid.webp', title: 'Obraz 7', description: 'Opis obrazu 7'},
  {source: 'img/surreal-tree.webp', title: 'Obraz 8', description: 'Opis obrazu 8'},
  {source: 'img/tower.webp', title: 'Obraz 9', description: 'Opis obrazu 9'},
  {source: 'img/weeping-willow.webp', title: 'Obraz 10', description: 'Opis obrazu 10'},
]);

</script>

<style scoped lang="scss">
.gallery-container {
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .galleria {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border: #002e63 solid 1px;
    border-radius: 10px;
    padding: 20px;
  }

  .image-galley {
    width: 100%;
  }

  .gallery-title {
    font-size: 2em;
    color: #99ccff;
    letter-spacing: 2px;
    text-shadow: 0 0 5px
  }

  .gallery-title:hover {
    color: #007acc;
  }

  .gallery-image {
    width: 100%;
    border-radius: 8px;
  }

  .image-item {
    display: flex;
    flex-direction: column;
    gap: 1em;
    max-width: 60px;
    height: auto;
    border-radius: 4px;
  }

  .image-caption {
    font-size: large;
    margin-bottom: 2em;
    font-weight: bold;
  }
}

</style>