<template>
  <div class="page">
    <header><h1>My Todo List</h1></header>

    <main>
      <div class="todos">
        <div class="write">
          <input type="text" />
          <button class="btn add">Add to List</button>
        </div>
        <ul class="list">
          <!-- <li>
            한 줄로 렌더링됨
            <i class="far fa-check-square"></i>
            >>> fas: checked, far: unchecked
            <span>
              원고 챕터1 마감
              <b>
                <a href="">Edit</a>
                <a href="">Del</a>
              </b>
            </span>
          </li> -->
          <li v-for="todo in todos" :key="todo.text">
            <i :class="['fa-check-square', todo.state === 'yet' ? 'far' : 'fas']"></i>
            <span>
              {{ todo.text }}
              <b>
                <a href="">Edit</a>
                <a href="">Del</a>
              </b>
            </span>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { text: "공부하기", state: "yet" },
        { text: "운동하기", state: "done" },
        { text: "글쓰기", state: "done" },
      ],
    };
  },
};
</script>

<style>
</style>