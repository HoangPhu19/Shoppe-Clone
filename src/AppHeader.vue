<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

import {
  appLocalStorage,
  userData,
  cart,
  isLogin,
} from "./services/utils/localStorage";

const router = useRouter();

const route = useRoute();

const isCartPage = computed(() => route.name === "Cart");

const isCheckoutPage = computed(() => route.name === "Checkout");

const isSignInPage = computed(() => route.name === "SignIn");

const isHomePage = computed(() => route.name === "Home");

const AddedCart = computed(() => cart.value);

const countProductInCart = computed(() => {
  let count = AddedCart.value.length;
  return count;
});

const iShowModalCart = ref(false);

const iShowModalOptions = ref(false);

const onLogout = () => {
  appLocalStorage.value.userData = {};
  appLocalStorage.value.accessToken = "";

  router.replace({ name: "SignIn" });
};
</script>

<template>
  <div
    :class="[isSignInPage ? 'hidden' : 'bg-header', isHomePage ? 'fixed ' : '']"
  >
    <div class="navbar-header">
      <div class="navbar-top">
        <div class="navbar-left">
          <div class="content-navbar__left">Kênh Người Bán</div>

          <div class="after"></div>

          <div class="content-navbar__left">Trở thành Người bán Shopee</div>

          <div class="after"></div>

          <div class="content-navbar__left">Tải ứng dụng</div>

          <div class="after"></div>

          <div>Kết nối</div>

          <div class="content-navbar__left icon-brand">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-facebook"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                ></path>
              </svg>
            </div>
          </div>

          <div class="content-navbar__left icon-brand">
            <div class="icon-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-instagram"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
                ></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M16.5 7.5l0 .01"></path>
              </svg>
            </div>
          </div>
        </div>

        <div class="navbar-center"></div>

        <div class="navbar-right">
          <!-- Thông báo -->
          <div class="navbar-right__v1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-bell-ringing"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
                ></path>
                <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"></path>
                <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"></path>
              </svg>
            </div>

            <div>Thông Báo</div>
          </div>

          <!-- Hỗ trợ -->
          <div class="navbar-right__v1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-help"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M12 17l0 .01"></path>
                <path
                  d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"
                ></path>
              </svg>
            </div>

            <div>Hỗ Trợ</div>
          </div>

          <!-- Ngôn ngữ -->
          <div class="navbar-right__v1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-world"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M3.6 9h16.8"></path>
                <path d="M3.6 15h16.8"></path>
                <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                <path d="M12.5 3a17 17 0 0 1 0 18"></path>
              </svg>
            </div>

            <div>Tiếng Việt</div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 9l6 6l6 -6"></path>
              </svg>
            </div>
          </div>

          <!-- Profile -->
          <div
            class="flex gap-2 relative text-sm cursor-pointer"
            @mouseover="iShowModalOptions = true"
            @mouseleave="iShowModalOptions = false"
          >
            <div class="w-5 h-5" v-if="isLogin">
              <img class="w-full h-full rounded-[50%]" :src="userData.image" />
            </div>

            <div v-if="isLogin">
              {{ userData.firstName }} {{ userData.lastName }}
            </div>

            <!-- Modal Options -->
            <transition>
              <div
                class="flex flex-col bg-white absolute top-5 right-0 text-black z-50 text-nowrap"
                v-if="iShowModalOptions"
              >
                <router-link :to="{ name: 'Profile' }">
                  <div class="p-3 hover:bg-gray-50 hover:text-green-400">
                    Tài Khoản Của Tôi
                  </div>
                </router-link>

                <router-link :to="{ name: 'Purchase' }">
                  <div class="p-3 hover:bg-gray-50 hover:text-green-400">
                    Đơn Mua
                  </div>
                </router-link>

                <div
                  class="p-3 hover:bg-gray-50 hover:text-green-400"
                  @click="onLogout"
                >
                  Đăng xuất
                </div>
              </div>
            </transition>
          </div>

          <!-- Auth -->
          <div class="flex gap-2" v-if="!isLogin">
            <router-link :to="{ name: 'SignUp' }">
              <div>Đăng Ký</div>
            </router-link>

            <div class="after"></div>

            <router-link :to="{ name: 'SignIn' }">
              <div>Đăng Nhập</div>
            </router-link>
          </div>
        </div>
      </div>

      <div :class="[isCheckoutPage || isCartPage ? 'hidden' : 'navbar-bottom']">
        <!-- Logo -->
        <div class="navbar-bottom__left">
          <router-link to="/">
            <div>
              <svg
                viewBox="0 0 192 65"
                class="shopee-svg-icon header-with-search__shopee-logo icon-shopee-logo"
              >
                <g fill-rule="evenodd">
                  <path
                    d="M35.6717403 44.953764c-.3333497 2.7510509-2.0003116 4.9543414-4.5823845 6.0575984-1.4379707.6145919-3.36871.9463856-4.896954.8421628-2.3840266-.0911143-4.6237865-.6708937-6.6883352-1.7307424-.7375522-.3788551-1.8370513-1.1352759-2.6813095-1.8437757-.213839-.1790053-.239235-.2937577-.0977428-.4944671.0764015-.1151823.2172535-.3229831.5286218-.7791994.45158-.6616533.5079208-.7446018.5587128-.8221779.14448-.2217688.3792333-.2411091.6107855-.0588804.0243289.0189105.0243289.0189105.0426824.0333083.0379873.0294402.0379873.0294402.1276204.0990653.0907002.0706996.14448.1123887.166248.1287205 2.2265285 1.7438508 4.8196989 2.7495466 7.4376251 2.8501162 3.6423042-.0496401 6.2615109-1.6873341 6.7308041-4.2020035.5160305-2.7675977-1.6565047-5.1582742-5.9070334-6.4908212-1.329344-.4166762-4.6895175-1.7616869-5.3090528-2.1250697-2.9094471-1.7071043-4.2697358-3.9430584-4.0763845-6.7048539.296216-3.8283059 3.8501677-6.6835796 8.340785-6.702705 2.0082079-.004083 4.0121475.4132378 5.937338 1.2244562.6816382.2873109 1.8987274.9496089 2.3189359 1.2633517.2420093.1777159.2898136.384872.1510957.60836-.0774686.12958-.2055158.3350171-.4754821.7632974l-.0029878.0047276c-.3553311.5640922-.3664286.5817134-.447952.7136572-.140852.2144625-.3064598.2344475-.5604202.0732783-2.0600669-1.3839063-4.3437898-2.0801572-6.8554368-2.130442-3.126914.061889-5.4706057 1.9228561-5.6246892 4.4579402-.0409751 2.2896772 1.676352 3.9613243 5.3858811 5.2358503 7.529819 2.4196871 10.4113092 5.25648 9.869029 9.7292478M26.3725216 5.42669372c4.9022893 0 8.8982174 4.65220288 9.0851664 10.47578358H17.2875686c.186949-5.8235807 4.1828771-10.47578358 9.084953-10.47578358m25.370857 11.57065968c0-.6047069-.4870064-1.0948761-1.0875481-1.0948761h-11.77736c-.28896-7.68927544-5.7774923-13.82058185-12.5059489-13.82058185-6.7282432 0-12.2167755 6.13130641-12.5057355 13.82058185l-11.79421958.0002149c-.59136492.0107446-1.06748731.4968309-1.06748731 1.0946612 0 .0285807.00106706.0569465.00320118.0848825H.99995732l1.6812605 37.0613963c.00021341.1031483.00405483.2071562.01173767.3118087.00170729.0236381.003628.0470614.00554871.0704847l.00362801.0782207.00405483.004083c.25545428 2.5789222 2.12707837 4.6560709 4.67201764 4.7519129l.00576212.0055872h37.4122078c.0177132.0002149.0354264.0004298.0531396.0004298.0177132 0 .0354264-.0002149.0531396-.0004298h.0796027l.0017073-.0015043c2.589329-.0706995 4.6867431-2.1768587 4.9082648-4.787585l.0012805-.0012893.0017073-.0350275c.0021341-.0275062.0040548-.0547975.0057621-.0823037.0040548-.065757.0068292-.1312992.0078963-.1964115l1.8344904-37.207738h-.0012805c.001067-.0186956.0014939-.0376062.0014939-.0565167M176.465457 41.1518926c.720839-2.3512494 2.900423-3.9186779 5.443734-3.9186779 2.427686 0 4.739107 1.6486899 5.537598 3.9141989l.054826.1556978h-11.082664l.046506-.1512188zm13.50267 3.4063683c.014933.0006399.014933.0006399.036906.0008531.021973-.0002132.021973-.0002132.044372-.0008531.53055-.0243144.950595-.4766911.950595-1.0271786 0-.0266606-.000853-.0496953-.00256-.0865936.000427-.0068251.000427-.020262.000427-.0635588 0-5.1926268-4.070748-9.4007319-9.09145-9.4007319-5.020488 0-9.091235 4.2081051-9.091235 9.4007319 0 .3871116.022399.7731567.067838 1.1568557l.00256.0204753.01408.1013102c.250022 1.8683731 1.047233 3.5831812 2.306302 4.9708108-.00064-.0006399.00064.0006399.007253.0078915 1.396026 1.536289 3.291455 2.5833031 5.393601 2.9748936l.02752.0053321v-.0027727l.13653.0228215c.070186.0119439.144211.0236746.243409.039031 2.766879.332724 5.221231-.0661182 7.299484-1.1127057.511777-.2578611.971928-.5423827 1.37064-.8429007.128211-.0968312.243622-.1904632.34346-.2781231.051412-.0452164.092372-.083181.114131-.1051493.468898-.4830897.498124-.6543572.215249-1.0954297-.31146-.4956734-.586228-.9179769-.821744-1.2675504-.082345-.1224254-.154023-.2267215-.214396-.3133151-.033279-.0475624-.033279-.0475624-.054399-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.00256-.0038391c-.256208-.3188605-.431565-.3480805-.715933-.0970445-.030292.0268739-.131624.1051493-.14997.1245582-1.999321 1.775381-4.729508 2.3465571-7.455854 1.7760208-.507724-.1362888-.982595-.3094759-1.419919-.5184948-1.708127-.8565509-2.918343-2.3826022-3.267563-4.1490253l-.02752-.1394881h13.754612zM154.831964 41.1518926c.720831-2.3512494 2.900389-3.9186779 5.44367-3.9186779 2.427657 0 4.739052 1.6486899 5.537747 3.9141989l.054612.1556978h-11.082534l.046505-.1512188zm13.502512 3.4063683c.015146.0006399.015146.0006399.037118.0008531.02176-.0002132.02176-.0002132.044159-.0008531.530543-.0243144.950584-.4766911.950584-1.0271786 0-.0266606-.000854-.0496953-.00256-.0865936.000426-.0068251.000426-.020262.000426-.0635588 0-5.1926268-4.070699-9.4007319-9.091342-9.4007319-5.020217 0-9.091343 4.2081051-9.091343 9.4007319 0 .3871116.022826.7731567.068051 1.1568557l.00256.0204753.01408.1013102c.250019 1.8683731 1.04722 3.5831812 2.306274 4.9708108-.00064-.0006399.00064.0006399.007254.0078915 1.396009 1.536289 3.291417 2.5833031 5.393538 2.9748936l.027519.0053321v-.0027727l.136529.0228215c.070184.0119439.144209.0236746.243619.039031 2.766847.332724 5.22117-.0661182 7.299185-1.1127057.511771-.2578611.971917-.5423827 1.370624-.8429007.128209-.0968312.243619-.1904632.343456-.2781231.051412-.0452164.09237-.083181.11413-.1051493.468892-.4830897.498118-.6543572.215246-1.0954297-.311457-.4956734-.586221-.9179769-.821734-1.2675504-.082344-.1224254-.154022-.2267215-.21418-.3133151-.033492-.0475624-.033492-.0475624-.054612-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.002346-.0038391c-.256419-.3188605-.431774-.3480805-.716138-.0970445-.030292.0268739-.131623.1051493-.149969.1245582-1.999084 1.775381-4.729452 2.3465571-7.455767 1.7760208-.507717-.1362888-.982582-.3094759-1.419902-.5184948-1.708107-.8565509-2.918095-2.3826022-3.267311-4.1490253l-.027733-.1394881h13.754451zM138.32144123 49.7357905c-3.38129629 0-6.14681004-2.6808521-6.23169343-6.04042014v-.31621743c.08401943-3.35418649 2.85039714-6.03546919 6.23169343-6.03546919 3.44242097 0 6.23320537 2.7740599 6.23320537 6.1960534 0 3.42199346-2.7907844 6.19605336-6.23320537 6.19605336m.00172791-15.67913203c-2.21776751 0-4.33682838.7553485-6.03989586 2.140764l-.19352548.1573553V34.6208558c0-.4623792-.0993546-.56419733-.56740117-.56419733h-2.17651376c-.47409424 0-.56761716.09428403-.56761716.56419733v27.6400724c0 .4539841.10583425.5641973.56761716.5641973h2.17651376c.46351081 0 .56740117-.1078454.56740117-.5641973V50.734168l.19352548.1573553c1.70328347 1.3856307 3.82234434 2.1409792 6.03989586 2.1409792 5.27140956 0 9.54473746-4.2479474 9.54473746-9.48802964 0-5.239867-4.2733279-9.48781439-9.54473746-9.48781439M115.907646 49.5240292c-3.449458 0-6.245805-2.7496948-6.245805-6.1425854 0-3.3928907 2.79656-6.1427988 6.245805-6.1427988 3.448821 0 6.24538 2.7499081 6.24538 6.1427988 0 3.3926772-2.796346 6.1425854-6.24538 6.1425854m.001914-15.5438312c-5.28187 0-9.563025 4.2112903-9.563025 9.4059406 0 5.1944369 4.281155 9.4059406 9.563025 9.4059406 5.281657 0 9.562387-4.2115037 9.562387-9.4059406 0-5.1946503-4.280517-9.4059406-9.562387-9.4059406M94.5919049 34.1890939c-1.9281307 0-3.7938902.6198995-5.3417715 1.7656047l-.188189.1393105V23.2574169c0-.4254677-.1395825-.5643476-.5649971-.5643476h-2.2782698c-.4600414 0-.5652122.1100273-.5652122.5643476v29.2834155c0 .443339.1135587.5647782.5652122.5647782h2.2782698c.4226187 0 .5649971-.1457701.5649971-.5647782v-9.5648406c.023658-3.011002 2.4931278-5.4412923 5.5299605-5.4412923 3.0445753 0 5.516841 2.4421328 5.5297454 5.4630394v9.5430935c0 .4844647.0806524.5645628.5652122.5645628h2.2726775c.481764 0 .565212-.0824666.565212-.5645628v-9.5710848c-.018066-4.8280677-4.0440197-8.7806537-8.9328471-8.7806537M62.8459442 47.7938061l-.0053397.0081519c-.3248668.4921188-.4609221.6991347-.5369593.8179812-.2560916.3812097-.224267.551113.1668119.8816949.91266.7358184 2.0858968 1.508535 2.8774525 1.8955369 2.2023021 1.076912 4.5810275 1.646045 7.1017886 1.6975309 1.6283921.0821628 3.6734936-.3050536 5.1963734-.9842376 2.7569891-1.2298679 4.5131066-3.6269626 4.8208863-6.5794607.4985136-4.7841067-2.6143125-7.7747902-10.6321784-10.1849709l-.0021359-.0006435c-3.7356476-1.2047686-5.4904836-2.8064071-5.4911243-5.0426086.1099976-2.4715346 2.4015793-4.3179454 5.4932602-4.4331449 2.4904317.0062212 4.6923065.6675996 6.8557356 2.0598624.4562232.2767364.666607.2256796.9733188-.172263.035242-.0587797.1332787-.2012238.543367-.790093l.0012815-.0019308c.3829626-.5500403.5089793-.7336731.5403767-.7879478.258441-.4863266.2214903-.6738208-.244985-1.0046173-.459427-.3290803-1.7535544-1.0024722-2.4936356-1.2978721-2.0583439-.8211991-4.1863175-1.2199998-6.3042524-1.1788111-4.8198184.1046878-8.578747 3.2393171-8.8265087 7.3515337-.1572005 2.9703036 1.350301 5.3588174 4.5000778 7.124567.8829712.4661613 4.1115618 1.6865902 5.6184225 2.1278667 4.2847814 1.2547527 6.5186944 3.5630343 6.0571315 6.2864205-.4192725 2.4743234-3.0117991 4.1199394-6.6498372 4.2325647-2.6382344-.0549182-5.2963324-1.0217793-7.6043603-2.7562084-.0115337-.0083664-.0700567-.0519149-.1779185-.1323615-.1516472-.1130543-.1516472-.1130543-.1742875-.1300017-.4705335-.3247898-.7473431-.2977598-1.0346184.1302162-.0346012.0529875-.3919333.5963776-.5681431.8632459"
                  ></path>
                </g>
              </svg>
            </div>
          </router-link>
        </div>

        <!-- Sale off suggestions -->
        <div class="navbar-bottom__center">
          <div class="shoppe-searchbar__main">
            <input type="text" class="shoppe-searchbar-input" />

            <div class="shoppe-searchbar__button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-search"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
              </svg>
            </div>
          </div>

          <div class="navbar-bottom__center__content">
            <div>Dép 1k</div>
            <div>Áo 1k</div>
            <div>Ốp</div>
            <div>Điện Thoại Giá Rẻ 1k</div>
            <div>Dép Nam</div>
            <div>Kẹp Tóc</div>
            <div>Kính</div>
            <div>Áo Khoác 1k FreeShip</div>
            <div>Đồ 1k</div>
            <div>Son</div>
            <div>Dao Đồ Chơi</div>
            <div>Iphone 1k</div>
          </div>
        </div>

        <!-- Cart -->
        <div class="navbar-bottom__right relative">
          <div
            class="w-auto"
            @mouseover="iShowModalCart = true"
            @mouseleave="iShowModalCart = false"
          >
            <div class="relative cursor-pointer">
              <router-link
                :to="isLogin ? { name: 'Cart' } : { name: 'SignIn' }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-shopping-cart"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M17 17h-11v-14h-2"></path>
                  <path d="M6 5l14 1l-1 7h-13"></path>
                </svg>
              </router-link>

              <div
                class="w-6 h-4 text-orange-600 text-sm bg-white rounded-full border-2 border-orange-600 absolute top-[-5px] right-[-10px] flex justify-center items-center"
                v-if="countProductInCart > 0"
              >
                {{ countProductInCart }}
              </div>
            </div>

            <!-- Modal Cart -->
            <transition>
              <div
                :class="[
                  isLogin
                    ? 'w-96 bg-white border absolute top-[30px] right-[60px] z-50'
                    : 'w-96 h-52 flex justify-center items-center bg-white border absolute top-[30px] right-[60px] z-50',
                ]"
                v-if="iShowModalCart"
              >
                <div
                  v-if="!isLogin"
                  class="flex flex-col justify-center items-center"
                >
                  <img
                    src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
                    class="w-36"
                  />

                  <span class="text-sm text-gray-400">Chưa Có Sản Phẩm</span>
                </div>

                <div v-if="isLogin">
                  <div class="text-sm text-gray-400 p-2">Sản Phẩm Mới Thêm</div>

                  <div
                    class="w-full p-2 flex justify-between text-sm mb-2 bg-gray-50"
                    v-for="product in AddedCart"
                    :key="product.id"
                  >
                    <div class="flex w-3/5 gap-2">
                      <div class="w-1/6 border">
                        <img :src="product.image" />
                      </div>

                      <div class="w-full truncate">
                        {{ product.description }}
                      </div>
                    </div>

                    <div class="text-orange-600">
                      {{ product.price }} dollars
                    </div>
                  </div>

                  <router-link :to="{ name: 'Cart' }">
                    <div class="flex justify-end p-2 text-white text-sm">
                      <div class="bg-orange-600 p-2 rounded hover:opacity-90">
                        Xem Giỏ Hàng
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-header {
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background: linear-gradient(-180deg, #f53d2d, #f63);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-top {
  width: inherit;
  max-width: 1200px;
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  height: 2.125rem;
}

.navbar-top .navbar-left {
  display: flex;
  color: #fff;
  gap: 10px;
}

.after {
  height: 0.9375rem;
  width: 0;
  border-left: 1px solid hsla(0, 0%, 100%, 0.22);
  border-right: 1px solid hsla(0, 0%, 100%, 0.22);
}

.navbar-top .navbar-left .content-navbar__left:hover {
  cursor: pointer;
  opacity: 0.5;
}

.icon-brand .icon-circle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-top .navbar-center {
  flex: 1;
}

.navbar-top .navbar-right {
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
}

.navbar-top .navbar-right .navbar-right__v1 {
  display: flex;
  gap: 2px;
  align-items: center;
}

.navbar-bottom {
  width: 1200px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
}

.navbar-bottom__left {
  padding-right: 2.5rem;
}

.navbar-bottom__center {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 840px;
  position: relative;
  padding-top: 1rem;
}

.shoppe-searchbar__main {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  height: 2.5rem;
  box-sizing: border-box;
  padding: 0.1875rem;
  border-radius: 2px;
  background: #fff;
}
.navbar-bottom__center .shoppe-searchbar-input {
  display: flex;
  flex: 1;
  align-items: center;
  outline: none;
  border: 0;
  padding: 1rem;
  margin: 0;
}

.navbar-bottom__center .shoppe-searchbar__button {
  height: 34px;
  min-width: 60px;
  max-width: 190px;
  background: #ee4d2d;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  flex-direction: column;
  font-size: 14px;
  box-sizing: border-box;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  outline: 0;
  cursor: pointer;
}

.navbar-bottom__center .shoppe-searchbar__button:hover {
  opacity: 0.8;
}

.icon-tabler-search {
  color: #fff;
}

.navbar-bottom__center__content {
  margin-top: 0.1875rem;
  width: 100%;
  height: 1.5rem;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.5rem;
  display: flex;
  justify-content: space-between;
  color: #fff;
  align-items: center;
}

.navbar-bottom__right {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-bottom: 5px;
  margin: 0 10px;
}

.icon-tabler-shopping-cart {
  color: #fff;
}

.shopee-svg-icon {
  fill: #fff;
  width: 162px;
  height: 50px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
