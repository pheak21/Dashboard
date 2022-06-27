import { createRouter, createWebHashHistory } from "vue-router"
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
import Login from '../components/Login.vue'
import Accsignup from '../components/Accsignup.vue'
import HelloWorld from '../components/HelloWorld.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  // { path: '/', component: Home },
  // { path: '/about', component: About },
  { path: '/', name: 'login', component: Login },
  { path: '/signup', name: 'signup', component: Accsignup },
  { path: '/home', name: 'home', component: HelloWorld },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(process.env.BASE_URL),
  routes // short for `routes: routes`
})

export default router