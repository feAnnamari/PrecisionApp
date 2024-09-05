<script setup>
import ServicesCards from '~/components/ServicesCards.vue'

useHead({
  title: 'Szolgáltatások',
})
</script>

<template>
  <div class="supage-content position-relative" id="szolgaltatasok">
    <h2 class="supage-content__h2 text-color pb text-transform-uppercase">
      SZOLGÁLTATÁSOK
    </h2>
    <ServicesCards />
  </div>
</template>

<style scoped>
.pb {
  padding-bottom: 50px;
}
</style>
