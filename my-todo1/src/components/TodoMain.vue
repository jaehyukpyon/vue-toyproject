<template>
  <div class="page">
    <header><h1>My Todo List</h1></header>

    <main>
      <div class="todos">
        <transition name="fade">
          <!--새로운 걸 등록시-->
          <div v-if="writeState === 'add'" class="write add" key="add">
            <input
              type="text"
              v-model="addItemText"
              @keyup.enter="addItem"
              ref="writeArea"
            />
            <button class="btn add" @click="addItem">Add to List</button>
          </div>

          <!--기존 걸 수정시-->
          <div v-else class="write edit" key="edit">
            <input type="text" v-model="editItemText" @keyup.enter="editSave" />
            <button class="btn add" @click="editSave">Save (Edit)</button>
          </div>
        </transition>

        <ul class="list" ref="list">
          <li v-for="(todo, i) in todos" :key="i">
            <i
              :class="['fa-check-square', todo.state === 'yet' ? 'far' : 'fas']"
              @click="checkItem(i)"
            ></i>
            <span>
              {{ todo.text }}
              <b>
                <a href="" @click.prevent="editShow(i)">Edit</a>
                <a href="" @click.prevent="deleteTodo(i)">Del</a>
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
      addItemText: "",
      crrEditItem: -1,
      writeState: "add",
      editItemText: "",
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
        state: "yet",
      };
      if (this.addItemText == "") {
        alert("할일을 입력하세요.");
        return;
      }
      this.todos.push(newTodo);
      this.addItemText = "";
    },
    checkItem(index) {
      if (this.todos[index].state === "yet") {
        this.todos[index].state = "done";
      } else {
        this.todos[index].state = "yet";
      }
    },
    editShow(index1) {
      console.log(`index >> ${index1}`);
      this.crrEditItem = index1;
      this.writeState = "edit";
      this.editItemText = this.todos[index1].text;
      this.$refs.list.children[index1].className = 'editing'; // 연한 연두색으로 색 변경
    },
    editSave() {
      this.todos[this.crrEditItem].text = this.editItemText;
      this.writeState = "add";
      this.$refs.list.children[this.crrEditItem].className = '';
    },
    deleteTodo(index1) {
      this.todos.splice(index1, 1);
      this.writeState = "add";
    },
  },
  mounted() {
    this.$refs.writeArea.focus();
  },
};
</script>

<style>
</style>