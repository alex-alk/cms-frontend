<script setup>
import { ref } from 'vue'
//import api from '@/services/api'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')

function submit() {
  auth
    .login({ username: email.value, password: password.value })
      .then(() => {
        router.push('/')
      })
}


// const loading = ref(false)
// const error = ref('')

// const auth = useAuthStore()
//

// async function submit() {
//   loading.value = true
//   error.value = ''

//   try {
//     // 1️⃣ creează user
//     //await api.post('/register', { email: email.value, password: password.value })

//     // 2️⃣ opțional: login imediat după register
//     await auth.login({ username: email.value, password: password.value })

//     // 3️⃣ redirect către home
//     router.push('/')
//   } catch (e) {
//     error.value = e.response?.data?.error || 'Login failed'
//   } finally {
//     loading.value = false
//   }
// }

const passwordVisible = ref(false)
</script>

<template>
  <div class="sm:py-12.5 flex justify-center">
    <div class="max-w-104">
      <div class="card p-9">
        <img src="/src/assets/img/logo.png" class="h-7 mx-auto" />
        <div class="pb-13 pt-6 px-11">
          <p class="text-[14px] text-muted text-center">
            Let's get you started. Create your account by entering your details below.
          </p>
        </div>

        <div class="mb-6">
          <label class="label">Email</label><span class="text-danger"> *</span>
          <input class="input" placeholder="Enter your email" v-model="email" />
        </div>

        <div class="mb-6">
          <label class="label">Password</label>
          <div class="flex w-full">
            <input
              v-model="password"
              type="password"
              placeholder="Enter your password"
              class="input rounded-r-none"
            />
            <div @click="passwordVisible = !passwordVisible" class="password-eye-box">
              <span
                :class="{
                  'mdi mdi-eye-off-outline': passwordVisible,
                  'mdi mdi-eye-outline': !passwordVisible,
                }"
              ></span>
            </div>
          </div>
        </div>

        <div class="mb-6">
          <input id="cb" type="checkbox" class="checkbox" />
          <label class="label" for="cb"
            >I accept <a class="text-[rgb(114,124,245)]" href="/">Terms and Conditions</a></label
          >
        </div>
        <div class="w-full flex justify-center">
          <button type="button" class="btn btn-primary" @click="submit" :disabled="loading">
            Sign In
          </button>
          <p v-if="error" class="error">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
