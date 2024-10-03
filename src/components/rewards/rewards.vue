<template>
  <div
    class="
      p-12
      flex flow-row gap-4
      justify-start
      items-start
    "
  >
    <section class="
      tiers flex-shrink-0
    ">
      <ul>
        <li
          class="
            p-2 mb-1
            cursor-pointer
            w-24
            hover:bg-blue-100
            transition-colors
          "
          :class="{
            'bg-blue-300 font-semibold': currentTier === tier.id,
          }"
          v-for="tier in tiers"
          :key="tier.id"
          @click="currentTier = tier.id"
        >
          {{ tier.name }}
        </li>
      </ul>
    </section>

    <section>
      <h1 class="text-2xl font-semibold">
        {{ tierMap.get(currentTier) }}
      </h1>

      <p>
        Turn your points into rewards!
      </p>

      <div class="
        mt-2
        reward-items
      ">
        <ul class="
          flex flex-row flex-wrap gap-4
          justify-start items-start
        ">
          <li
            v-for="item in currentItems"
            class="
              item-container
              p-2
              flex flex-col gap-1 justify-center items-center
              border border-neutral-500 rounded
              w-32 min-h-32
              hover:shadow-md
              cursor-pointer
              transition-shadow
            "
          >
            <h4 class="text-ellipsis">{{ item.name }}</h4>

            <img
              class="w-24"
              :src="item.image"
              onerror="this.src = 'https://media.istockphoto.com/id/1271880340/vector/lost-items-line-vector-icon-unidentified-items-outline-isolated-icon.jpg?s=612x612&w=0&k=20&c=d2kHGEmowThp_UrqIPfhxibstH6Sq5yDZJ41NetzVaA='"
              loading="lazy"
            />

            <span>
              {{ item.points || Math.floor(Math.random() * 100) }} points
            </span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
  import {ref, computed} from 'vue';
  import items from './items.json';
  const tiers = Array.from({length:15}).map((t, i) => {
    return {
      id: i + 1,
      name: `Tier ${i + 1}`,
    };
  });
  const tierMap = tiers.reduce((m, t) => {
    return m.set(t.id, t.name);
  }, new Map());
  const currentTier = ref(1);
  const currentItems = computed(() => {
    return items.filter(i => {
      return i.tier === currentTier.value;
    });
  });
</script>
