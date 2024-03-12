<script setup>
import { userData } from "../../../services/utils/localStorage";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const isAccountRoute = computed(() => {
  return route.matched.some((record) => record.name.startsWith("Account"));
});

const isProfilePage = computed(() => route.name === "Profile");
const isAddressPage = computed(() => route.name === "Address");

const isPurchasePage = computed(() => route.name === "Purchase");
const isNotificationtPage = computed(() => route.name === "Notifications");
const isVoucherPage = computed(() => route.name === "Voucher");
const isCoinPage = computed(() => route.name === "Coin");
</script>

<template>
  <div class="w-1/6 flex flex-col text-sm">
    <!-- Username -->
    <div class="flex h-1/6 gap-4 border-b items-center mx-6">
      <img :src="userData.image" class="w-[50px] h-[50px] rounded-[50%]" />

      <div class="w-4/6 text-sm">
        <div class="font-bold">
          {{ userData.firstName }} {{ userData.lastName }}
        </div>

        <div class="text-gray-400">Sửa Hồ Sơ</div>
      </div>
    </div>

    <!-- My information -->
    <div class="mt-4 flex gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-user text-blue-600"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>

      <div class="flex flex-col gap-4">
        <router-link :to="{ name: 'Account' }">
          <div class="hover:text-orange-600 hover:cursor-pointer">
            Tài Khoản Của Tôi
          </div>
        </router-link>

        <Transition>
          <div class="text-gray-600 flex flex-col gap-4" v-if="isAccountRoute">
            <router-link :to="{ name: 'Profile' }">
              <div
                :class="[
                  'hover:text-orange-600 hover:cursor-pointer',
                  isProfilePage ? 'text-orange-600' : '',
                ]"
              >
                Hồ Sơ
              </div>
            </router-link>

            <router-link :to="{ name: 'Address' }">
              <div
                :class="[
                  'hover:text-orange-600 hover:cursor-pointer',
                  isAddressPage ? 'text-orange-600' : '',
                ]"
              >
                Địa Chỉ
              </div>
            </router-link>
          </div>
        </Transition>
      </div>
    </div>

    <!-- Purchase Order -->
    <router-link :to="{ name: 'Purchase' }">
      <div
        :class="[
          'flex gap-2 mt-4 items-center',
          isPurchasePage ? 'text-orange-600' : '',
        ]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-clipboard-text text-blue-600"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
          />
          <path
            d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
          />
          <path d="M9 12h6" />
          <path d="M9 16h6" />
        </svg>

        <div class="hover:text-orange-600 hover:cursor-pointer">Đơn Mua</div>
      </div>
    </router-link>

    <!-- Notification -->
    <router-link :to="{ name: 'Notifications' }">
      <div
        :class="[
          'flex gap-2 mt-4 items-center',
          isNotificationtPage ? 'text-orange-600' : '',
        ]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-bell text-orange-600"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
          />
          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
        </svg>

        <div class="hover:text-orange-600 hover:cursor-pointer">Thông Báo</div>
      </div>
    </router-link>

    <!-- Voucher -->
    <router-link :to="{ name: 'Voucher' }">
      <div
        :class="[
          'flex gap-2 mt-4 items-center',
          isVoucherPage ? 'text-orange-600' : '',
        ]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-gift-card text-red-600"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"
          />
          <path d="M7 16l3 -3l3 3" />
          <path
            d="M8 13c-.789 0 -2 -.672 -2 -1.5s.711 -1.5 1.5 -1.5c1.128 -.02 2.077 1.17 2.5 3c.423 -1.83 1.372 -3.02 2.5 -3c.789 0 1.5 .672 1.5 1.5s-1.211 1.5 -2 1.5h-4z"
          />
        </svg>

        <div class="hover:text-orange-600 hover:cursor-pointer">Voucher</div>
      </div>
    </router-link>

    <!-- Shop Cash -->
    <router-link :to="{ name: 'Coin' }">
      <div
        :class="[
          'flex gap-2 mt-4 items-center',
          isCoinPage ? 'text-orange-600' : '',
        ]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-premium-rights text-yellow-600"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path
            d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75"
          />
          <path d="M12 7v2" />
          <path d="M12 15v2" />
        </svg>

        <div class="hover:text-orange-600 hover:cursor-pointer">Shoppe Xu</div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
