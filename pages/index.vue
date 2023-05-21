<template>
  <MainScaffold>
    <div class="py-2" />
    <h1 class="px-4 text-snow text-4xl">
      Greetings and welcome to my somewhat semi-portfolio.
    </h1>
    <div class="px-4 py-4 mb-4 mt-6 mx-4 bg-grey-medium-dark flex flex-col md:flex-row rounded-lg sm:w-3/4 md:w-fit">
      <div>
        <p class="ml-2 mr-4 mb-4 md:mb-0 text-lg text-snow md:max-w-2xl">
          Hi. My name is Jayden Andrews. I consider myself a backend engineer
          and programmer.
          While I can do some frontend programming, my passion lies in systems
          design and administration.
          <br><br>
          This is my new GreysHome site that I've taken some time out to build.
          This contains a web frontend share system that I've thought necessary
          in my life that will also in time get a better discord plugin.
          However there is no rhyme or reason to any of the items here.
          Check them out by clicking the top left title.
        </p>
      </div>
      <GithubProfile class="ml-2" />
    </div>
    <div>
      <h1 class="px-4 pt-1 pb-1 text-white font-medium text-2xl">
        Check out some of my other Projects!
      </h1>
      <div class="px-4 py-2 grid gap-2 md:grid-cols-2 sm:w-3/4 md:w-fit">
        <RepoCard repo="GreyStinger/seam_carver" theme="dark-theme" />
        <RepoCard repo="GreyStinger/esp32-net-station" theme="dark-theme" />
        <RepoCard repo="GreyStinger/riv" theme="dark-theme" />
        <RepoCard repo="GreyStinger/rgrep" theme="dark-theme" />
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
