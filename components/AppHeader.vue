<script setup>
import { ref, onMounted } from 'vue'

const links = [
  { name: 'Főoldal', path: '/' },
  { name: 'Galéria', path: '/galeria' },
  { name: 'Rólunk', path: '/rolunk' },
  { name: 'Kapcsolat', path: '/kapcsolat' },
  { name: 'Ajánlatkérés', path: '/ajanlatkeres' },
  { name: 'Szolgáltatások', path: '/szolgaltatasok' },
  { name: 'Letölthető anyagok', path: '/letoltheto-anyagok' },
]

const isMenuOpen = ref(false)
const headerVideo = ref(null)

onMounted(() => {
  handleVideoPlayback()
})

const handleVideoPlayback = () => {
  const video = headerVideo.value
  if (video) {
    video.muted = true 
    video
      .play()
      .then(() => {
        console.log('Video is playing')
      })
      .catch((error) => {
        console.log('Video play failed:', error)
      })
  }
}
</script>

<template>
  <header class="header">
    <div class="header-content position-relative z-100">
      <div class="logo-box header-content__logo-box">
        <NuxtLink to="/" class="header-content__logo-box__link">
          <NuxtImg
            src="/img/header/logo.png"
            alt="Precision Bearing kft"
            class="header-content__logo-box__link__img"
            height="100%"
          />
        </NuxtLink>
      </div>
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="hamburger"
        :class="{ open: isMenuOpen }"
      >
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>
    </div>
    <div class="header-body position-relative">
      <!-- <NuxtImg
        src="/img/slider/slider.jpg"
        alt="Biztos Alkuszom"
        class="header-body__img"
        height="100%"
      /> -->
      <video
        class="header-body__video"
        autoplay
        loop
        muted
        playsinline
        width="1920"
        height="100%"
        preload="metadata"
        ref="headerVideo"
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Sajnáljuk, a böngésződ nem támogatja a videó elemet.
      </video>
      <div class="header-body__absolute-box d-flex position-absolute">
        <div class="header-body__absolute-box__text-box">
          <h1
            class="header-body__absolute-box__text-box__h1 text-transform-uppercase text-color-w f-700"
          >
            Lépjen be a zökkenőmentes és hatékony munka világába most!
          </h1>
          <p class="header-body__absolute-box__text-box__p text-color-w f-400">
            Szerezzen be minden szükséges eszközt és alkatrészt egyetlen helyről
            szerszámgépei, esztergagépei és marógépei javításához és
            felújításához!
          </p>
        </div>
        <div class="nav-box header-body__absolute-box__nav-box d-flex">
          <nav :class="{ 'menu--open': isMenuOpen, menu: true }" id="menu">
            <ul id="menu__list" class="menu__list d-flex">
              <li v-for="link in links" :key="link.path" class="menu__list__li">
                <NuxtLink
                  :to="link.path"
                  :class="['menu__item text-color-w f-500']"
                >
                  <template v-if="link.imagePath">
                    <NuxtImg
                      class="menu__list__li__img"
                      height="100%"
                      :src="link.imagePath"
                      :alt="link.name"
                    />
                  </template>
                  <template v-else>
                    {{ link.name }}
                  </template>
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
