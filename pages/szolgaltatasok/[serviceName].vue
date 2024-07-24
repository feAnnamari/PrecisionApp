<script setup>
const route = useRoute()
const serviceName = route.params.serviceName.toLowerCase();

const { data: service } = await useAsyncData('service', () =>
    queryContent('szolgaltatasok', serviceName).findOne()
);

useHead({
    title: 'Szolgáltatások' + service.title,
})

if (!service.value) {
    throw createError({ statusCode: 404, message: 'Szolgáltatás nem található' })
}
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

<style scoped>
.go-back-button {
    display: inline-flex;
    align-items: center;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #f0f0f0;
    color: #333;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    overflow: hidden;
}

.go-back-button:hover {
    background-color: #e0e0e0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.go-back-button__icon {
    margin-right: 10px;
    transition: transform 0.3s ease;
}

.go-back-button:hover .go-back-button__icon {
    transform: translateX(-5px);
}

.go-back-button__text {
    position: relative;
    z-index: 1;
}

</style>