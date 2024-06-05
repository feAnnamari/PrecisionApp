<script setup lang="ts">
import { ref, computed } from 'vue'

interface AccordionItem {
  title: string
  content: string
}

const AccordionItems: AccordionItem[] = [
  { title: 'Kell-e regisztrálnom a vásárláshoz?', content: 'Tartalom 1' },
  {
    title: 'Okostelefonon és tableten is tudok vásárolni?',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  { title: 'Hogy adhatom le a rendelésem?', content: 'Tartalom 3' },
  {
    title: 'Lehetséges e-mailben, vagy telefonon is rendelni?',
    content: 'Tartalom 4',
  },
]

const currentIndex = ref<number | null>(null)

const headerClass = (index: number) => {
  return {
    'accordion-content__header': true,
    'red-background': currentIndex.value === index,
  }
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
      <div class="grid-4">
        <div
          class="services-content__img-text-box services-content__img-text-box--one-bg position-relative"
        >
          <NuxtImg
            src="/img/services/csapagyak.svg"
            alt="Precision Bearing kft"
            class="services-content__img-text-box__img"
            height="100%"
          />
          <h3 class="services-content__img-text-box__h3 text-center text-color">
            CSAPÁGYAK
          </h3>
          <p class="services-content__img-text-box__p text-color">
            Fedezze fel prémium csapágyainkat: precíziós orsócsapágyak és
            különleges kerámiás csapágyak, minden igényt kielégítve!
          </p>
          <div
            class="services-content__img-text-box__link-box position-absolute"
          >
            <NuxtLink class="services-content__img-text-box__link-box__link">
              <NuxtImg
                src="/img/services/r-arrow.svg"
                alt="Precision Bearing kft"
                class="services-content__img-text-box__link-box__img"
                height="100%"
              />
            </NuxtLink>
          </div>
        </div>

        <div
          class="services-content__img-text-box services-content__img-text-box--two-bg position-relative"
        >
          <NuxtImg
            src="/img/services/csapagyak.svg"
            alt="Precision Bearing kft"
            class="services-content__img-text-box__img"
            height="100%"
          />
          <h3 class="services-content__img-text-box__h3 text-center text-color">
            GOLYÓSORSÓK
          </h3>
          <p class="services-content__img-text-box__p text-color">
            Japán és dél-koreai kapcsolatainknak köszönhetően biztosítjuk a
            világszerte ritkán elérhető golyós orsókat, minőségi garanciával és
            teljes körű gyártási szolgáltatásokkal!
          </p>
          <div
            class="services-content__img-text-box__link-box position-absolute"
          >
            <NuxtLink class="services-content__img-text-box__link-box__link">
              <NuxtImg
                src="/img/services/r-arrow.svg"
                alt="Precision Bearing kft"
                class="services-content__img-text-box__link-box__img"
                height="100%"
              />
            </NuxtLink>
          </div>
        </div>

        <div
          class="services-content__img-text-box services-content__img-text-box--three-bg position-relative"
        >
          <NuxtImg
            src="/img/services/csapagyak.svg"
            alt="Precision Bearing kft"
            class="services-content__img-text-box__img"
            height="100%"
          />
          <h3 class="services-content__img-text-box__h3 text-center text-color">
            LINEÁRTECHNIKA
          </h3>
          <p class="services-content__img-text-box__p text-color">
            Gyorsítsa fel projekteit a szerszámgépiparban nélkülözhetetlen,
            japán gyártmányú lineáris vezetékekkel és kocsikkal, amelyeket német
            raktárunkból 1-3 napon belül szállítunk!
          </p>
          <div
            class="services-content__img-text-box__link-box position-absolute"
          >
            <NuxtLink class="services-content__img-text-box__link-box__link">
              <NuxtImg
                src="/img/services/r-arrow.svg"
                alt="Precision Bearing kft"
                class="services-content__img-text-box__link-box__img"
                height="100%"
              />
            </NuxtLink>
          </div>
        </div>

        <div
          class="services-content__img-text-box services-content__img-text-box--four-bg position-relative"
        >
          <NuxtImg
            src="/img/services/csapagyak.svg"
            alt="Precision Bearing kft"
            class="services-content__img-text-box__img"
            height="100%"
          />
          <h3 class="services-content__img-text-box__h3 text-center text-color">
            EGYEDI GYÁRTÁS
          </h3>
          <p class="services-content__img-text-box__p text-color">
            Felejtse el a hosszú hónapokig tartó várakozást alkatrészekre!
            Üzemünkben kis és nagy sorozatban is gyártunk egyedi alkatrészeket,
            beleértve a golyós orsók végmegmunkálását is.
          </p>
          <div
            class="services-content__img-text-box__link-box position-absolute"
          >
            <NuxtLink class="services-content__img-text-box__link-box__link">
              <NuxtImg
                src="/img/services/r-arrow.svg"
                alt="Precision Bearing kft"
                class="services-content__img-text-box__link-box__img"
                height="100%"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
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
    <div class="blog-content">
      <h4 class="blog-content__h4 text-transform-uppercase t-end text-color">
        blog
      </h4>
      <div class="accordion-content position-relative">
        <div
          v-for="(item, index) in AccordionItems"
          :key="index"
          class="accordion-content__accordion"
          @click="currentIndex = currentIndex === index ? null : index"
        >
          <div class="accordion-content__accordion__flex-box d-flex">
            <div :class="headerClass(index)">
              <h3 class="accordion-content__header__h3 f-600">
                {{ item.title }}
              </h3>
              <span
                class="accordion-content__header__arrow"
                :class="{ 'accordion-is-open': currentIndex === index }"
              >
              </span>
            </div>
            <div
              class="accordion-content__content position-absolute"
              :class="{ AccordionOpen: currentIndex === index }"
            >
              <p class="accordion-content__content__p text-color">
                {{ item.content }}
              </p>
            </div>
          </div>
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
