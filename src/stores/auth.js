import api from '@/services/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'
//import { ref, computed } from 'vue'
//import api from '@/services/api'

export const useAuthStore = defineStore('auth', () => {

  const user = ref(null)

  const setUserData = (data) => {
    user.value = data
    localStorage.setItem('user', JSON.stringify(data))
    api.defaults.headers.common['Authorization'] = `Bearer ${
      data.token
    }`
  }

  const clearUserData = () => {
    localStorage.removeItem('user')
    location.reload()
  }

  const login = (credentials) => {
    return api.post('/login_check', credentials)
      .then(({ data }) => {
        setUserData(data)
      })
  }

  const logout = () => {
    clearUserData()
  }

  const loggedIn = () => !!user.value
  // const accessToken = ref(null)
  // const user = ref(null)

  // const isAuthenticated = computed(() => !!accessToken.value)

  // async function login(credentials) {
  //   const res = await api.post('/login_check', credentials)

  //   accessToken.value = res.data.token
  //   user.value = res.data.user
  // }

  // async function refresh() {
  //   const res = await api.post('/token/refresh')
  //   accessToken.value = res.data.token
  // }

  // async function logout() {
  //   accessToken.value = null
  //   user.value = null
  //   await api.post('/logout')
  // }

  // async function init() {
  //   if (!accessToken.value) {
  //     await refresh()
  //   }
  // }

  // return {
  //   accessToken,
  //   user,
  //   isAuthenticated,
  //   login,
  //   refresh,
  //   logout,
  //   init
  // }
  return {
    login,
    logout,
    setUserData,
    loggedIn
  }
})
