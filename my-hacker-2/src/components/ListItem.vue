<template>
  <ul class="list">
    <li v-for="item in listData" :key="item.id">
      <b>{{ item.time_ago }}</b>
      <template v-if="$route.name === 'news'">
        <span
          >by
          <router-link :to="`/user/${item.user}`">{{
            item.user
          }}</router-link></span
        ><br />
        <a :href="item.url">{{ item.title }} </a>
        <router-link :to="`item?id=${item.id}`"><i>({{ item.comments_count }})</i></router-link>
      </template>
      <template v-else-if="$route.name === 'ask'">
        <span>&nbsp; by {{ item.user }}</span
        ><br />
        <router-link :to="item.url">{{ item.title }}</router-link>
      </template>
      <template v-else>
        <span>&nbsp; by {{ item.user }}</span
        ><br />
        <a :href="item.url">{{ item.title }} </a>
        <!-- <router-link :to="item.url">{{ item.title }}</router-link> -->
      </template>
    </li>
  </ul>
</template>
  
  <script>
export default {
  props: ["listData"],
  data() {
    return {
      list: [],
    };
  },
  created() {},
};
</script>
  
  <style scoped>
</style>