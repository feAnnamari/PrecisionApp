<script setup lang="ts">
// import { ref } from 'vue'
import { useAsyncData, useRuntimeConfig } from '#app'

interface Post {
  id: number
  title: string
  slug: string
  body: string
  image: string
}

const config = useRuntimeConfig()

const { data: itemsPost } = await useAsyncData<Post[]>('posts', () =>
  $fetch(`${config.public.apiBaseUrl}/json-posts`)
)

// const currentIndex = ref<number | null>(null)

// const headerClass = (index: number) => {
//   return {
//     'accordion-content__header': true,
//     'accordion-bg-color': currentIndex.value === index,
//     'bg-grey': currentIndex.value !== index,
//     'text-white': currentIndex.value === index,
//     'text-dark': currentIndex.value !== index,
//   }
// }

function truncateContent(content: string, maxLength: number): string {
  const textContent = content.replace(/<[^>]*>/g, '')
  if (textContent.length <= maxLength) {
    return textContent
  }
  return textContent.slice(0, maxLength) + '...'
}
</script>

<template>
  <section>
    <div class="services-content">
      <h2
        class="services-content__h2 text-transform-uppercase t-end text-color"
      >
        SZOLGÁLTATÁSAINK
      </h2>
      <ServicesCards />
    </div>
  </section>
  <section>
    <div class="about-content position-relative">
      <div class="about-content__flex-box d-flex">
        <div class="about-content__flex-box__blank-div"></div>
        <div class="about-content__img-box">
          <NuxtImg
            src="/img/about/about.webp"
            alt="Precision Bearing kft"
            class="about-content__img-box__img"
          />
        </div>
      </div>
      <div class="about-content__text-box position-absolute z-100 bg-color-w">
        <h2
          class="about-content__text-box__h2 text-transform-uppercase text-color"
        >
          Rólunk
        </h2>
        <p class="about-content__text-box__p text-color">
          Cégünk 2014-ben alakult azzal a céllal, hogy egy helyen kínáljunk
          minden szükséges alkatrészt és segítséget a szerszámgépek,
          esztergagépek és marógépek javításához és felújításához. Széles
          termékválasztékunkban megtalálhatóak csapágyak, golyós orsók,
          precíziós csapágyanyák, kenéstechnikai elemek, valamint lineáris
          vezetékek és kocsik.
        </p>
        <p class="about-content__text-box__p text-color">
          Elkötelezettek vagyunk amellett, hogy ügyfeleink számára minden
          szükséges támogatást megadjunk. Amennyiben kérdése vagy kérése merül
          fel, ne habozzon kapcsolatba lépni velünk telefonon vagy e-mailben.
          Nálunk a minőség és az ügyfél elégedettség a legfontosabb. Várjuk
          megkeresését, legyen szó ajánlatkérésről vagy rendelésről – a
          Precision Bearing Kft.-nél megtalálja, amire szüksége van!
        </p>
        <div class="about-content__text-box__link-box">
          <NuxtLink
            to="rolunk"
            class="page-nuxt-link text-transform-uppercase text-color-w f-700"
          >
            TOVÁBB
            <NuxtImg
              src="/img/about/about-arrow-r.svg"
              alt="Precision Bearing kft"
              class="page-nuxt-link__img"
              height="100%"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="blog-content d-none">
      <h4 class="blog-content__h4 text-transform-uppercase t-end text-color">
        blog
      </h4>
      <!-- <div class="accordion-content position-relative">
        <div
          v-for="(item, index) in itemsPost"
          :key="item.id"
          class="accordion-content__accordion"
          @click="currentIndex = currentIndex === index ? null : index"
        >
          <div class="accordion-content__accordion__flex-box d-flex">
            <div :class="headerClass(index)">
              <div class="headerClass__flex-box d-flex">
                <div class="headerClass__flex-box__img-box">
                  <NuxtImg
                    height="100%"
                    loading="lazy"
                    class="headerClass__flex-box__img-box__img"
                    :src="`${config.public.apiBaseUrl}/storage/${item.image}`"
                    :alt="item.title"
                  />
                </div>
                <div class="headerClass__flex-box__text-box">
                  <h6 class="accordion-content__header__h3 f-600">
                    {{ item.title }}
                  </h6>
                </div>
              </div>
              <span
                class="accordion-content__header__arrow"
                :class="{ 'accordion-is-open': currentIndex === index }"
              ></span>
            </div>
            <div
              class="accordion-content__content position-absolute"
              :class="{ AccordionOpen: currentIndex === index }"
            >
              <p
                class="accordion-content__content__p text-color"
                v-html="item.body"
              ></p>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <div class="blog-content">
      <h4 class="blog-content__h4 text-transform-uppercase t-end text-color">
        blog
      </h4>

      <div class="blog-content__gBox grid-3">
        <div
          v-for="post in itemsPost"
          :key="post.slug"
          class="blog-content__gBox__iTextBox"
        >
          <NuxtLink
            class="blog-box__link-box__Nuxtlink"
            :to="`/posts/${post.slug}`"
          >
            <NuxtImg
              height="100%"
              loading="lazy"
              class="blog-content__gBox__iTextBox__img"
              :src="`${config.public.apiBaseUrl}/storage/${post.image}`"
              alt="{{ post.title }}"
            />
            <div class="blog-content__gBox__iTextBox__tBox">
              <h5
                class="blog-content__gBox__iTextBox__tBox__h5  text-color"
              >
                {{ post.title }}
              </h5>
              <p
                class="blog-content__gBox__iTextBox__tBox__p text-color"
                v-html="truncateContent(post.body, 150)"
              ></p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="brands-content">
      <h5 class="brands-content__h5 text-transform-uppercase text-color-w">
        ÁLTALUNK FORGALMAZOTT MÁRKÁK
      </h5>
      <div class="brands-content__img-content grid-8">
        <div class="brands-content__img-content__img-box">
          <NuxtImg
            src="/img/references/fag.svg"
            alt="Precision Bearing kft"
            class="brands-content__img-content__img-box__img"
          />
        </div>

        <div class="brands-content__img-content__img-box">
          <NuxtImg
            src="/img/references/gmn.svg"
            alt="Precision Bearing kft"
            class="brands-content__img-content__img-box__img"
          />
        </div>

        <div class="brands-content__img-content__img-box">
          <NuxtImg
            src="/img/references/ibc.svg"
            alt="Precision Bearing kft"
            class="brands-content__img-content__img-box__img"
          />
        </div>

        <div class="brands-content__img-content__img-box">
          <NuxtImg
            src="/img/references/gamet-logo-s.svg"
            alt="Precision Bearing kft"
            class="brands-content__img-content__img-box__img"
          />
        </div>

        <div class="brands-content__img-content__img-box">
          <NuxtImg
            src="/img/references/INA_logo.svg"
            alt="Precision Bearing kft"
            class="brands-content__img-content__img-box__img"
          />
        </div>

        <div class="brands-content__img-content__img-box">
          <NuxtImg
            src="/img/references/NSK_Logo.svg"
            alt="Precision Bearing kft"
            class="brands-content__img-content__img-box__img"
          />
        </div>

        <div class="brands-content__img-content__img-box">
          <NuxtImg
            src="/img/references/the-timken-company-vector-logo.svg"
            alt="Precision Bearing kft"
            class="brands-content__img-content__img-box__img"
          />
        </div>

        <div class="brands-content__img-content__img-box">
          <NuxtImg
            src="/img/references/UKF-Logo-rot.svg"
            alt="Precision Bearing kft"
            class="brands-content__img-content__img-box__img"
          />
        </div>
      </div>
    </div>
  </section>
</template>
