<script setup>
const route = useRoute()
const serviceName = route.params.serviceName.toLowerCase()

const { data: service } = await useAsyncData('service', async () => {
  if (serviceName === 'letoltheto-anyagok') {
    return navigateTo('/letoltheto-anyagok')
  }
  if (serviceName === 'kapcsolat') {
    return navigateTo('/kapcsolat')
  }
  const doc = await queryContent('szolgaltatasok', serviceName).findOne()
  if (!doc) {
    throw createError({ statusCode: 404, message: 'Szolgáltatás nem található' })
  }
  return doc
})

useHead({
  title: service.value ? 'Szolgáltatások - ' + service.value.title : 'Szolgáltatás nem található',
})
</script>

<template>
  <div v-if="service" class="supage-content position-relative">
    <h2 class="supage-content__h2 text-color">{{ service.title }}</h2>
    <ContentRenderer :value="service" />
    <NuxtLink to="/szolgaltatasok" class="go-back-button">
      <span class="go-back-button__icon">&#8592;</span>
      <span class="go-back-button__text">Vissza a szolgáltatásokhoz</span>
    </NuxtLink>
  </div>
</template>


