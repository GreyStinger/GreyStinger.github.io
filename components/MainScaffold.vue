<template>
  <div class="h-screen">
    <div class="h-[4rem] w-full text-white bg-grey-dark mb-2">
      <div
        class="m-auto py-3 align-middle max-w-screen-2xl flex justify-between"
      >
        <!-- Beginning Home Title -->
        <div class="px-0 mx-2 rounded-lg grid hover:bg-grey-medium">
          <h1
            id="homeTitle"
            class="ml-4 clickable place-self-center font-semibold text-2xl flex flex-nowrap"
            @click="toggleSidebar"
          >
            <span class="mr-2"><SkewBurgerIcon class="h-full bottom-0" /></span>
            Greys Home
          </h1>
        </div>
        <!-- Beginning Nav Spacing -->
        <div class="m-auto" />
        <!-- Profile Menu Icon -->
        <div id="profileMenu" class="mr-4 clickable relative hover-glow">
          <div class="p-2 aspect-square rounded-full bg-grey hover-glow">
            <object
              data="/svg/profile.svg"
              type="image/svg+xml"
              class="h-6 w-6 white-color-filter"
            >
              Your browser does not support svg
            </object>
            <div class="absolute inset-0 z-10" @click="toggleDropdown" />
          </div>
          <!-- Dropdown View -->
          <div
            v-show="isDropdownOpen"
            id="dropdown"
            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white text-black"
          >
            <div class="py-2">
              <nuxt-link
                v-if="loggedIn"
                to="#"
                class="m-0 px-4 py-2 text-sm leading-5 flex flex-nowrap align-bottom0 hover-bg hover:text-gray-900 focus:outlininline-block-gray-100 focus:text-gray-900"
              >
                Account settings
              </nuxt-link>
              <nuxt-link
                v-if="loggedIn"
                to="#"
                class="block m-0 px-4 py-2 text-sm leading-5 text-gray-700 hover-bg hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                Logout
              </nuxt-link>
              <nuxt-link
                v-if="!loggedIn"
                to="/login"
                class="block m-0 px-4 py-2 text-sm leading-5 text-gray-700 hover-bg hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                Login
              </nuxt-link>
              <nuxt-link
                v-if="!loggedIn"
                to="/register"
                class="block m-0 w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover-bg hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                Register
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ScaffoldSidebar ref="sidebar" />
    <div class="m-auto max-w-screen-2xl bg-grey-medium min-h-[90vh] rounded-lg">
      <slot />
    </div>
  </div>
</template>

<script>
import ScaffoldSidebar from "@/components/scaffolding/ScaffoldSidebar.vue";
import SkewBurgerIcon from "@/components/svg/SkewBurgerIcon.vue";

export default {
  components: { ScaffoldSidebar, SkewBurgerIcon },
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  computed: {
    loggedIn() {
      // TODO: Implement a proper check for user authentication status
      return false;
    },
  },
  mounted() {
    document.addEventListener("click", this.closeDropdown);
    document.addEventListener("click", this.scaffoldCloseSidebar);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeDropdown);
    document.removeEventListener("click", this.scaffoldCloseSidebar);
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown(event) {
      const dropdown = document.getElementById("dropdown");
      const profileMenu = document.getElementById("profileMenu");
      if (dropdown && profileMenu && !profileMenu.contains(event.target)) {
        dropdown.style.display = "none";
        this.isDropdownOpen = false;
      }
    },
    toggleSidebar() {
      this.$refs.sidebar.toggleSidebar();
    },
    scaffoldCloseSidebar(event) {
      const title = document.getElementById("homeTitle");
      if (title.contains(event.target)) {
        return;
      }
      this.$refs.sidebar.closeSidebar(event);
    },
  },
};
</script>

<style>
.clickable {
  cursor: pointer;
}

#dropdown {
  animation-duration: 0.4s;
  animation-name: slidein;
}

@keyframes slidein {
  0% {
    margin-top: 0;
  }
  50% {
    margin-top: 1rem;
  }
  100% {
    margin-top: 0.5rem;
  }
}

.hover-bg {
  transition: background-color 0.2s ease;
}

.hover-bg:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

</style>
