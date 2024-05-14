<script setup>
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
</script>

<template>
  <header class="header">
    <div class="header-content position-relative z-100">
      <div class="logo-box header-content__logo-box">
        <a href="/" class="header-content__logo-box__link">
          <NuxtImg
            src="/img/header/logo.png"
            alt="Biztos Alkuszom"
            class="header-content__logo-box__link__img"
            height="100%"
          />
        </a>
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

    <div class="header-body position-absolute">
      <NuxtImg
        src="/img/slider/slider.jpg"
        alt="Biztos Alkuszom"
        class="header-body__img"
        height="100%"
      />
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
