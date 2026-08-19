import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BioView from '../views/BioView.vue'
import GalleryView from '../views/GalleryView.vue'
import ContactView from '../views/ContactView.vue'
import GalleryTopicView from '../views/GalleryTopicView.vue'
import SubEventGalleryView from '../views/SubEventGalleryView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/biography',
    name: 'bio',
    component: BioView,
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/events',
    name: 'events',
    component: GalleryTopicView,
    props:{
      title: 'Events',
      storageAddress: 'events',
      titleImg:''
    }
  },
  {
    path: '/concerts',
    name: 'concerts',
    component: GalleryTopicView,
    props:{
      title: 'Concerts',
      storageAddress: 'concerts',
      titleImg: 'https://storage.googleapis.com/vinceportfolio-1660492063078.appspot.com/concerts/Concert%201/_MG_1821.jpg'
    }
  },
  {
    path: '/sports',
    name: 'sports',
    component: GalleryTopicView,
    props:{
      title: 'Sports',
      storageAddress: 'sports',
      titleImg: ''
    }
  },
  // {
  //   path: '/subEventpage',
  //   name: 'SubEventPage',
  //   component: SubEventGalleryView,
  //   props : true
  // },
  {
    path: '/:topicName/:subfolderName',
    name: 'SubEventPage',
    component : SubEventGalleryView,
    props : true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

  scrollBehavior: () => {
    return {top: 0}
  }
  
})

export default router
