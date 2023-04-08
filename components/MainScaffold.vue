<template>
  <div class="p-4 h32 w-full text-white bg-grey-dark flex">
    <div class="grid">
      <h1 class="place-self-center text-xl font-bold">
        Greys Home
      </h1>
    </div>
    <div class="m-auto" />
    <div id="profileMenu" class="relative">
      <div class="p-2 aspect-square rounded-full bg-grey">
        <object
          data="/svg/profile.svg"
          type="image/svg+xml"
          class="h-6 w-6 object-color-filter"
        >
          Your browser does not support svg
        </object>
        <div class="absolute inset-0 z-10" @click="toggleDropdown" />
      </div>
      <!-- Dropdown view -->
      <div
        v-show="isDropdownOpen"
        id="dropdown"
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white text-black"
      >
        <div>
          <nuxt-link
            v-if="loggedIn"
            href="#"
            class="block m-0 px-4 py-2 text-sm leading-5 text-gray-700 hover-bg hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
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
    <slot />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    loggedIn () {
      // TODO: Implement a proper check for user authentication status
      return false
    }
  },
  methods: {
    toggleDropdown () {
      this.isDropdownOpen = !this.isDropdownOpen
    }
  }
}
</script>

<style>
.object-color-filter {
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(174deg)
    brightness(109%) contrast(102%);
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
