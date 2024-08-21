<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const links = [
  { name: 'Főoldal', path: '/' },
  // { name: 'Galéria', path: '/galeria' },
  { name: 'Rólunk', path: '/rolunk' },
  { name: 'Kapcsolat', path: '/kapcsolat' },
  { name: 'Ajánlatkérés', path: '/ajanlatkeres' },
  { name: 'Szolgáltatások', path: '/szolgaltatasok' },
  { name: 'Letölthető anyagok', path: '/letoltheto-anyagok' },
]

const isMenuOpen = ref(false)
const headerVideo = ref(null)
const router = useRouter()

onMounted(() => {
  handleVideoPlayback()

  router.afterEach((to, from) => {
    const scrollDelay = 1000; 

    if (to.path === '/galeria') {
      setTimeout(() => {
        scrollToSection('#galeria')
      }, scrollDelay)
    } else if (to.path === '/rolunk') {
      setTimeout(() => {
        scrollToSection('#rolunk')
      }, scrollDelay)
    } else if (to.path === '/kapcsolat') {
      setTimeout(() => {
        scrollToSection('#kapcsolat')
      }, scrollDelay)
    } else if (to.path === '/ajanlatkeres') {
      setTimeout(() => {
        scrollToSection('#ajanlatkeres')
      }, scrollDelay)
    } else if (to.path === '/szolgaltatasok') {
      setTimeout(() => {
        scrollToSection('#szolgaltatasok')
      }, scrollDelay)
    } else if (to.path === '/letoltheto-anyagok') {
      setTimeout(() => {
        scrollToSection('#letoltheto-anyagok')
      }, scrollDelay)
    }
  })
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

const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId)
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
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
      <div class="gradient" />
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
                  @click="scrollToSection('#' + link.path.slice(1))"
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

<style scoped>
.gradient {
  background: radial-gradient(
    circle at top left,
    #b3cfff99,
    rgba(255, 255, 255, 0) 30%
  );
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
