import Podcast from 'components/podcasts/Index.vue'
import EpisodeList from 'components/podcasts/Episodes.vue'

export default {
  '/podcasts': {
    component: Podcast
  },
  '/podcasts/:podcastId/episodes': {
    name: 'episode-list',
    component: EpisodeList
  }
}

