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


  <div class="bg-blue-50 p-4 rounded-t-xl border border-gray-200 border-b-0 flex items-center justify-between">
    <div class="flex items-center gap-4">
      <label class="text-sm font-bold text-blue-800 uppercase">Filtrează după Țară:</label>
      <select class="p-2 border border-blue-200 rounded shadow-sm text-sm">
        <option>Toate țările (850 regiuni)</option>
        <option selected>Grecia (120 regiuni)</option>
        <option>Turcia (45 regiuni)</option>
      </select>
    </div>
    <div class="text-sm text-blue-600 italic">
      <i class="fa-solid fa-circle-info mr-1"></i> Am mapat automat 80% din regiuni pe baza numelui.
    </div>
  </div>

  <table class="w-full text-left border-collapse border border-gray-200">
    <thead class="bg-gray-100 text-xs font-bold uppercase text-gray-600">
      <tr>
        <th class="p-4">Regiune Sursă</th>
        <th class="p-4">Țară Detectată</th>
        <th class="p-4">Mapare în Sistemul Tău</th>
        <th class="p-4 text-center">Acțiune</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 bg-white">
      <tr>
        <td class="p-4 font-medium">Creta / Chania</td>
        <td class="p-4"><span class="px-2 py-1 bg-gray-100 rounded text-xs">Grecia</span></td>
        <td class="p-4">
          <div class="flex items-center text-green-600">
            <i class="fa-solid fa-link mr-2"></i> Mapat la: <strong>Chania</strong>
          </div>
        </td>
        <td class="p-4 text-center">
          <button class="text-gray-400 hover:text-blue-600"><i class="fa-solid fa-pen-to-square"></i></button>
        </td>
      </tr>

      <tr class="bg-amber-50">
        <td class="p-4 font-medium">Rhodes Town</td>
        <td class="p-4"><span class="px-2 py-1 bg-gray-100 rounded text-xs text-red-500 font-bold">Necunoscută
            (RH)</span></td>
        <td class="p-4">
          <div class="flex flex-col gap-1">
            <select class="w-full p-2 border border-amber-300 rounded text-sm bg-white">
              <option>-- Selectează Țara Mai Întâi --</option>
            </select>
            <select class="w-full p-2 border border-amber-300 rounded text-sm bg-white">
              <option>-- Selectează Regiunea Corectă --</option>
              <option value="new">+ Creează "Rhodes Town" în Grecia</option>
            </select>
          </div>
        </td>
        <td class="p-4 text-center">
          <span class="text-amber-500"><i class="fa-solid fa-triangle-exclamation"></i></span>
        </td>
      </tr>
    </tbody>
  </table>







  <div class="modal-backdrop" :class="showModal ? 'visible opacity-50' : 'opacity-0 transition-none'"></div>

  <div :class="showModal ? 'visible opacity-100' : 'opacity-0 transition-none'" class="modal-wrapper">
    <div class="modal">

      <!-- header -->
      <div class="modal-header">
        <span class="font-bold">Add new country</span>
        <button @click="closeModal" type="button" class="btn-close"><i class="uil-multiply text-[1.2rem]"></i></button>
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
