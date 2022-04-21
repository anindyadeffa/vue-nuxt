import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import Section2View from '@/views/Section2View.vue';
import Section3View from '@/views/Section3View.vue';
import Section4View from '@/views/Section4View.vue';
import Section5View from '@/views/Section5View.vue';
import Section6View from '@/views/Section6View.vue';
import Section7View from '@/views/Section7View.vue';
import Section8View from '@/views/Section8View.vue';
import Section9View from '@/views/Section9View.vue';
import Section10View from '@/views/Section10View.vue';
import Section11View from '@/views/Section11View.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
  },
  {
    path: "/section-2",
    name: "Section 2",
    component: Section2View,
  },
  {
    path: "/section-3",
    name: "Section 3",
    component: Section3View,
  },
  {
    path: "/section-4",
    name: "Section 4",
    component: Section4View,
  },
  {
    path: "/section-5",
    name: "Section 5",
    component: Section5View,
  },
  {
    path: "/section-6",
    name: "Section 6",
    component: Section6View,
  },
  {
    path: "/section-7",
    name: "Section 7",
    component: Section7View,
  },
  {
    path: "/section-8",
    name: "Section 8",
    component: Section8View,
  },
  {
    path: "/section-9",
    name: "Section 9",
    component: Section9View,
  },
  {
    path: "/section-10",
    name: "Section 10",
    component: Section10View,
  },
  {
    path: "/section-11",
    name: "Section 11",
    component: Section11View,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
