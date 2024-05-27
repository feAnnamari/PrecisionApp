<script setup>
import { ref } from 'vue'
import { useNuxtApp } from '#app'

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

      <div class="footer-content__text-box footer-content__text-box--formating position-absolute z-100 bg-color-w">
        <h6 class="footer-content__text-box__h6 text-transform-uppercase">
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
        <h6 class="footer__bottom__text-box__3 text-transform-uppercase">
          MENÜ
        </h6>
      </div>
      <div class="footer__bottom__text-box">
        <h6 class="footer__bottom__text-box__3 text-transform-uppercase">
          INFORMÁCIÓK
        </h6>
      </div>
      <div class="footer__bottom__text-box">
        <h6 class="footer__bottom__text-box__3 text-transform-uppercase">
          KAPCSOLAT
        </h6>
      </div>
      <div class="footer__bottom__img-box t-end">
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
