<script setup>
import { ref } from 'vue'
import { useNuxtApp } from '#app'

const FooterLinks = [
  { name: 'Galéria', path: '/galeria' },
  { name: 'Rólunk', path: '/rolunk' },
  { name: 'Ajánlatkérés', path: '/ajanlatkeres' },
  { name: 'Szolgáltatások', path: '/szolgaltatasok' },
]

const nuxtApp = useNuxtApp()

const form = ref({
  name: '',
  email: '',
  phonenumber: '',
  message: '',
})

const isSent = ref(false)

const sendEmail = async () => {
  try {
    await nuxtApp.$mail.send({
      to: 'mualimadnan8@gmail.com',
      subject: `Új üzenetet küldött - ${form.value.name}`,
      html: `
        <p><strong>Name:</strong> ${form.value.name}</p>
        <p><strong>Email:</strong> ${form.value.email}</p>
        <p><strong>Phone Number:</strong> ${form.value.phonenumber}</p>
        <p><strong>Message:</strong></p>
        <p>${form.value.message}</p>
      `,
    })
    isSent.value = true
  } catch (error) {
    console.error('Error sending email:', error)
    alert('Failed to send email.')
  }
}
</script>

<template>
  <footer>
    <div class="footer-content position-relative">
      <div class="footer-content__flex-box d-flex">
        <div class="footer-content__img-box">
          <NuxtImg
            src="/img/footer/footer.webp"
            alt="Precision Bearing kft"
            class="footer-content__img-box__img"
          />
        </div>
        <div class="footer-content__flex-box__blank-div"></div>
      </div>

      <div
        class="footer-content__text-box footer-content__text-box--formating position-absolute z-100 bg-color-w"
      >
        <h6
          class="footer-content__text-box__h6 text-transform-uppercase text-color"
        >
          KÉRJEN ÁRAJÁNLATOT
        </h6>
        <div class="contact-form">
          <form @submit.prevent="sendEmail">
            <div class="contact-form">
              <div class="form-group">
                <input
                  class="form-group__input"
                  placeholder="Név"
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  class="form-group__input"
                  placeholder="Email cím"
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  class="form-group__input"
                  placeholder="Telefonszám"
                  type="text"
                  id="phonenumber"
                  v-model="form.phonenumber"
                  required
                />
              </div>
              <div class="form-group">
                <textarea
                  rows="9"
                  cols="300"
                  class="form-group__textarea"
                  placeholder="Üzenet..."
                  id="message"
                  v-model="form.message"
                  required
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div class="footer-content__text-box__link-box t-end">
          <NuxtLink
            class="page-nuxt-link text-transform-uppercase text-color-w f-700"
          >
            KÜLDÉS
            <NuxtImg
              src="/img/footer/footer-arrow-r.svg"
              alt="Precision Bearing kft"
              class="page-nuxt-link__img page-nuxt-link__img--formating"
              height="100%"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="footer__bottom grid-4">
      <div class="footer__bottom__text-box">
        <h6
          class="footer__bottom__text-box__h6 text-transform-uppercase text-color"
        >
          MENÜ
        </h6>
        <div class="footer__bottom__text-box__footer-link-box d-flex">
          <NuxtLink
            v-for="link in FooterLinks"
            :key="link.path"
            :to="link.path"
            :class="['footer-link text-color']"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
      <div class="footer__bottom__text-box">
        <h6
          class="footer__bottom__text-box__h6 text-transform-uppercase text-color"
        >
          INFORMÁCIÓK
        </h6>
        <p class="footer__bottom__text-box__p">
          <NuxtLink class="footer__bottom__text-box__p__NuxtLink text-color">
            Adatvédelmi Szabályzat
          </NuxtLink>
        </p>
        <p class="footer__bottom__text-box__p">
          <NuxtLink class="footer__bottom__text-box__p__NuxtLink text-color">
            Letölthető anyagok
          </NuxtLink>
        </p>
        <p class="footer__bottom__text-box__p">
          <NuxtLink class="footer__bottom__text-box__p__NuxtLink text-color">
            Kapcsolat
          </NuxtLink>
        </p>
      </div>
      <div class="footer__bottom__text-box">
        <h6
          class="footer__bottom__text-box__h6 text-transform-uppercase text-color"
        >
          KAPCSOLAT
        </h6>
        <p
          class="footer__bottom__text-box__p footer__bottom__text-box__p--formating d-flex"
        >
          <NuxtImg
            src="/img/footer/map.svg"
            alt="Precision Bearing kft"
            class="footer__bottom__text-box__p__link__img"
            height="100%"
          />
          <a
            class="footer__bottom__text-box__p__link text-color"
            target="_blank"
            href="https://www.google.com/maps/place/Sopronhorp%C3%A1cs,+D%C3%B3zsa+Gy%C3%B6rgy+u.+12,+9463/@47.4861838,16.7349177,17z/data=!3m1!4b1!4m6!3m5!1s0x476ea77d7e8f32e9:0x58840e1a7c9c57f1!8m2!3d47.4861802!4d16.7374926!16s%2Fg%2F11sqf5gvq_?authuser=0&entry=ttu"
          >
            9463 Sopronhorpács,Dózsa György utca 12.
          </a>
        </p>
        <p class="footer__bottom__text-box__p footer__bottom__text-box__p--formating d-flex">
          <NuxtImg
            src="/img/footer/mail.svg"
            alt="Precision Bearing kft"
            class="footer__bottom__text-box__p__link__img"
            height="100%"
          />
          <a
            class="footer__bottom__text-box__p__link text-color"
            href="mailto:precisionbearingkft@gmail.com"
          >
            precisionbearingkft@gmail.com
          </a>
        </p>
        <p class="footer__bottom__text-box__p footer__bottom__text-box__p--formating d-flex">
          <NuxtImg
            src="/img/footer/mobile.svg"
            alt="Precision Bearing kft"
            class="footer__bottom__text-box__p__link__img"
            height="100%"
          />
          <a
            class="footer__bottom__text-box__p__link text-color"
            href="tel:+36305397226"
          >
            +36 30 539-7226
          </a>
        </p>
        <p class="footer__bottom__text-box__p footer__bottom__text-box__p--formating d-flex">
          <NuxtImg
            src="/img/footer/mobile.svg"
            alt="Precision Bearing kft"
            class="footer__bottom__text-box__p__link__img"
            height="100%"
          />
          <a
            class="footer__bottom__text-box__p__link text-color"
            href="tel:+36305397224"
          >
            +36 30 539-7224
          </a>
        </p>
      </div>
      <div class="footer__bottom__img-box t-end d-flex">
        <NuxtImg
          src="/img/header/logo.png"
          alt="Precision Bearing kft"
          class="footer__bottom__img-box__img"
          height="100%"
        />
      </div>
    </div>
  </footer>
</template>
