<template>
  <!-- TODO Make overlay sidebar for nav -->
  <div>
    <div id="navSidebar">
      <div
        v-show="isSidebarOpen"
        class="c-sidebar-display absolute top-0 left-0 bg-grey-medium text-white border-black border-r-2 h-full w-48 z-[100]"
      >
        <div class="flex justify-end">
          <button class="text-3xl mr-3 mt-1" @click="toggleSidebar">
            &times;
          </button>
        </div>
        <ul>
          <li>
            <nuxt-link
              to="/"
              class="flex items-center px-3 py-3 hover:bg-gray-200"
            >
              <HomeIcon class="white-color-filter" />
              <span class="ml-2">Home</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/share"
              class="flex items-center px-3 py-3 hover:bg-gray-200"
            >
              <ShareIcon class="white-color-filter" />
              <span class="ml-2">Share</span>
            </nuxt-link>
          </li>
          <li class="">
            <nuxt-link
              to="/about"
              class="flex items-center px-3 py-3 hover:bg-gray-200"
            >
              <AccountIcon />
              <span class="ml-2">About Me</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="#"
              class="flex items-center px-3 py-3 hover:bg-gray-200"
            >
              <LinkIcon />
              <span class="ml-2">Links</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="#"
              class="flex items-center px-3 py-3 hover:bg-gray-200"
            >
              <MailIcon class="white-color-filter" />
              <span class="ml-2">Contact Me</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import HomeIcon from "@/components/svg/HomeIcon.vue";
import ShareIcon from "@/components/svg/ShareIcon.vue";
import AccountIcon from "@/components/svg/AccountIcon.vue";
import LinkIcon from "@/components/svg/LinkIcon.vue";
import MailIcon from "@/components/svg/MailIcon.vue";

export default {
  components: { LinkIcon, ShareIcon, AccountIcon, HomeIcon, MailIcon },
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
  visibility: hidden;
  opacity: 0;
  animation: sidebar-display-animation-in 300ms linear 300ms both;
}

.c-sidebar-display.open {
  visibility: visible;
  opacity: 1;
  animation: sidebar-display-animation-in 300ms linear 0ms both;
  transform: translateX(0);
}

.c-sidebar-display.close {
  visibility: visible;
  opacity: 0;
  animation: sidebar-display-animation-out 300ms linear 0ms both;
  transform: translateX(-64px);
}

@keyframes sidebar-display-animation-out {
  0% {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    visibility: hidden;
    opacity: 0;
    transform: translateX(-64px);
  }
}

@keyframes sidebar-display-animation-in {
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
