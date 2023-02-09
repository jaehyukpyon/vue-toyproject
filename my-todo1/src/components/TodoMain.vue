<template>
  <div class="page">
    <header><h1>My Todo List</h1></header>

    <main>
      <div class="todos">

        <div class="write">
          <input type="text" v-model="addItemText" @keyup.enter="addItem" ref="writeArea" />
          <button class="btn add" @click="addItem">Add to List</button>
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
          <li v-for="(todo, index) in todos" :key="index">
            <i
              :class="['fa-check-square', todo.state === 'yet' ? 'far' : 'fas']"
              @click="checkItem(index)"
            ></i>
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
      addItemText: '',
      todos: [
        { text: "공부하기", state: "yet" },
        { text: "운동하기", state: "done" },
        { text: "글쓰기", state: "done" },
      ],
    };
  },
  methods: {
    addItem() {
      const newTodo = {
        text: this.addItemText,
        state: 'yet',
      }
      if (this.addItemText == '') {
        alert('할일을 입력하세요.');
        return;
      }
      this.todos.push(newTodo);
      this.addItemText = '';
    },
    checkItem(index) {
      if (this.todos[index].state === 'yet') {
        this.todos[index].state = 'done';
      } else {
        this.todos[index].state = 'yet';
      }
    }
  }, 
  mounted() {
    this.$refs.writeArea.focus();
  },
};
</script>

<style>
</style>