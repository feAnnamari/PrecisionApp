<script setup lang="ts">
import { fetchPosts, truncateContent } from '~/utils/js/utils'

const itemsPost = await fetchPosts()
</script>

<template>
  <section>
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
              :src="`${$config.public.apiBaseUrl}/storage/${post.image}`"
              alt="{{ post.title }}"
            />
            <div class="blog-content__gBox__iTextBox__tBox">
              <h5 class="blog-content__gBox__iTextBox__tBox__h5 text-color">
                {{ post.title }}
              </h5>
              <p
                class="blog-content__gBox__iTextBox__tBox__p text-color"
                v-html="truncateContent(post.body, 120)"
              ></p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
