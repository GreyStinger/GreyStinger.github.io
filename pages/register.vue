<template>
  <MainScaffold class="">
    <div class="bg-grey-medium text-white rounded-lg font-family-karla">
      <div class="w-full flex flex-wrap">
        <!-- Image Section -->
        <div class="w-1/2 shadow-2xl">
          <img
            class="object-cover rounded-l-lg object-left w-full min-h-[90vh] hidden md:block"
            src="@/assets/images/register-bg.jpg"
          />
        </div>

        <!-- Login Section -->
        <div class="w-full md:w-1/2 flex flex-col">
          <div
            class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
          >
            <p class="pt text-center text-3xl">Register?</p>
            <form
              class="flex flex-col pt-3 md:pt-8"
              onsubmit="event.preventDefault();"
            >
              <div class="flex flex-col pt-4">
                <label for="username" class="text-lg">Email</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Your Email"
                  class="text-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div class="flex flex-col pt-4">
                <label for="username" class="text-lg">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Your username"
                  class="text-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div class="flex flex-col pt-4 relative">
                <label for="password" class="text-lg">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Your password"
                  class="text-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div class="flex flex-col pt-4 relative">
                <label for="password" class="text-lg">Confirm Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Confirm your password"
                  class="text-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div class="flex flex-col pt-4">
                <label
                  for="show-password"
                  class="flex items-center select-none"
                >
                  <input
                    type="checkbox"
                    class="mr-2"
                    name="show-passwords"
                    id="show-password"
                  />
                  <span class="mr-2">Show password</span>
                </label>
              </div>

              <button
                type="submit"
                class="bg-white text-black font-bold text-lg hover:bg-gray-700 p-2 mt-8"
              >
                Log In
              </button>
            </form>
            <div class="text-center pt-12 pb-12">
              <p>
                Already have an account with me?
                <nuxt-link to="/login" class="underline font-semibold"
                  >Login here.</nuxt-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainScaffold>
</template>

<script>
export default {
  mounted() {
    var checkbox = document.querySelector("#show-password");
    var password = document.querySelector("#password");
    checkbox.checked = false;
    checkbox.addEventListener(
      "click",
      function (event) {
        if (checkbox.checked) {
          password.type = "text";
        } else {
          password.type = "password";
        }
      },
      false
    );
  },
  methods: {},
};
</script>

<style>
.container-inner {
  max-width: 800px;
}
.show {
  right: 0;
  bottom: 0;
  width: 24px;
  height: 24px;
  padding: 8px;
}
</style>
