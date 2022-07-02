import { createRouter, createWebHashHistory } from "vue-router"
// import HomeView from '../views/HomeView.vue'
// import About from '../views/About.vue'
import LoginForm from '../components/LoginForm.vue'
import SignupForm from '../components/SignupForm.vue'
import HelloWorld from '../components/HelloWorld.vue'
import ResetPass from '../components/ResetPass.vue'

const routes = [
  // { path: '/', component: HomeView },
  // { path: '/about', component: About },
  { path: '/', name: 'loginform', component: LoginForm },
  { path: '/signup', name: 'signup', component: SignupForm },
  { path: '/homepage', name: 'homepage', component: HelloWorld },
  { path: '/resetpassword', name: 'resetpass', component: ResetPass },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router