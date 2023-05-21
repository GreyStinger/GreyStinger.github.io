<template>
  <article class="user md:w-96" :class="{spinner: isLoading}">
    <dl v-if="!isLoading" class="user-data">
      <dt>Avatar:</dt>
      <dd class="user-avatar">
        <img :src="user.avatar_url" alt="avatar">
      </dd>

      <dt>Fullname:</dt>
      <dd class="user-name">
        {{ user.name }}
      </dd>

      <dt>Account:</dt>
      <a :href="user.html_url" class="user-github-url">
        <dd class="user-account">{{ username }}</dd>
      </a>
    </dl>
    <dl v-if="!isLoading" class="user-stats">
      <dt>Repos</dt>
      <a :href="user.html_url + '?tab=repositories'" class="user-repos-url">
        <dd class="user-repos" data-stats="repos">{{ user.public_repos }}</dd>
      </a>

      <dt>Followers</dt>
      <a :href="user.html_url + '?tab=followers'" class="user-followers-url">
        <dd class="user-followers" data-stats="followers">{{ user.followers }}</dd>
      </a>
    </dl>
  </article>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup () {
    const username = "GreyStinger"; // static username
    const user = ref(null);
    const isLoading = ref(true);

    const getUser = async () => {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: "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"
        }
      });
      user.value = await response.json();
      isLoading.value = false;
    };

    onMounted(getUser); // This will fetch new user info on component mount

    return { user, username, isLoading };
  }
};
</script>

<style scoped>
  :host {
    display: inline-block;
  }

  .user {
    font-family: "Helvetica", Arial, sans-serif;
    display: inline-block;
    /* width: 265px; */
    height: 310px;
    overflow: hidden;
    border-radius: 6px;
    position: relative;
    background-color: #2E353C;
    text-align: center;
    color: #fff;
    font-weight: 100;
    transition: background 1000ms ease-out;
  }

  .user dl,
  .user dd {
    margin: 0;
  }

  .user dt {
    display: none;
  }

  .user-data {
    background: #fff url('~assets/images/GithubProfile/github.png') no-repeat 5px 5px;
    background-size: 25px;
    height: 85px;
    border: 1px solid #D5D5D5;
    border-bottom:0;
  }

  dd.user-avatar {
    display: inline-block;
    margin: 20px 0 10px;
  }

  .user-avatar img {
    border-radius: 100%;
    height: 120px;
    width: 120px;
    border: 3px solid #fff;
    vertical-align: middle;
    background-color: #fff;
  }

  dd.user-name,
  dd.user-account {
    margin: 5px 0;
  }

  .user-name {
    font-size: 24px;
  }

  .user-account {
    font-size: 16px;
    color: #999;
    margin: 5px 0;
  }

  .user-stats {
    border-top: 1px groove #999;
    position: relative;
    top: 155px;
  }

  .user-stats dd {
    padding: 10px 20px;
  }

  .user-repos,
  .user-following,
  .user-followers {
    display: inline-block;
    font-size: 22px;
    color: #999;
  }

  .user-repos:after,
  .user-following:after,
  .user-followers:after {
    content: attr(data-stats);
    text-transform: uppercase;
    display: block;
    font-size: 11px;
    color: #666;
    font-weight: normal;
    line-height: 1.7em;
  }

  .spinner {
    background: url('~assets/images/GithubProfile/spinner.gif') no-repeat center center;
  }

  a.user-github-url,
  a.user-repos-url,
  a.user-followers-url {
      text-decoration: none;
  }
</style>
