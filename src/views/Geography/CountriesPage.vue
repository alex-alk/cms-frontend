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

const openModal = () => {
  showModal.value = true
  document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px'
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  document.body.style.paddingRight = null
  document.body.style.overflow = null
}

const countries = ref(null)
api.get('/countries').then(({ data }) => {
  countries.value = data
})
</script>

<template>
  <PageTop bitem1="Static Data" bitem2="Geography" title="Countries" />

  <div class="modal-backdrop" :class="showModal ? 'visible opacity-50' : 'opacity-0 transition-none'"></div>

  <div :class="showModal ? 'visible opacity-100' : 'opacity-0 transition-none'" class="modal-wrapper">
    <div class="modal">

      <!-- header -->
      <div class="modal-header">
        <span class="font-bold">Add new country</span>
        <button @click="closeModal" type="button" class="btn-close"><i
            class="uil-multiply text-[1.2rem]"></i></button>
      </div>

      <!-- body -->
      <div class="px-8 pb-8">

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
    </div>
  </div>

  <div class="flex gap-6">
    <div class="card flex-1">
      <div class="mb-6">
        <button class="btn btn-danger" type="button" @click="openModal">
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
            <tr v-for="country in countries" :key="country.id" class="border-t-[0.8px] border-t-[rgb(229,232,235)]">
              <td class="px-2 py-[0.95rem]">
                {{ country.name }}
              </td>
              <td>{{ country.cc }}</td>
              <td class="text-[1.2rem] text-[#8a969c]">
                <a href="javascript:void(0);" class="pr-2 hover:text-[rgb(92,99,106)] transition-colors duration-200">
                  <i class="mdi mdi-eye"></i></a>
                <a href="javascript:void(0);" class="px-2 hover:text-[rgb(92,99,106)] transition-colors duration-200">
                  <i class="mdi mdi-square-edit-outline"></i></a>
                <a href="javascript:void(0);" class="pl-2 hover:text-[rgb(92,99,106)] transition-colors duration-200">
                  <i class="mdi mdi-delete"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
