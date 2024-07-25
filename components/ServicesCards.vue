<script setup>
const { data: services } = await useAsyncData('services', () =>
    queryContent('szolgaltatasok').only(['title', 'short', '_path', '_file', 'imageSrc', 'bgImageSrc']).find()
)

const getFullImagePath = (filename) => `/img/services/${filename}`
</script>

<template>
    <div class="grid-4">
        <NuxtLink 
            v-for="(service, index) in services" 
            :key="service._path" 
            :to="`/szolgaltatasok/${service._file.split('/').pop().replace('.md', '')}`" 
            class="services-content__card"
        >
            <div 
                class="services-content__card-inner"
                :style="{ backgroundImage: `url(${getFullImagePath(service.bgImageSrc)})` }"
            >
                <NuxtImg 
                    :src="getFullImagePath(service.imageSrc)" 
                    :alt="service.title" 
                    class="services-content__card-icon" 
                    height="80" 
                />
                <h3 class="services-content__card-title">
                    {{ service.title }}
                </h3>
                <p class="services-content__card-description">
                    {{ service.short }}
                </p>
                <div class="services-content__card-arrow">
                    <NuxtImg 
                        src="/img/services/r-arrow.svg" 
                        :alt="'Go to ' + service.title" 
                        height="24" 
                    />
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<style scoped>
.grid-4 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.services-content__card {
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
}

.services-content__card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.services-content__card-inner {
    background-color: #F7F7F7;
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: background-size 0.3s ease;
}

.services-content__card:hover .services-content__card-inner {
    background-size: 105%;
}

.services-content__card-icon {
    align-self: center;
    height: 10em;
    margin-bottom: 2rem;
    transition: transform 0.3s ease;
}

.services-content__card-title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
    color: #20273F;
}

.services-content__card-description {
    flex-grow: 1;
    margin-bottom: 1rem;
    font-size: 16px;
    color: #20273F;
}

.services-content__card-arrow {
    align-self: flex-end;
    transition: transform 0.3s ease;
}

.services-content__card:hover .services-content__card-arrow {
    transform: translateX(5px);
}
</style>