<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'Letölthető anyagok',
})

const activeTab = ref<'documents' | 'hidraulika-pneumatika' | 'fogaszat'>(
  'documents',
)

const documents = ref([
  '/document/CPC-lineáris.pdf',
  '/document/GMN-Super-precision-ball-bearing.pdf',
  '/document/Hiwin.pdf',
  '/document/IBC-Zsírfeljáratás.pdf',
  '/document/SKF-SNFA-orsócsapágy-katalógus.pdf',
])

const showDocuments = ref(false)

const hidraulikaImages = ref([
  '/img/hidraulika-pneumatika/image0.jpeg',
  '/img/hidraulika-pneumatika/image2.jpeg',
])

const fogaszatCardImage = ref('/img/fogaszat/Fogászat.png')
</script>

<template>
  <section>
    <div class="supage-content position-relative" id="letoltheto-anyagok">
      <h2 class="supage-content__h2 text-color text-transform-uppercase">
        Letölthető anyagok
      </h2>
      <div class="supage-content__pdf-box">
        <button
          class="subpage-content-document__btn text-transform-uppercase text-color-w f-600 cursor"
          @click="activeTab = 'documents'"
        >
          Dokumentumok
        </button>
        <button
          class="subpage-content-document__btn text-transform-uppercase text-color-w f-600 cursor"
          @click="activeTab = 'hidraulika-pneumatika'"
        >
          Hidraulika-Pneumatika
        </button>
        <button
          class="subpage-content-document__btn text-transform-uppercase text-color-w f-600 cursor"
          @click="activeTab = 'fogaszat'"
        >
          Fogászat
        </button>
      </div>
      <div class="supage-content__pdf-box">
        <template v-if="activeTab === 'documents'">
          <button
            class="subpage-content-document__btn text-transform-uppercase text-color-w f-600 cursor"
            @click="showDocuments = !showDocuments"
          >
            Dokumentumok megjelenítése
          </button>
          <ul class="subpage-content-document__ul" v-if="showDocuments">
            <p class="subpage-content-document__ul__p">
              Kattints a pdf-re letöltéshez...
            </p>
            <li
              class="subpage-content-document__ul__li"
              v-for="doc in documents"
              :key="doc"
            >
              <a
                class="subpage-content-document__ul__li__link text-color"
                :href="doc"
                target="_blank"
                download
                >{{ doc.split('/').pop() }}</a
              >
            </li>
          </ul>
        </template>

        <template v-else-if="activeTab === 'hidraulika-pneumatika'">
          <p class="subpage-content-document__ul__p text-color">
            Vállaljuk hidraulika tömlők méretre gyártását, munkahengerek
            felújítását, minden ami hidraulika egy helyen nálunk megtalálja.
            Nálunk hétvégén is hozhatja sérült, cserére érett tömlőjét.
          </p>
          <div class="subpage-content-document__ul">
            <NuxtImg
              v-for="src in hidraulikaImages"
              :key="src"
              :src="src"
              alt="Hidraulika-Pneumatika"
              height="100%"
              style="
                max-width: 100%;
                height: auto;
                display: block;
                margin: 12px 0;
              "
            />
          </div>
        </template>

        <template v-else>
          <div class="subpage-content-document__ul">
            <NuxtImg
              :src="fogaszatCardImage"
              alt="Fogászati kézi darabok felújítása, fogtechnikai csiszoló és marógépek szervize"
              height="100%"
              style="
                max-width: 100%;
                height: auto;
                display: block;
                margin: 12px 0;
              "
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
