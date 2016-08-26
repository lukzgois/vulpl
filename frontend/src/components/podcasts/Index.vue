<template>
  <div class="Catalog">
    <div class="Card" v-for="podcast in podcasts">
      <a v-link="{ name: 'episode-list', params: { podcastId: podcast.id} }">
        <img src="{{ podcast.cover }}" class="Card__cover">
        <h4 class="Card__title">{{ podcast.name }}</h4>
        <p class="Card__description">{{ podcast.description }}</p>
        <p class="Card__episodes">{{ podcast.episode_count }} Episódios</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  vuex: {
    getters: {
      podcasts: store => store.podcasts.all
    }
  },
  methods: {
    podcastCover (podcast) {
      return 'ok'
    }
  }
}
</script>

<style lang="scss">
body {
  display: flex;
  font-family: Roboto,"sans-serif";
  flex-direction: column;
  background-color: #f9edff
}

header {
  text-align: center;
  margin: 5px 0 25px 0;

  h1 {
    font-weight: 100;
    font-size: 3em;
    margin: 0 0 10px 0;

    strong {
      font-weight: 500;
      color: #582A72
    }
  }

  h2 {
    font-weight: 300;
    margin: 2px
  }
}

.Catalog {
  display: flex;
  flex: 1;
  flex-wrap: wrap
}

.Card {
  border: 1px #ccc solid;
  padding: 5px;
  margin: 5px;
  width: 200px;
  text-align: center;

  &:hover {
    background-color: #e6c3f9;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  &__cover {
    width: 200px;
    height: 200px;
  }

  &__title {
    margin: 5px 0;
    text-align: center;
    font-weight: 300;
    font-size: 1.5em;
    padding: 0;
  }

  &__description {
    font-size:0.9em;
    text-align: center;
    margin: 0;
    border-bottom: 1px #ccc solid
  }

  &__episodes {
    margin: 5px;
    font-size: 0.8em;
    font-weight: 300
  }
}
</style>
