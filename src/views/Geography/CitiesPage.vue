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
  <PageTop bitem1="Geography" bitem2="Tour operator" title="Countries" />

  <div class="flex gap-6">
    <div class="card flex-1">
      <h4 class="card-title">DEFAULT CARDS</h4>
      <p class="card-description">Simple widget of tabbable panes of local content.</p>
      <hr>
    </div>
  </div>


  <div class="flex items-center mb-10 bg-white p-6 rounded-lg shadow-sm card">

    <div class="flex items-center text-[#0acf97] tracking-wide">
      <span
        class="flex items-center justify-center w-8 h-8 border-2 border-[#0acf97] bg-[#0acf97]/10 rounded-full font-bold mr-2">
        <i class="fa-solid fa-check text-sm"></i>
      </span>
      <span class="font-bold uppercase text-xs tracking-wider">Sursă Date</span>
    </div>

    <div class="flex-1 h-px bg-[#0acf97] mx-6"></div>

    <div class="flex items-center text-[#727cf5] tracking-wide">
      <span
        class="flex items-center justify-center w-8 h-8 border-2 border-[#727cf5] rounded-full font-bold mr-2 shadow-[0_0_10px_rgba(114,124,245,0.2)]">
        2
      </span>
      <span class="font-bold uppercase text-xs tracking-wider">Mapping & Validare</span>
    </div>

    <div class="flex-1 h-px bg-gray-200 mx-6"></div>

    <div class="flex items-center text-gray-400">
      <span class="flex items-center justify-center w-8 h-8 border-2 border-gray-200 rounded-full font-bold mr-2">
        3
      </span>
      <span class="font-bold uppercase text-xs tracking-wider">Finalizare</span>
    </div>
  </div>




  <div class="flex">
    <div class="w-64 bg-[#313a46] min-h-screen hidden lg:block">
      <div class="p-6 text-white font-bold text-2xl tracking-widest uppercase">Hyper</div>
      <div class="mt-4 px-4 text-xs text-gray-500 uppercase font-bold tracking-wider">Meniu Principal</div>
      <div class="mt-4 px-6 text-gray-400 hover:text-white cursor-pointer py-2 transition">
        <i class="fa-solid fa-gauge mr-2"></i> Dashboard
      </div>
      <div class="px-6 text-white bg-[#3e4855] py-2 rounded-r-full mr-4 border-l-4 border-[#727cf5]">
        <i class="fa-solid fa-cloud-arrow-down mr-2 text-[#727cf5]"></i> Import Date
      </div>
    </div>

    <div class="flex-1">

      <div class="h-16 bg-white shadow-sm flex items-center justify-between px-8 mb-6">
        <div class="flex items-center gap-4 text-sm font-semibold text-gray-700">
          <i class="fa-solid fa-bars cursor-pointer"></i>
          <nav class="flex gap-2 text-gray-400">
            <span>Agregator</span> / <span class="text-gray-700">Import</span>
          </nav>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-sm font-bold text-gray-600">Admin User</span>
          <div
            class="w-8 h-8 bg-[#727cf5] rounded-full flex items-center justify-center text-white font-bold text-xs uppercase">
            AU</div>
        </div>
      </div>

      <div class="px-8 max-w-5xl mx-auto">

        <div class="flex items-center mb-10 bg-white p-6 rounded-lg shadow-sm card">
          <div class="flex items-center step-active-text tracking-wide">
            <span
              class="flex items-center justify-center w-8 h-8 border-2 step-active-circle rounded-full font-bold mr-2">1</span>
            <span class="font-bold uppercase text-xs tracking-wider">Sursă Date</span>
          </div>
          <div class="flex-1 h-px bg-gray-200 mx-6"></div>
          <div class="flex items-center text-gray-400">
            <span
              class="flex items-center justify-center w-8 h-8 border-2 border-gray-200 rounded-full font-bold mr-2">2</span>
            <span class="font-bold uppercase text-xs tracking-wider uppercase">Bulk Management</span>
          </div>
          <div class="flex-1 h-px bg-gray-200 mx-6"></div>
          <div class="flex items-center text-gray-400">
            <span
              class="flex items-center justify-center w-8 h-8 border-2 border-gray-200 rounded-full font-bold mr-2">3</span>
            <span class="font-bold uppercase text-xs tracking-wider uppercase">Gestionare Conținut</span>
          </div>
        </div>

        <div class="bg-white card p-10">
          <h4 class="text-lg font-bold text-gray-700 mb-8 border-b pb-4">Configurare Sursă de Import</h4>

          <form action="#" method="POST" class="space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label class="block text-xs font-black text-gray-500 uppercase tracking-widest mb-3">Alege
                  Tour-Operatorul</label>
                <select
                  class="w-full border-gray-200 border rounded-md p-3 focus:border-[#727cf5] focus:ring-0 text-sm bg-gray-50/50">
                  <option>Selectează furnizor...</option>
                  <option value="tui">TUI Group (API Live)</option>
                  <option value="dertour">Dertour (XML Feed)</option>
                  <option value="ct">Christian Tour (JSON)</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-black text-gray-500 uppercase tracking-widest mb-3">Sursă
                  Fișier</label>
                <div class="flex gap-4">
                  <label
                    class="flex-1 border border-gray-200 p-3 rounded-md flex items-center gap-3 cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="source" class="text-[#727cf5] focus:ring-0" checked>
                    <span class="text-sm font-bold">Remote API</span>
                  </label>
                  <label
                    class="flex-1 border border-gray-200 p-3 rounded-md flex items-center gap-3 cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="source" class="text-[#727cf5] focus:ring-0">
                    <span class="text-sm font-bold">Manual Upload</span>
                  </label>
                </div>
              </div>
            </div>

            <div class="bg-[#f1f3fa] p-6 rounded-lg">
              <h5 class="text-sm font-bold text-gray-700 mb-4 uppercase tracking-tighter">Parametri Sincronizare</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex items-start gap-3 group cursor-pointer">
                  <input type="checkbox" class="mt-1 rounded border-gray-300 text-[#727cf5] focus:ring-0">
                  <div>
                    <p class="text-sm font-bold text-gray-700">Upsert Mode</p>
                    <p class="text-xs text-gray-500">Actualizează automat datele pentru țările existente.</p>
                  </div>
                </label>
                <label class="flex items-start gap-3 group cursor-pointer">
                  <input type="checkbox" checked class="mt-1 rounded border-gray-300 text-[#727cf5] focus:ring-0">
                  <div>
                    <p class="text-sm font-bold text-gray-700">Media Fetcher</p>
                    <p class="text-xs text-gray-500">Descarcă steagurile și hărțile lipsă.</p>
                  </div>
                </label>
              </div>
            </div>

            <div class="flex justify-end pt-4">
              <button type="submit"
                class="btn-primary text-white font-bold py-3 px-10 rounded shadow-lg shadow-blue-200 transition-all flex items-center gap-2 uppercase text-xs tracking-widest">
                Pasul Următor <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>



  <div class="flex">
    <div class="w-64 bg-[#313a46] min-h-screen hidden lg:block">
      <div class="p-6 text-white font-bold text-2xl uppercase tracking-widest">Hyper</div>
      <div class="mt-4 px-6 text-white bg-[#3e4855] py-2 rounded-r-full mr-4 border-l-4 border-[#727cf5]">
        <i class="fa-solid fa-cloud-arrow-down mr-2 text-[#727cf5]"></i> Import Date
      </div>
    </div>

    <div class="flex-1">

      <div class="h-16 bg-white shadow-sm flex items-center justify-between px-8 mb-6">
        <div class="flex items-center gap-4 text-sm font-semibold text-gray-700">
          <i class="fa-solid fa-bars cursor-pointer"></i>
          <nav class="flex gap-2 text-gray-400 font-bold">
            <span>Import</span> / <span class="text-gray-700">Bulk Management</span>
          </nav>
        </div>
      </div>

      <div class="px-8 max-w-6xl mx-auto">

        <div class="flex items-center mb-8 bg-white p-6 rounded-lg shadow-sm card">
          <div class="flex items-center step-complete-text tracking-wide">
            <span
              class="flex items-center justify-center w-8 h-8 border-2 step-complete-circle rounded-full font-bold mr-2">
              <i class="fa-solid fa-check"></i>
            </span>
            <span class="font-bold uppercase text-xs tracking-wider">Sursă Date</span>
          </div>
          <div class="flex-1 h-px bg-[#0acf97] mx-6"></div>

          <div class="flex items-center step-active-text tracking-wide">
            <span
              class="flex items-center justify-center w-8 h-8 border-2 step-active-circle rounded-full font-bold mr-2 shadow-[0_0_10px_rgba(114,124,245,0.2)]">2</span>
            <span class="font-bold uppercase text-xs tracking-wider">Bulk Management</span>
          </div>
          <div class="flex-1 h-px bg-gray-200 mx-6"></div>

          <div class="flex items-center text-gray-400">
            <span
              class="flex items-center justify-center w-8 h-8 border-2 border-gray-200 rounded-full font-bold mr-2">3</span>
            <span class="font-bold uppercase text-xs tracking-wider uppercase">Gestionare Conținut</span>
          </div>
        </div>

        <div class="bg-white card overflow-hidden">
          <div class="p-6 border-b border-gray-100 flex justify-between items-center">
            <h4 class="text-sm font-black text-gray-600 uppercase tracking-widest">Validare Rezultate (TUI Feed)</h4>
            <span class="text-xs font-bold bg-blue-100 text-[#727cf5] px-3 py-1 rounded-full">Am găsit 24 de țări
              noi</span>
          </div>

          <div class="p-0">
            <table class="w-full text-left border-collapse">
              <thead
                class="bg-[#f1f3fa] text-[#6c757d] border-b border-gray-200 text-[11px] font-bold uppercase tracking-wider">
                <tr>
                  <th class="p-4">Sursă Furnizor</th>
                  <th class="p-4">Cod ISO</th>
                  <th class="p-4">Corespondență Sistem</th>
                  <th class="p-4 text-center">Acțiune</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 text-sm">
                <tr class="hover:bg-gray-50/50 transition">
                  <td class="p-4 font-bold text-gray-700 uppercase tracking-tight">Turkiye</td>
                  <td class="p-4 font-mono text-xs text-gray-400">TR</td>
                  <td class="p-4">
                    <div class="flex items-center gap-3">
                      <i class="fa-solid fa-arrow-right text-gray-300"></i>
                      <select class="border-gray-200 border rounded p-1.5 text-xs focus:border-[#727cf5] outline-none">
                        <option>Alege țara...</option>
                        <option selected>Turcia (Existentă)</option>
                        <option>Creează Nou</option>
                      </select>
                    </div>
                  </td>
                  <td class="p-4 text-center">
                    <span class="text-[#ffbc00]"><i class="fa-solid fa-triangle-exclamation"></i></span>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50/50 transition">
                  <td class="p-4 font-bold text-gray-700 uppercase tracking-tight">Bulgaria</td>
                  <td class="p-4 font-mono text-xs text-gray-400">BG</td>
                  <td class="p-4">
                    <div class="flex items-center gap-3">
                      <i class="fa-solid fa-arrow-right text-gray-300"></i>
                      <span
                        class="bg-green-50 text-[#0acf97] border border-green-100 px-2 py-1 rounded text-xs font-bold tracking-wide">Bulgaria
                        (Auto-match)</span>
                    </div>
                  </td>
                  <td class="p-4 text-center">
                    <i class="fa-solid fa-circle-check text-[#0acf97]"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="p-6 bg-[#fafbfd] border-t border-gray-100 flex justify-between items-center">
            <button class="text-[#727cf5] font-bold text-sm hover:underline">
              <i class="fa-solid fa-chevron-left mr-1"></i> Înapoi la configurare
            </button>
            <button
              class="btn-primary text-white font-bold py-2.5 px-8 rounded shadow-lg shadow-blue-100 uppercase text-xs tracking-widest">
              Pasul Următor: Gestionare Conținut <i class="fa-solid fa-chevron-right ml-1"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>




  <div class="flex">
    <div class="w-64 bg-[#313a46] min-h-screen hidden lg:block">
      <div class="p-6 text-white font-bold text-2xl uppercase tracking-widest">Hyper</div>
      <div class="mt-4 px-6 text-white bg-[#3e4855] py-2 rounded-r-full mr-4 border-l-4 border-[#727cf5]">
        <i class="fa-solid fa-cloud-arrow-down mr-2 text-[#727cf5]"></i> Import Date
      </div>
    </div>

    <div class="flex-1">

      <div class="h-16 bg-white shadow-sm flex items-center justify-between px-8 mb-6">
        <div class="flex items-center gap-4 text-sm font-semibold text-gray-700">
          <i class="fa-solid fa-bars cursor-pointer text-[#727cf5]"></i>
          <nav class="flex gap-2 text-gray-400 font-bold">
            <span>Import</span> / <span class="text-gray-700">Gestionare Conținut</span>
          </nav>
        </div>
      </div>

      <div class="px-8 max-w-6xl mx-auto">

        <div class="flex items-center mb-8 bg-white p-6 rounded-lg shadow-sm card text-sm">
          <div class="flex items-center step-complete-text">
            <span
              class="flex items-center justify-center w-8 h-8 border-2 step-complete-circle rounded-full font-bold mr-2"><i
                class="fa-solid fa-check"></i></span>
            <span class="font-bold uppercase text-[11px]">Sursă Date</span>
          </div>
          <div class="flex-1 h-px bg-[#0acf97] mx-6"></div>

          <div class="flex items-center step-complete-text">
            <span
              class="flex items-center justify-center w-8 h-8 border-2 step-complete-circle rounded-full font-bold mr-2"><i
                class="fa-solid fa-check"></i></span>
            <span class="font-bold uppercase text-[11px]">Bulk Management</span>
          </div>
          <div class="flex-1 h-px bg-[#0acf97] mx-6"></div>

          <div class="flex items-center step-active-text tracking-wide">
            <span
              class="flex items-center justify-center w-8 h-8 border-2 step-active-circle rounded-full font-bold mr-2 shadow-[0_0_10px_rgba(114,124,245,0.2)]">3</span>
            <span class="font-bold uppercase text-[11px]">Gestionare Conținut</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 space-y-6">

            <div class="bg-white card p-6">
              <h5 class="text-sm font-bold text-gray-700 uppercase mb-5 border-b pb-3">Resurse Media (Galerie TUI)</h5>
              <div class="grid grid-cols-4 gap-4">
                <div class="relative rounded-lg overflow-hidden border-2 border-[#727cf5]">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=150&q=80"
                    class="w-full h-24 object-cover">
                  <span
                    class="absolute top-1 left-1 bg-[#727cf5] text-white text-[9px] px-1.5 rounded font-bold uppercase">Cover</span>
                </div>
                <div class="rounded-lg overflow-hidden border border-gray-100 group cursor-pointer relative">
                  <img
                    src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=150&q=80"
                    class="w-full h-24 object-cover">
                  <div
                    class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <input type="checkbox" class="rounded border-white text-[#727cf5]">
                  </div>
                </div>
                <div
                  class="flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg text-xs font-bold text-gray-400">
                  + 24 Poze
                </div>
              </div>
            </div>

            <div class="bg-white card p-6">
              <h5 class="text-sm font-bold text-gray-700 uppercase mb-5 border-b pb-3">Normalizare Atribute</h5>
              <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-100">
                  <span class="font-mono text-[11px] text-gray-400 italic">amenity_wifi_lobby_free</span>
                  <i class="fa-solid fa-arrow-right text-gray-300 mx-4"></i>
                  <select class="flex-1 bg-white border border-gray-200 rounded p-1 text-xs font-bold text-[#727cf5]">
                    <option selected>Wi-Fi Gratuit (Lobby)</option>
                    <option>Internet contra cost</option>
                  </select>
                </div>
                <div class="flex items-center justify-between p-3 bg-[#fff9e6]/40 rounded border border-[#ffbc00]/20">
                  <span class="font-mono text-[11px] text-amber-600 italic">shuttle_bus_to_beach</span>
                  <i class="fa-solid fa-arrow-right text-amber-300 mx-4"></i>
                  <select class="flex-1 bg-white border border-amber-200 rounded p-1 text-xs font-bold text-amber-700">
                    <option>-- Mapare Necesară --</option>
                    <option selected>Transfer Plajă Inclus</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-white card p-6 sticky top-6">
              <h5 class="text-sm font-bold text-gray-700 uppercase mb-5 border-b pb-3">Reguli Import</h5>

              <div class="space-y-5">
                <div>
                  <label class="form-label-custom block mb-2">Politica de Update</label>
                  <select class="w-full text-xs border-gray-200 rounded p-2 bg-gray-50 font-bold">
                    <option>Nu suprascrie manual</option>
                    <option>Update total (Override)</option>
                  </select>
                </div>

                <div>
                  <label class="form-label-custom block mb-2">Stocare Imagini</label>
                  <div class="flex items-center justify-between text-xs font-bold">
                    <span>Download local</span>
                    <input type="checkbox" checked class="rounded text-[#727cf5] focus:ring-0">
                  </div>
                </div>

                <div class="p-4 bg-blue-50/50 rounded-lg border border-blue-100 mt-6">
                  <p class="text-[10px] text-blue-600 font-bold uppercase mb-1">Rezumat Sincronizare</p>
                  <ul class="text-[11px] space-y-1 text-blue-800 font-semibold italic">
                    <li>• 45 Hoteluri Noi</li>
                    <li>• 12 Actualizări de preț</li>
                    <li>• 320 Imagini de descărcat</li>
                  </ul>
                </div>

                <button
                  class="w-full btn-success text-white font-black py-3 rounded shadow-lg shadow-green-100 uppercase text-[11px] tracking-widest mt-4">
                  Finalizează & Publică <i class="fa-solid fa-paper-plane ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>




  <div class="max-w-4xl mx-auto py-12 px-4">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Import Date Agregator</h1>
      <p class="text-gray-600">Sincronizează nomenclatorul de țări cu furnizorii externi.</p>
    </div>

    <div class="flex items-center mb-10">
      <div class="flex items-center text-blue-600 tracking-wide">
        <span
          class="flex items-center justify-center w-8 h-8 border-2 border-blue-600 rounded-full font-bold mr-2">1</span>
        <span class="font-semibold">Sursă Date</span>
      </div>
      <div class="flex-1 h-px bg-gray-300 mx-4"></div>
      <div class="flex items-center text-gray-400">
        <span
          class="flex items-center justify-center w-8 h-8 border-2 border-gray-300 rounded-full font-bold mr-2">2</span>
        <span>Mapping & Validare</span>
      </div>
      <div class="flex-1 h-px bg-gray-300 mx-4"></div>
      <div class="flex items-center text-gray-400">
        <span
          class="flex items-center justify-center w-8 h-8 border-2 border-gray-300 rounded-full font-bold mr-2">3</span>
        <span>Finalizare</span>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <form action="/import/step-2" method="POST" enctype="multipart/form-data">

        <div class="p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                <i class="fa-solid fa-handshake-angle mr-1 text-blue-500"></i> Alege Tour-Operatorul
              </label>
              <select name="provider"
                class="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all">
                <option value="">Selectează furnizor...</option>
                <option value="tui">TUI Group (API)</option>
                <option value="der_tour">Dertour (XML)</option>
                <option value="christian_tour">Christian Tour (JSON)</option>
                <option value="custom">Fișier Personalizat (CSV/XLSX)</option>
              </select>
              <p class="mt-2 text-xs text-gray-500">Alegerea furnizorului determină modul în care datele vor fi mapate.
              </p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                <i class="fa-solid fa-cloud-arrow-down mr-1 text-blue-500"></i> Metodă de preluare
              </label>
              <div class="flex gap-4">
                <label class="flex-1 cursor-pointer">
                  <input type="radio" name="method" value="api" class="hidden peer" checked>
                  <div
                    class="p-4 border border-gray-200 rounded-lg text-center peer-checked:border-blue-500 peer-checked:bg-blue-50 hover:bg-gray-50 transition-all">
                    <i class="fa-solid fa-bolt block mb-1 text-lg"></i>
                    <span class="text-sm font-semibold">API Live</span>
                  </div>
                </label>
                <label class="flex-1 cursor-pointer">
                  <input type="radio" name="method" value="file" class="hidden peer">
                  <div
                    class="p-4 border border-gray-200 rounded-lg text-center peer-checked:border-blue-500 peer-checked:bg-blue-50 hover:bg-gray-50 transition-all">
                    <i class="fa-solid fa-file-code block mb-1 text-lg"></i>
                    <span class="text-sm font-semibold">Upload Fișier</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-gray-100">
            <h3 class="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">Opțiuni Import</h3>
            <div class="space-y-3">
              <label class="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" name="update_existing" class="w-4 h-4 text-blue-600 rounded">
                <span class="text-gray-700 text-sm">Actualizează informațiile pentru țările existente (Upsert)</span>
              </label>
              <label class="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" name="fetch_images" class="w-4 h-4 text-blue-600 rounded">
                <span class="text-gray-700 text-sm">Descarcă automat steaguri/imagini lipsă</span>
              </label>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 px-8 py-4 flex justify-between items-center">
          <span class="text-sm text-gray-500">
            <i class="fa-solid fa-circle-info mr-1"></i> Vei putea revizui datele înainte de salvarea finală.
          </span>
          <button type="submit"
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all flex items-center">
            Continuă la Pasul 2 <i class="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </div>

      </form>
    </div>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
        <p class="text-xs font-bold text-blue-800 uppercase italic">Ultimul Import</p>
        <p class="text-sm text-blue-900 font-semibold text-gray-700">TUI: Acum 2 zile</p>
      </div>
      <div class="bg-green-50 p-4 rounded-lg border border-green-100">
        <p class="text-xs font-bold text-green-800 uppercase italic">Țări în DB</p>
        <p class="text-sm text-green-900 font-semibold">195 înregistrate</p>
      </div>
      <div class="bg-amber-50 p-4 rounded-lg border border-amber-100">
        <p class="text-xs font-bold text-amber-800 uppercase italic">Erori recente</p>
        <p class="text-sm text-amber-900 font-semibold italic">Nicio eroare logată</p>
      </div>
    </div>
  </div>


  <div id="loading-screen" class="flex flex-col items-center justify-center p-20">
    <div class="relative mb-6">
      <div class="w-20 h-20 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <i class="fa-solid fa-cloud-download text-blue-600"></i>
      </div>
    </div>

    <h2 class="text-xl font-bold text-gray-800">Se preiau datele de la furnizor...</h2>
    <p class="text-gray-500 italic" id="status-text">Descărcăm catalogul de țări (XML)...</p>

    <div class="w-64 h-2 bg-gray-200 rounded-full mt-6 overflow-hidden">
      <div class="bg-blue-600 h-full animate-[progress_10s_ease-in-out]" style="width: 60%"></div>
    </div>
  </div>



  <div class="max-w-6xl mx-auto py-12 px-4">
    <div class="mb-8 flex justify-between items-end">
      <div>
        <h1 class="text-3xl font-bold text-gray-800">Mapare Date</h1>
        <p class="text-gray-600 font-medium">Sursa: <span class="text-blue-600">TUI Group (API)</span> • Am găsit
          <span class="font-bold">24 țări</span>
        </p>
      </div>
      <div class="text-right">
        <span
          class="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider">Verificare
          Necesară</span>
      </div>
    </div>

    <div class="flex items-center mb-10 max-w-4xl mx-auto">
      <div class="flex items-center text-green-600">
        <span
          class="flex items-center justify-center w-8 h-8 bg-green-100 border-2 border-green-600 rounded-full font-bold mr-2"><i
            class="fa-solid fa-check text-sm"></i></span>
        <span class="font-semibold text-gray-500">Sursă Date</span>
      </div>
      <div class="flex-1 h-px bg-green-600 mx-4"></div>
      <div class="flex items-center text-blue-600">
        <span
          class="flex items-center justify-center w-8 h-8 border-2 border-blue-600 rounded-full font-bold mr-2">2</span>
        <span class="font-bold">Mapping & Validare</span>
      </div>
      <div class="flex-1 h-px bg-gray-300 mx-4"></div>
      <div class="flex items-center text-gray-400">
        <span
          class="flex items-center justify-center w-8 h-8 border-2 border-gray-300 rounded-full font-bold mr-2">3</span>
        <span>Finalizare</span>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <table class="w-full text-left border-collapse">
        <thead class="bg-gray-50 border-b border-gray-200">
          <tr>
            <th class="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
            <th class="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date Sursă (TUI)</th>
            <th class="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Corespondență Sistemul Tău</th>
            <th class="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Acțiune</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 text-sm">

          <tr class="hover:bg-gray-50 transition-colors">
            <td class="p-4 text-center">
              <span class="inline-block w-3 h-3 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                title="Potrivire exactă"></span>
            </td>
            <td class="p-4">
              <div class="font-bold text-gray-800">Bulgaria</div>
              <div class="text-xs text-gray-400 font-mono">ID: BG-99</div>
            </td>
            <td class="p-4">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-arrow-right-long text-gray-300"></i>
                <span
                  class="bg-blue-50 text-blue-700 px-3 py-1 rounded-md font-medium border border-blue-100">Bulgaria</span>
              </div>
            </td>
            <td class="p-4 text-center text-gray-400">
              <i class="fa-solid fa-lock text-xs" title="Auto-match confirmat"></i>
            </td>
          </tr>

          <tr class="bg-amber-50/30 hover:bg-amber-50 transition-colors">
            <td class="p-4 text-center">
              <span class="inline-block w-3 h-3 bg-amber-500 rounded-full animate-pulse"
                title="Necesită atenție"></span>
            </td>
            <td class="p-4">
              <div class="font-bold text-gray-800">Turkiye</div>
              <div class="text-xs text-gray-400 font-mono">ID: TR-001</div>
            </td>
            <td class="p-4">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-arrow-right-long text-amber-300"></i>
                <select
                  class="bg-white border border-amber-300 text-amber-900 px-2 py-1 rounded focus:ring-2 focus:ring-amber-500 outline-none">
                  <option value="none">-- Alege Destinația --</option>
                  <option value="12" selected>Turcia (Existentă)</option>
                  <option value="new">+ Creează țară nouă</option>
                </select>
              </div>
            </td>
            <td class="p-4 text-center text-amber-600">
              <button class="hover:text-amber-800"><i class="fa-solid fa-wand-magic-sparkles"></i></button>
            </td>
          </tr>

          <tr class="hover:bg-gray-50 transition-colors">
            <td class="p-4 text-center">
              <span class="inline-block w-3 h-3 bg-blue-500 rounded-full" title="Intrare nouă"></span>
            </td>
            <td class="p-4">
              <div class="font-bold text-gray-800">Cape Verde</div>
              <div class="text-xs text-gray-400 font-mono">ID: CV-102</div>
            </td>
            <td class="p-4">
              <div class="flex items-center gap-2 text-gray-400 italic">
                <i class="fa-solid fa-plus text-xs"></i>
                <span>Se va crea entitate nouă: "Cape Verde"</span>
              </div>
            </td>
            <td class="p-4 text-center">
              <input type="checkbox" checked class="w-4 h-4 rounded text-blue-600">
            </td>
          </tr>

        </tbody>
      </table>

      <div class="p-6 bg-white border-t border-gray-100 flex justify-between">
        <button onclick="window.history.back()"
          class="text-gray-500 font-semibold hover:text-gray-700 transition-all flex items-center">
          <i class="fa-solid fa-chevron-left mr-2"></i> Înapoi la Sursă
        </button>
        <div class="flex gap-4">
          <button class="px-6 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 font-semibold">
            Salvează Draft
          </button>
          <button
            class="px-8 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold shadow-lg shadow-green-200 flex items-center">
            Procesează Importul <i class="fa-solid fa-angles-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="mt-6 flex gap-6 justify-center text-xs text-gray-500 font-medium">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 bg-green-500 rounded-full"></span> Potrivire OK
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 bg-amber-500 rounded-full"></span> Necesită Mapare Manuală
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 bg-blue-500 rounded-full"></span> Țară Nouă
      </div>
    </div>
  </div>

  <div class="max-w-2xl w-full mx-auto p-6">
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">

      <div class="p-10 text-center">
        <div class="mb-6 flex justify-center">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
            <i class="fa-solid fa-check-double text-4xl animate-bounce"></i>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-800 mb-2">Import Finalizat cu Succes!</h2>
        <p class="text-gray-500 mb-8">Datele de la <strong>TUI Group</strong> au fost sincronizate.</p>

        <div class="grid grid-cols-3 gap-4 mb-8">
          <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
            <span class="block text-2xl font-black text-blue-700">12</span>
            <span class="text-xs uppercase font-bold text-blue-400 tracking-widest">Noi</span>
          </div>
          <div class="p-4 bg-green-50 rounded-xl border border-green-100">
            <span class="block text-2xl font-black text-green-700">8</span>
            <span class="text-xs uppercase font-bold text-green-400 tracking-widest">Actualizate</span>
          </div>
          <div class="p-4 bg-gray-50 rounded-xl border border-gray-200">
            <span class="block text-2xl font-black text-gray-400">4</span>
            <span class="text-xs uppercase font-bold text-gray-400 tracking-widest">Ignorate</span>
          </div>
        </div>

        <div class="text-left bg-gray-900 rounded-lg p-4 font-mono text-xs text-green-400 h-32 overflow-y-auto mb-8">
          <p>[10:20:01] Conectare API reușită...</p>
          <p>[10:20:02] Procesare "Turkiye" -> Mapat la ID 12 (Turcia)</p>
          <p>[10:20:03] Adăugat "Cape Verde" ca intrare nouă...</p>
          <p>[10:20:03] Descarcat steag pentru Cape Verde...</p>
          <p class="text-white font-bold">--- Operațiune încheiată în 2.4 secunde ---</p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <a href="/countries"
            class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-200 text-center">
            Vezi Nomenclator Țări
          </a>
          <a href="/import"
            class="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-3 rounded-xl transition-all text-center">
            Import Nou
          </a>
        </div>
      </div>

      <div class="bg-gray-50 p-4 border-t border-gray-100 text-center text-xs text-gray-400 italic">
        Sincronizarea automată (Cron Job) a fost programată pentru fiecare Luni la ora 04:00.
      </div>
    </div>
  </div>













  <div class="modal-backdrop" :class="showModal ? 'visible opacity-50' : 'opacity-0 transition-none'"></div>

  <div :class="showModal ? 'visible opacity-100' : 'opacity-0 transition-none'" class="modal-wrapper">
    <div class="modal">

      <!-- header -->
      <div class="modal-header">
        <span class="font-bold">Import cities</span>
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
<style>
body {
  font-family: 'Nunito', sans-serif;

}

.card {
  border: none;
  box-shadow: 0 0 35px 0 rgba(154, 161, 171, .15);
}

.btn-primary {
  background-color: #727cf5;
  border-color: #727cf5;
}

.btn-primary:hover {
  background-color: #636bd3;
}

.step-item.active {
  color: #727cf5;
  border-bottom: 2px solid #727cf5;
}
</style>
