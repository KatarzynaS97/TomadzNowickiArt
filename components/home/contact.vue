<template>
  <div class="contact-container" id="contact">
    <div class="contact">
      <h2>Skontaktuj się ze mną</h2>
      <div class="information">
        <div class="info-item">
          <img src="/img/e-mail.webp" alt="e-mail icon" class="info-icon">
          <h3>kontakt@wp.pl</h3>
        </div>
        <div class="info-item">
          <img src="/img/phone.webp" alt="phone icon" class="info-icon">
          <h3>123-456-789</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 120px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);;
}

h2 {
  font-size: 2em;
  margin-bottom: 2em;
  color: #99ccff;
  text-shadow: 0 0 5px;
}

.information {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: start;

  .info-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.2);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      border-radius: 1em;
    }

    .info-icon {
      width: 4em;
      height: 4em;
      object-fit: contain;
    }
  }

  h3 {
    color: #fff;
  }
}
</style>