<template>
  <div>
    AskView.vue <br><hr>
    <!-- <ul  class="list">
      <li v-for="(item, index) in list" :key="item.id">
        <b>{{ item.time_ago }}</b>
        <span>
          by
          <a href="">{{ item.user }}</a> </span
        ><br />
        <a href="#">{{ item.title }}</a>
        <a href=""
          >&nbsp;<i>({{ item.comments_count }})</i></a
        >
      </li>
    </ul> -->
    <list-item :listData="list"></list-item>
  </div>
</template>

<script>
import axios from "axios";
import ListItem from  '../components/ListItem.vue'

export default {
  components: {
      ListItem,
    },
  data() {
    return {
      //list: [],
    };
  },
  computed: {
    list() {
      return this.$store.state.list;
    }
  },
  created() {
    // console.log("AskView.vue created.");
    // axios.get(`https://api.hnpwa.com/v0/ask/1.json`).then((response) => {
    //   this.list = response.data;
    //   console.log(this.list);
    // });
    this.$store.dispatch('FETCH_LIST', 'ask');
  },
};
</script>

<style scoped>

</style>