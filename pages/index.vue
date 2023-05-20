<template>
  <MainScaffold>
    <div class="py-2" />
    <h1 class="px-4 text-snow text-4xl">
      Greetings, welcome to my semi-portfolio
    </h1>
    <div class="px-2 py-4 mt-4 mx-4 bg-grey-medium-dark rounded-lg sm:w-3/4 md:w-2/3 lg:w-1/2">
      <p class="py-1 ml-4 text-snow">
        Welcome to GreysHome a site I've taken some time out to build.
        <br>
        This has a collection of items that I've thought necessary in my life.
        <br>
        However there is no rhyme or reason to any of the items here.
        <br>
        Check them out by clicking the top left title.
      </p>
    </div>
    <div class="my-2">
      <h1 class="px-4 py-2 text-white font-medium text-2xl">
        Whats been happening?
      </h1>
    </div>
    <div>
      <h1 class="px-4 py-2 text-white font-medium text-2xl">
        Check out some of my Projects!
      </h1>
      <div class="px-4 py-2 grid gap-2 md:grid-cols-2 sm:w-3/4 md:w-2/3">
        <RepoCard class="py-1" repo="GreyStinger/seam_carver" theme="dark-theme" />
        <RepoCard class="py-1" repo="GreyStinger/esp32-net-station" theme="dark-theme" />
        <RepoCard class="py-1" repo="GreyStinger/riv" theme="dark-theme" />
        <RepoCard class="py-1" repo="GreyStinger/rgrep" theme="dark-theme" />
      </div>
    </div>
    <noscript>
      Please enable JavaScript to view this page.. I'll be building a site with
      no JS sometime I promise..
    </noscript>
  </MainScaffold>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage"
});
</script>
