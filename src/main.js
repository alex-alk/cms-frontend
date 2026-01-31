import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/auth'
import api from './services/api'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const auth = useAuthStore()
const userString = localStorage.getItem('user')
if (userString) {
  const userData = JSON.parse(userString)
  auth.setUserData(userData)
}
// security measure
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('errr')
    if (error.response.status === 401) {
      auth.logout()
    }
    return Promise.reject(error)
  },
)
//todo de facut request catre /me folosind tokenul

app.mount('#app')
