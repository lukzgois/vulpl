import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter()

router.map(routes)

router.redirect({
  '*': '/podcasts'
})

export default router

