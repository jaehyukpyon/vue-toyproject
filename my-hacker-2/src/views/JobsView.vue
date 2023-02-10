<template>
  <div>
    JobsView.vue <br><hr>
    <ul  class="list">
      <li v-for="(item, index) in list" :key="item.id">
        <b>{{ item.time_ago }}</b>
        <span>
          by
          <a href="">{{ item.user }}</a> </span
        ><br />
        <a href="#">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    console.log("JobsView.vue created.");
    axios.get(`https://api.hnpwa.com/v0/jobs/1.json`).then((response) => {
      this.list = response.data;
      console.log(this.list);
    });
  },
};
</script>

<style scoped>

</style>