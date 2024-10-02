
<template>
  <div class="p-12">
    <h1 class="text-4xl">Smart Living 🌎</h1>

    <div
      class="
        mt-4
        border rounded-md
        p-4
        text-left
        w-fit
        shadow-sm
        hover:shadow-md
        cursor-pointer
      "
    >
      <div class="text-green-500">
        Your Score is
      </div>
      <div class="
        text-green-500
        font-bold text-7xl
      ">
        236!
      </div>
    </div>

    <div class="mt-4">
      <input
        type="search"
        name="kpa-product-search"
        v-model="search"
        class="
          w-full
          p-1
          border rounded-lg
          outline-none
          focus:border-blue-500
        "
        placeholder="Type to search..."
      />
    </div>

    <table
      class="
        mt-4
        w-full
        border rounded-md table
      "
    >
      <thead class="table-header-group">
        <tr
          class="text-left"
        >
          <!-- id -->
          <th class="p-2">Name</th>
          <th class="p-2">Vendor</th>
          <th class="p-2">Image</th>
          <th class="p-2">Score</th>
          <th class="p-2">Detail</th>
          <th class="p-2">Description</th>
        </tr>
      </thead>
      <tbody class="text-left">
        <tr
          class="table-row"
          v-for="product in filteredProduct"
          :key="product.id || product.name"
        >
          <td class="p-2">
            <button
              type="button"
              class="
                bg-green-300
                text-green-900
                border border-green-500
                px-2 py-1
                w-full
                cursor-pointer
                hover:shadow-md
              "
            >
              Grab
            </button>
          </td>
          <td class="p-2">{{product.name}}</td>
          <td class="p-2">
            <img
              class="w-16"
              :src="product.image"
              onerror="this.src = 'https://media.istockphoto.com/id/1271880340/vector/lost-items-line-vector-icon-unidentified-items-outline-isolated-icon.jpg?s=612x612&w=0&k=20&c=d2kHGEmowThp_UrqIPfhxibstH6Sq5yDZJ41NetzVaA='"
              loading="lazy"
            />
          </td>
          <td class="p-2">
            {{ product.score }}
          </td>
          <td class="p-2">
            <table class="text-xs w-full">
              <tr>
                <th
                  v-for="key in Object.keys(product.scoreDetail)"
                  :key="key"
                >
                  {{ key }}
                </th>
              </tr>
              <tr>
                <td
                  v-for="key in Object.keys(product.scoreDetail)"
                >
                  {{ product.scoreDetail[key] || '-' }}
                </td>
              </tr>
            </table>
          </td>
          <td class="p-2 text-ellipsis h-4">
            {{ product.description }}
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <hero :deal="deal" :dealTimeFrame="dealTimeFrame"></hero>
    <logos-row></logos-row>
    <stats></stats> -->
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import products from './products.json';
const search = ref('');
const filteredProduct = computed(() => {
  const rgx = new RegExp(search.value, 'i');
  return products.filter(p => {
    return rgx.test(p.name);
  });
});
</script>
