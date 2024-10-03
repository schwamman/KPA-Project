
<template>
  <div class="p-12">
    <div class="
      mt-4 flex items-center justify-center gap-2
      flex-row sm:flex-row
    ">
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
        <option value="">
          All Categories
        </option>
        <option
          v-for="c in categories"
          :key="c.value"
          :value="c.value"
        >
          {{ c.title }}
        </option>
      </select>
    </div>

    <div class="flex flex-col items-center justify-center text-center mt-2">
      <fwb-pagination v-model="currentPage" :totalPages="totalPages">
      </fwb-pagination>
      <di>
        Total: {{ totalItems }}
      </di>
    </div>

    <!-- <p
      class="mt-2"
    >
      <button
        :disabled="!paging.left"
        @click="paging.decr"
        type="button"
        class="disabled:text-neutral-400 cursor-pointer disabled:cursor-not-allowed"
      >
        ◀
      </button>

      <span class="text-neutral-400 px-4">
        {{ paging.description }}
      </span>

      <button
        :disabled="!paging.right"
        @click="paging.incr"
        type="button"
        class="disabled:text-neutral-400 cursor-pointer disabled:cursor-not-allowed"
      >
        ▶
      </button>
    </p>  -->

    <table
      class="
        mt-3
        w-full
        border rounded-md table
      "
    >
      <thead class="table-header-group">
        <tr
          class="text-left"
        >
          <!-- id -->
          <th class=""></th>
          <th class="p-2">Image</th>
          <th class="p-2">Name</th>
          <th class="p-2">Score</th>
          <th class="p-2">Details</th>
          <th class="p-2">Price</th>
          <th class="p-2">Category</th>
          <th class="p-2 invisible md:visible">Description</th>
        </tr>
      </thead>
      <tbody class="text-left">
        <tr
          class="table-row"
          v-for="product in currentPageProducts"
          :key="product.id || product.name"

        >
          <td class="p-2">
            <button
              type="button"
              class="
                bg-orange-500
                text-orange-100
                border border-orange-600 rounded-md
                px-2 py-1
                w-full
                cursor-pointer
                hover:shadow-md
              "
            >
              Buy
            </button>



          </td>
          <td class="p-2">
            <img
              class="w-16"
              :src="product.image"
              onerror="this.src = 'https://media.istockphoto.com/id/1271880340/vector/lost-items-line-vector-icon-unidentified-items-outline-isolated-icon.jpg?s=612x612&w=0&k=20&c=d2kHGEmowThp_UrqIPfhxibstH6Sq5yDZJ41NetzVaA='"
              loading="lazy"
            />
          </td>
          <td class="p-2">{{product.name}}</td>
          <td
            class="p-2 text-lg font-extrabold"
            :class="{
              'text-green-600': product.score >= 90,
              'text-blue-500': product.score >= 70 && product.score < 90,
              'text-purple-500': product.score > 50 && product.score < 70,
              'text-orange-300': product.score > 30 && product.score < 50,
              'text-red-500': product.score >= 0 && product.score < 40,
            }"
          >
            {{ product.score }}
          </td>
          <td class="p-2">
            <table class="w-full">
              <tr>
                <th
                  v-for="key in Object.keys(product.scoreDetail)"
                  :key="key"
                  class="text-xs _font-mono _font-extralight"
                >
                  {{ key }}
                </th>
              </tr>
              <tr>
                <td
                  v-for="key in Object.keys(product.scoreDetail)"
                  class="text-xs _font-mono _font-extralight pr-2"
                >
                  {{ product.scoreDetail[key] || '-' }}
                </td>
              </tr>
            </table>
          </td>
          <td class="p-2 text-ellipsis h-4 text-sm">
            {{ product.price || '-' }}
          </td>
          <td class="p-2 text-ellipsis h-4 capitalize">
            {{ product.category }}
          </td>
          <td class="
            p-2 text-ellipsis h-4 text-sm text-neutral-500
            invisible md:visible
          ">
            {{ product.description }}
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex flex-col items-center justify-center text-center mt-2">
      <fwb-pagination v-model="currentPage" :totalPages="totalPages" :per-page="currentPageProducts">
      </fwb-pagination>
      <di>
        Total: {{ totalItems }}
      </di>
    </div>

    <!-- <p
      class="mt-2"
    >
      <button
        :disabled="!paging.left"
        @click="paging.decr"
        type="button"
        class="disabled:text-neutral-400 cursor-pointer disabled:cursor-not-allowed"
      >
        ◀
      </button>

      <span class="text-neutral-400 px-4">
        {{ paging.description }}
      </span>

      <button
        :disabled="!paging.right"
        @click="paging.incr"
        type="button"
        class="disabled:text-neutral-400 cursor-pointer disabled:cursor-not-allowed"
      >
        ▶
      </button>
    </p>  -->
  </div>
</template>

<script setup>
import {ref, reactive, computed, watch} from 'vue';
import products from './products.json';
import { FwbPagination } from 'flowbite-vue'

const itemsPerPage = ref(25); // Number of items per page
const currentPage = ref(1); // Current page

const search = ref('');
const searchCategory = ref('');

// Filtered Products
const filteredProducts = computed(() => {
  const rgx = new RegExp(search.value, 'i');
  const category = searchCategory.value;
  const processed = products.filter(p => {
    if (!p.price) {
      p.price = `$${(Math.random() * 100).toFixed(2)}`
    }
    const nameMatch = !p.name.trim() || rgx.test(p.name);
    const categoryMatch = !category || p.category === category;
    return (
      nameMatch
      && categoryMatch
    );
  }).sort((a, b) => {
    const scoreSort = b.score - a.score;

    if (!scoreSort) {
      return a.name.localeCompare(b.name);
    }

    return scoreSort;
  });
  return processed;
});


watch([search, searchCategory], () => {
  currentPage.value = 1;
});

const getPaging = () => {
  watch([search, searchCategory], () => {
    paging.page = 1;
  });
  return reactive({
    page: ref(1),
    pages: computed(() => Math.ceil(filteredProducts.value.length/itemsPerPage.value)),
    left: computed(() => paging.page > 1),
    right: computed(() => paging.page < paging.pages),
    description: computed(() => `${paging.page} of ${paging.pages}`),
    decr: () => {
      paging.page -= 1;
      if (paging.page < 1) {
        paging.page = 1;
      }
    },
    incr: () => {
      paging.page += 1;
      if (paging.page > paging.pages) {
        paging.page = paging.pages;
      }
    },
  });
}
const paging = getPaging();
const currentPageProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredProducts.value.slice(start).slice(0, itemsPerPage.value);
});

// Total items
const totalItems = computed(() => filteredProducts.value.length);
const totalPages = computed(() => paging.pages);



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
