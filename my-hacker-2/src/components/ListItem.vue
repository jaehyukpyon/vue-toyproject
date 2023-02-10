<template>    
      <ul  class="list">
        <li v-for="item in listData" :key="item.id">
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
      </ul>
  </template>
  
  <script>
  
  export default {
    props: ['listData', ],
    data() {
      return {
        list: [],
      };
    },
    created() {
    },
  };
  </script>
  
  <style scoped>
  
  </style>