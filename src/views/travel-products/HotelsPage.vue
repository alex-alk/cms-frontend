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


  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
    <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
      <span class="text-xs text-gray-500 uppercase font-bold">Mapate Automat</span>
      <div class="text-2xl font-black text-gray-800">12,450</div>
    </div>
    <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
      <span class="text-xs text-gray-500 uppercase font-bold">Necesită Verificare</span>
      <div class="text-2xl font-black text-gray-800">128</div>
    </div>
    <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
      <span class="text-xs text-gray-500 uppercase font-bold">Hoteluri Noi</span>
      <div class="text-2xl font-black text-gray-800">45</div>
    </div>
    <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
      <span class="text-xs text-gray-500 uppercase font-bold">Fără Regiune</span>
      <div class="text-2xl font-black text-gray-800">12</div>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-md overflow-hidden">
    <table class="w-full text-left border-collapse">
      <thead class="bg-gray-800 text-white text-xs uppercase">
        <tr>
          <th class="p-4">Media</th>
          <th class="p-4">Detalii Hotel (Sursă)</th>
          <th class="p-4">Scor Potrivire</th>
          <th class="p-4">Acțiune Mapare</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr class="hover:bg-blue-50/50">
          <td class="p-4 w-24">
            <img src="https://via.placeholder.com/80x60" class="rounded shadow-sm" alt="hotel">
          </td>
          <td class="p-4">
            <div class="font-bold text-gray-900">Delphin Diva Premiere</div>
            <div class="text-xs text-gray-500 italic">Antalya, Lara • 5 stele</div>
          </td>
          <td class="p-4">
            <div class="flex items-center">
              <div class="w-full bg-gray-200 h-2 rounded-full mr-2">
                <div class="bg-green-500 h-2 rounded-full" style="width: 98%"></div>
              </div>
              <span class="text-xs font-bold text-green-600">98%</span>
            </div>
          </td>
          <td class="p-4">
            <select class="w-full p-2 text-sm border border-gray-300 rounded">
              <option>Mapat la: Delphin Diva (ID: 5542)</option>
              <option>Creează hotel nou</option>
              <option>Ignoră acest hotel</option>
            </select>
          </td>
        </tr>
        <tr class="bg-red-50">
          <td class="p-4 w-24">
            <div class="w-20 h-14 bg-gray-200 flex items-center justify-center rounded">
              <i class="fa-solid fa-image-slash text-gray-400"></i>
            </div>
          </td>
          <td class="p-4">
            <div class="font-bold text-red-800 text-gray-900 underline">Hotel NoName 123</div>
            <div class="text-xs text-red-500 italic font-bold">Regiune lipsă în fișier!</div>
          </td>
          <td class="p-4">
            <span class="text-xs font-bold text-red-600 uppercase tracking-tighter">Nicio potrivire</span>
          </td>
          <td class="p-4">
            <button class="bg-red-600 text-white px-4 py-1 rounded text-sm font-bold">Rezolvă Manual</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>



  <div class="max-w-6xl mx-auto">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-2xl font-bold text-gray-800">Configurare Avansată Hoteluri</h1>
      <div class="space-x-2">
        <button
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 transition">Anulează</button>
        <button
          class="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold shadow-lg hover:bg-blue-700 transition">Finalizează
          Sincronizarea</button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

      <div class="lg:col-span-2 space-y-6">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="font-bold text-lg text-gray-800 italic uppercase tracking-tight text-blue-600">
              <i class="fa-solid fa-swimming-pool mr-2"></i> Mapare Facilități detectate
            </h3>
            <span class="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">24 tag-uri noi găsite</span>
          </div>

          <div class="space-y-4">
            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
              <div class="flex-1">
                <span class="text-xs font-bold text-gray-400 uppercase">Sursă (TUI):</span>
                <p class="text-gray-700 font-mono text-sm uppercase font-bold">wireless_lan_in_lobby</p>
              </div>
              <i class="fa-solid fa-arrow-right mx-4 text-gray-300"></i>
              <div class="flex-1">
                <span class="text-xs font-bold text-gray-400 uppercase">Sistemul Tău:</span>
                <select class="w-full bg-white border border-blue-200 rounded p-1 text-sm font-semibold text-blue-800">
                  <option>Wi-Fi Gratuit</option>
                  <option>Internet prin cablu</option>
                  <option selected>Wi-Fi Lobby</option>
                </select>
              </div>
            </div>

            <div class="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-100">
              <div class="flex-1 text-amber-800 font-bold uppercase italic">
                <span class="text-xs font-bold text-amber-400 uppercase">Sursă:</span>
                <p class="text-sm">pet_friendly_resort_v2</p>
              </div>
              <i class="fa-solid fa-arrow-right mx-4 text-amber-300"></i>
              <div class="flex-1">
                <select class="w-full bg-white border border-amber-300 rounded p-1 text-sm text-amber-700 font-bold">
                  <option class="italic">-- Alege Categorie --</option>
                  <option>Acceptă Animale</option>
                  <option>Fără Animale</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 class="font-bold text-lg text-gray-800 mb-4">
            <i class="fa-solid fa-images mr-2 text-blue-500"></i> Gestionare Media
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <label class="p-4 border border-blue-100 bg-blue-50/30 rounded-lg cursor-pointer hover:bg-blue-50">
              <input type="radio" name="media_mode" class="mb-2" checked>
              <span class="block font-bold text-sm">External Linking</span>
              <span class="text-xs text-gray-500">Folosește link-urile furnizorului (Save space)</span>
            </label>
            <label class="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" name="media_mode" class="mb-2">
              <span class="block font-bold text-sm">Local Storage</span>
              <span class="text-xs text-gray-500">Descarcă pozele pe serverul tău (Safe)</span>
            </label>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
          <h3 class="font-bold text-lg text-gray-800 mb-4 border-b pb-2 text-red-600">
            <i class="fa-solid fa-shield-halved mr-2"></i> Reguli de Integritate
          </h3>

          <div class="space-y-6">
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2 italic">Descrieri Hoteluri:</label>
              <div class="space-y-2">
                <label class="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded border border-gray-100">
                  <input type="radio" name="update_desc" checked>
                  <span>Păstrează descrierile mele (Nu suprascrie)</span>
                </label>
                <label class="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded border border-gray-100">
                  <input type="radio" name="update_desc">
                  <span class="text-red-500 font-bold">Actualizează tot (TUI are prioritate)</span>
                </label>
              </div>
            </div>

            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2 italic">Dacă un hotel dispare din feed:</label>
              <select class="w-full bg-gray-50 border border-gray-200 rounded p-2 text-sm">
                <option>Dezactivează-l (Soft Delete)</option>
                <option>Nu face nimic (Păstrează-l activ)</option>
                <option>Șterge-l definitiv (Nerecomandat)</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2 italic">Prețuri și Disponibilitate:</label>
              <div class="flex items-center gap-2 bg-green-50 p-3 rounded-lg border border-green-100">
                <input type="checkbox" checked disabled>
                <span class="text-sm text-green-800 font-bold">Actualizare Live (Obligatoriu)</span>
              </div>
            </div>

            <div class="pt-4 border-t border-gray-100">
              <p class="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Notă Tehnică</p>
              <p class="text-xs text-gray-500">Orice modificare manuală făcută ulterior de echipa de content va bloca
                actualizarea automată a câmpului respectiv.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>






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
