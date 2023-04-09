<template>
  <!-- TODO Make overlay sidebar for nav -->
  <div>
    <div id="navSidebar">
      <div
        v-show="isSidebarOpen"
        class="c-sidebar-display absolute top-0 left-0 bg-white text-black border border-right h-full w-48"
      >
        <div class="flex justify-end">
          <button class="text-2xl mr-3 mt-1" @click="toggleSidebar">
            &times;
          </button>
        </div>
        <ul>
          <li>
            <nuxt-link
              to="#"
              class="flex items-center px-3 py-3 hover:bg-gray-200"
            >
              <AccountIcon />
              <span class="ml-2">Account</span>
            </nuxt-link>
          </li>
          <li class="">
            <nuxt-link
              to="#"
              class="flex items-center px-3 py-3 hover:bg-gray-200"
            >
              <SettingsIcon />
              <span class="ml-2">Settings</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="#"
              class="flex items-center px-3 py-3 hover:bg-gray-200"
            >
              <LogoutIcon />
              <span class="ml-2">Logout</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import AccountIcon from "./svg/AccountIcon.vue";
import LogoutIcon from "./svg/LogoutIcon.vue";
import SettingsIcon from "./svg/SettingsIcon.vue";

export default {
  components: { LogoutIcon, SettingsIcon, AccountIcon },
  data () {
    return {
      isSidebarOpen: false
    };
  },
  methods: {
    toggleSidebar () {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar (event) {
      const sidebar = document.getElementById("navSidebar");
      if (sidebar && !sidebar.contains(event.target)) {
        this.isSidebarOpen = false;
      }
    }
  }
};
</script>

<style>
.c-sidebar-display {
  /* Default state */
  visibility: hidden;
  opacity: 0;
  animation: sidebar-display-animation 300ms linear 300ms both;
  /* Visible state */
}
.c-sidebar-display.open {
  visibility: visible;
  opacity: 1;
  animation: sidebar-display-animation 300ms linear 0ms both;
  transform: translateX(0);
}

@keyframes sidebar-display-animation {
  0% {
    visibility: visible;
    opacity: 0;
    transform: translateX(-64px);
  }
  100% {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
