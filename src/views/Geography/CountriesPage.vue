<script setup>
import PageTop from '@/components/PageTop.vue'
import api from '@/services/api'
import { ref } from 'vue'

const showModal = ref(false)
const cc = ref(null)
const name = ref(null)

const save = () => {
  api.post('/countries', {
    cc: cc.value,
    name: name.value,
  })
}

const countries = ref(null)
api.get('/countries').then(({ data }) => {
  countries.value = data
})
</script>

<template>
  <PageTop bitem1="Static Data" bitem2="Geography" title="Countries" />

  <div v-if="showModal" class="max-w-125 mx-auto bg-white p-6 z-1 fixed">
    <div class="">Addddddddddddddddddd</div>
    <div class="mb-6">
      <label class="label">Country code</label>
      <input class="input" v-model="cc" />
    </div>

    <div class="mb-6">
      <label class="label">Name</label>
      <input class="input" v-model="name" />
    </div>
    <button type="button" class="btn btn-primary" @click="save">Save</button>
  </div>
  <div
    v-if="showModal"
    class="opacity-50 fixed top-0 left-0 w-screen h-screen bg-[rgba(108,117,125,0.75)]"
  ></div>

  <div class="flex gap-6">
    <div class="card flex-1">
      <div class="mb-6">
        <button class="btn btn-danger" type="button" @click="showModal = !showModal">
          <i class="mdi mdi-plus-circle mr-4"></i>Import Countries
        </button>
      </div>
      <div>
        <table class="w-full">
          <thead class="bg-[rgba(238,242,247,0.5)] text-left">
            <tr>
              <th class="px-2 py-[0.95rem]">Name</th>
              <th>Country code</th>
              <th style="width: 125px">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="country in countries"
              :key="country.id"
              class="border-t-[0.8px] border-t-[rgb(229,232,235)]"
            >
              <td class="px-2 py-[0.95rem]">
                {{ country.name }}
              </td>
              <td>{{ country.cc }}</td>
              <td class="text-[1.2rem] text-[#8a969c]">
                <a
                  href="javascript:void(0);"
                  class="pr-2 hover:text-[rgb(92,99,106)] transition-colors duration-200"
                >
                  <i class="mdi mdi-eye"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="px-2 hover:text-[rgb(92,99,106)] transition-colors duration-200"
                >
                  <i class="mdi mdi-square-edit-outline"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="pl-2 hover:text-[rgb(92,99,106)] transition-colors duration-200"
                >
                  <i class="mdi mdi-delete"></i
                ></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
