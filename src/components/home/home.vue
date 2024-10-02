
<template>
  <div class="p-12">
    <div class="mt-4 flex items-center justify-center gap-2">
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

      <select
        class="
          w-full
          p-1
          border rounded-lg
          outline-none
          focus:border-blue-500
        "
        v-model="searchCategory"
      >
        <option value="">Select a category</option>
        <option
          v-for="c in categories"
          :key="c.value"
          :value="c.value"
        >
          {{ c.title }}
        </option>
      </select>
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
          <th class="p-2">Score Details</th>
          <th class="p-2">Category</th>
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
          <td class="p-2 text-ellipsis h-4 capitalize">
            {{ product.category }}
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
const searchCategory = ref('');
const filteredProduct = computed(() => {
  const rgx = new RegExp(search.value, 'i');
  const category = searchCategory.value;
  console.log('category :>> ', category);
  return products.filter(p => {
    const nameMatch = !p.name.trim() || rgx.test(p.name);
    const categoryMatch = !category || p.category === category;
    return (
      nameMatch
      && categoryMatch
    );
  }).sort((a, b) => b.score - a.score);
});
const cap = (src) => {
  return src[0].toUpperCase() + src.slice(1)
};
const categories = computed(() => {
  const c = new Set();
  const categories = [];
  products.forEach(p => {
    if (c.has(p.category)) {
      return;
    }
    c.add(p.category);

    let title = p.category.split(' ');
    title = title.map(cap);
    title = title.join(' ');
    categories.push({
      title,
      value: p.category,
    });
  })
  return categories;
});
</script>
