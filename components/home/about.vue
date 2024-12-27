<template>
  <div class="about-container" id="about">
    <img src="public/img/tomasz-nowicki.webp" class="image-artist" alt="Tomasz Nowicki">
    <div class="description">
      <h3>Nazwyam się Tomasz Nowicki. </h3>
      <p>Ukończyłem Wydział Sztuk Pięknych na
        Uniwersytecie im. Jana Długosza w Częstochowie w 2019 r.
        Malarstwo studiowałem pod kierownictwem prof. Mariana Jarzemskiego.
        Zakres moich prac to malarstwo sztalugowe olejne oraz rysunek.</p>
      <div class="social-links">
        <a href="https://www.instagram.com/tomasz_nowy_nowicki_art/">
          <img src="public/img/instagram.webp" alt="instagram icon"></a>
        <a href="https://www.facebook.com/profile.php?id=100087463981706">
          <img src="public/img/facebook.webp" alt="facebook icon"></a>
        <a href="https://www.youtube.com/@wejrzeniawsiebie8813">
          <img src="public/img/youtube.webp" alt="youtube icon"></a>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.about-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #fff;

  .image-artist {
    max-width: 400px;
    max-height: 400px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  .description {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 600px;
    margin-left: 3em;
  }

  .social-links {
    display: flex;
    justify-content: start;
    gap: 1.2em;
    margin-top: 1em;
  }

  .social-links img {
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: transform 0.3s;

    img:hover {
      transform: scale(1.1);
    }
  }
}
</style>