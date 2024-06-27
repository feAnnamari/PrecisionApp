import { b as __nuxt_component_0$1, a as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, ref, withCtx, createVNode, createTextVNode, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/vue/server-renderer/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/ufo/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/ofetch/dist/node.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/hookable/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/unctx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/h3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/unhead/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/radix3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/defu/dist/defu.mjs';
import '../runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/destr/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/klona/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/scule/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/ohash/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/unstorage/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/unstorage/drivers/fs-lite.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/pathe/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/PrecisionApp/node_modules/ipx/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const AccordionItems = [
      { title: "Kell-e regisztr\xE1lnom a v\xE1s\xE1rl\xE1shoz?", content: "Tartalom 1" },
      {
        title: "Okostelefonon \xE9s tableten is tudok v\xE1s\xE1rolni?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      { title: "Hogy adhatom le a rendel\xE9sem?", content: "Tartalom 3" },
      {
        title: "Lehets\xE9ges e-mailben, vagy telefonon is rendelni?",
        content: "Tartalom 4"
      }
    ];
    const currentIndex = ref(null);
    const headerClass = (index) => {
      return {
        "accordion-content__header": true,
        "red-background": currentIndex.value === index
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<!--[--><section><div class="services-content"><h2 class="services-content__h2 text-transform-uppercase t-end text-color"> SZOLG\xC1LTAT\xC1SAINK </h2><div class="grid-4"><div class="services-content__img-text-box services-content__img-text-box--one-bg position-relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/services/csapagyak.svg",
        alt: "Precision Bearing kft",
        class: "services-content__img-text-box__img",
        height: "100%"
      }, null, _parent));
      _push(`<h3 class="services-content__img-text-box__h3 text-center text-color"> CSAP\xC1GYAK </h3><p class="services-content__img-text-box__p text-color"> Fedezze fel pr\xE9mium csap\xE1gyainkat: prec\xEDzi\xF3s ors\xF3csap\xE1gyak \xE9s k\xFCl\xF6nleges ker\xE1mi\xE1s csap\xE1gyak, minden ig\xE9nyt kiel\xE9g\xEDtve! </p><div class="services-content__img-text-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "services-content__img-text-box__link-box__link" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/services/r-arrow.svg",
              alt: "Precision Bearing kft",
              class: "services-content__img-text-box__link-box__img",
              height: "100%"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/r-arrow.svg",
                alt: "Precision Bearing kft",
                class: "services-content__img-text-box__link-box__img",
                height: "100%"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="services-content__img-text-box services-content__img-text-box--two-bg position-relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/services/csapagyak.svg",
        alt: "Precision Bearing kft",
        class: "services-content__img-text-box__img",
        height: "100%"
      }, null, _parent));
      _push(`<h3 class="services-content__img-text-box__h3 text-center text-color"> GOLY\xD3SORS\xD3K </h3><p class="services-content__img-text-box__p text-color"> Jap\xE1n \xE9s d\xE9l-koreai kapcsolatainknak k\xF6sz\xF6nhet\u0151en biztos\xEDtjuk a vil\xE1gszerte ritk\xE1n el\xE9rhet\u0151 goly\xF3s ors\xF3kat, min\u0151s\xE9gi garanci\xE1val \xE9s teljes k\xF6r\u0171 gy\xE1rt\xE1si szolg\xE1ltat\xE1sokkal! </p><div class="services-content__img-text-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "services-content__img-text-box__link-box__link" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/services/r-arrow.svg",
              alt: "Precision Bearing kft",
              class: "services-content__img-text-box__link-box__img",
              height: "100%"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/r-arrow.svg",
                alt: "Precision Bearing kft",
                class: "services-content__img-text-box__link-box__img",
                height: "100%"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="services-content__img-text-box services-content__img-text-box--three-bg position-relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/services/csapagyak.svg",
        alt: "Precision Bearing kft",
        class: "services-content__img-text-box__img",
        height: "100%"
      }, null, _parent));
      _push(`<h3 class="services-content__img-text-box__h3 text-center text-color"> LINE\xC1RTECHNIKA </h3><p class="services-content__img-text-box__p text-color"> Gyors\xEDtsa fel projekteit a szersz\xE1mg\xE9piparban n\xE9lk\xFCl\xF6zhetetlen, jap\xE1n gy\xE1rtm\xE1ny\xFA line\xE1ris vezet\xE9kekkel \xE9s kocsikkal, amelyeket n\xE9met rakt\xE1runkb\xF3l 1-3 napon bel\xFCl sz\xE1ll\xEDtunk! </p><div class="services-content__img-text-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "services-content__img-text-box__link-box__link" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/services/r-arrow.svg",
              alt: "Precision Bearing kft",
              class: "services-content__img-text-box__link-box__img",
              height: "100%"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/r-arrow.svg",
                alt: "Precision Bearing kft",
                class: "services-content__img-text-box__link-box__img",
                height: "100%"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="services-content__img-text-box services-content__img-text-box--four-bg position-relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/services/csapagyak.svg",
        alt: "Precision Bearing kft",
        class: "services-content__img-text-box__img",
        height: "100%"
      }, null, _parent));
      _push(`<h3 class="services-content__img-text-box__h3 text-center text-color"> EGYEDI GY\xC1RT\xC1S </h3><p class="services-content__img-text-box__p text-color"> Felejtse el a hossz\xFA h\xF3napokig tart\xF3 v\xE1rakoz\xE1st alkatr\xE9szekre! \xDCzem\xFCnkben kis \xE9s nagy sorozatban is gy\xE1rtunk egyedi alkatr\xE9szeket, bele\xE9rtve a goly\xF3s ors\xF3k v\xE9gmegmunk\xE1l\xE1s\xE1t is. </p><div class="services-content__img-text-box__link-box position-absolute">`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "services-content__img-text-box__link-box__link" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/services/r-arrow.svg",
              alt: "Precision Bearing kft",
              class: "services-content__img-text-box__link-box__img",
              height: "100%"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/r-arrow.svg",
                alt: "Precision Bearing kft",
                class: "services-content__img-text-box__link-box__img",
                height: "100%"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section><section><div class="about-content position-relative"><div class="about-content__flex-box d-flex"><div class="about-content__flex-box__blank-div"></div><div class="about-content__img-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/about/about.webp",
        alt: "Precision Bearing kft",
        class: "about-content__img-box__img"
      }, null, _parent));
      _push(`</div></div><div class="about-content__text-box position-absolute z-100 bg-color-w"><h2 class="about-content__text-box__h2 text-transform-uppercase text-color"> R\xF3lunk </h2><p class="about-content__text-box__p text-color"> C\xE9g\xFCnk 2014-ben alakult azzal a c\xE9llal, hogy egy helyen k\xEDn\xE1ljunk minden sz\xFCks\xE9ges alkatr\xE9szt \xE9s seg\xEDts\xE9get a szersz\xE1mg\xE9pek, esztergag\xE9pek \xE9s mar\xF3g\xE9pek jav\xEDt\xE1s\xE1hoz \xE9s fel\xFAj\xEDt\xE1s\xE1hoz. Sz\xE9les term\xE9kv\xE1laszt\xE9kunkban megtal\xE1lhat\xF3ak csap\xE1gyak, goly\xF3s ors\xF3k, prec\xEDzi\xF3s csap\xE1gyany\xE1k, ken\xE9stechnikai elemek, valamint line\xE1ris vezet\xE9kek \xE9s kocsik. </p><p class="about-content__text-box__p text-color"> Elk\xF6telezettek vagyunk amellett, hogy \xFCgyfeleink sz\xE1m\xE1ra minden sz\xFCks\xE9ges t\xE1mogat\xE1st megadjunk. Amennyiben k\xE9rd\xE9se vagy k\xE9r\xE9se mer\xFCl fel, ne habozzon kapcsolatba l\xE9pni vel\xFCnk telefonon vagy e-mailben. N\xE1lunk a min\u0151s\xE9g \xE9s az \xFCgyf\xE9l el\xE9gedetts\xE9g a legfontosabb. V\xE1rjuk megkeres\xE9s\xE9t, legyen sz\xF3 aj\xE1nlatk\xE9r\xE9sr\u0151l vagy rendel\xE9sr\u0151l \u2013 a Precision Bearing Kft.-n\xE9l megtal\xE1lja, amire sz\xFCks\xE9ge van! </p><div class="about-content__text-box__link-box">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "rolunk",
        class: "page-nuxt-link text-transform-uppercase text-color-w f-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` TOV\xC1BB `);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/about/about-arrow-r.svg",
              alt: "Precision Bearing kft",
              class: "page-nuxt-link__img",
              height: "100%"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" TOV\xC1BB "),
              createVNode(_component_NuxtImg, {
                src: "/img/about/about-arrow-r.svg",
                alt: "Precision Bearing kft",
                class: "page-nuxt-link__img",
                height: "100%"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section><div class="blog-content"><h4 class="blog-content__h4 text-transform-uppercase t-end text-color"> blog </h4><p class="blog-content__p">Felt\xF6lt\xE9s alatt...</p><div class="accordion-content position-relative d-none"><!--[-->`);
      ssrRenderList(AccordionItems, (item, index) => {
        _push(`<div class="accordion-content__accordion"><div class="accordion-content__accordion__flex-box d-flex"><div class="${ssrRenderClass(headerClass(index))}"><h3 class="accordion-content__header__h3 f-600">${ssrInterpolate(item.title)}</h3><span class="${ssrRenderClass([{ "accordion-is-open": currentIndex.value === index }, "accordion-content__header__arrow"])}"></span></div><div class="${ssrRenderClass([{ AccordionOpen: currentIndex.value === index }, "accordion-content__content position-absolute"])}"><p class="accordion-content__content__p text-color">${ssrInterpolate(item.content)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section><div class="brands-content"><h5 class="brands-content__h5 text-transform-uppercase text-color-w"> \xC1LTALUNK FORGALMAZOTT M\xC1RK\xC1K </h5><div class="brands-content__img-content grid-8"><div class="brands-content__img-content__img-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/references/fag.svg",
        alt: "Precision Bearing kft",
        class: "brands-content__img-content__img-box__img"
      }, null, _parent));
      _push(`</div><div class="brands-content__img-content__img-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/references/gmn.svg",
        alt: "Precision Bearing kft",
        class: "brands-content__img-content__img-box__img"
      }, null, _parent));
      _push(`</div><div class="brands-content__img-content__img-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/references/ibc.svg",
        alt: "Precision Bearing kft",
        class: "brands-content__img-content__img-box__img"
      }, null, _parent));
      _push(`</div><div class="brands-content__img-content__img-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/references/gamet-logo-s.svg",
        alt: "Precision Bearing kft",
        class: "brands-content__img-content__img-box__img"
      }, null, _parent));
      _push(`</div><div class="brands-content__img-content__img-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/references/INA_logo.svg",
        alt: "Precision Bearing kft",
        class: "brands-content__img-content__img-box__img"
      }, null, _parent));
      _push(`</div><div class="brands-content__img-content__img-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/references/NSK_Logo.svg",
        alt: "Precision Bearing kft",
        class: "brands-content__img-content__img-box__img"
      }, null, _parent));
      _push(`</div><div class="brands-content__img-content__img-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/references/the-timken-company-vector-logo.svg",
        alt: "Precision Bearing kft",
        class: "brands-content__img-content__img-box__img"
      }, null, _parent));
      _push(`</div><div class="brands-content__img-content__img-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/references/UKF-Logo-rot.svg",
        alt: "Precision Bearing kft",
        class: "brands-content__img-content__img-box__img"
      }, null, _parent));
      _push(`</div></div></div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ntZ9X2BH.mjs.map
