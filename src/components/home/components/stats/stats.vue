
<style>
  .stats {
    height: 200px;
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color:#00a8ff;
    color:#FFF;
    align-items: center;
    align-self: center;
  }
</style>



<template>
  <div class="stats">
    <stat v-bind='{"label":"Reports Submitted","startTime":1622656848485,"startCount":8495200,"endTime":1623866448485,"endCount":8628070}'></stat>
    <stat v-bind='{"label":"Minutes of Training","startTime":1622656848485,"startCount":69915160,"endTime":1623866448485,"endCount":70661460}'></stat>
    <stat v-bind='{"label":"Asset Inspections","startTime":1622656848485,"startCount":1323426,"endTime":1623866448485,"endCount":1343503}'></stat>
  </div>
</template>

<script>
  import Stat from "./stat.vue";

  export default {
    components: {
      stat: Stat
    }
  }
</script>
