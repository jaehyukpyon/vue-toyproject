<template>
  <div class="page">
    <header><h1>
      Vue Fire todo1
      <span class="pie">
        <svg viewBox="0 0 64 64">
          <circle class="pie" r="32" cx="32" cy="32" style="stroke-width: 64;"></circle>
          <circle class="slice" r="32" cx="32" cy="32" 
          :style="{ 
            strokeWidth: 64, 
            strokeDasharray: totalTodo + ', 201',
            transition: 'all 0.3s linear'
          }"></circle>
        </svg>
      </span>
    </h1></header>

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
import { db } from "../firebase/db";

export default {
  data() {
    return {
      addItemText: "",
      crrEditItem: -1,
      writeState: "add",
      editItemText: "",
      todos: [
        // { text: "공부하기", state: "yet" },
        // { text: "운동하기", state: "done" },
        // { text: "글쓰기", state: "done" },
      ],
    };
  },
  computed: {
    totalTodo() {
      let totalNum = 0;
      this.todos.forEach(item => {
        if (item.state === 'done') {
          totalNum++;
        }
      });
      return (totalNum / this.todos.length) * 201;
    },
  },
  methods: {
    addItem() {
      // const newTodo = {
      //   text: this.addItemText,
      //   state: "yet",
      // };
      // if (this.addItemText == "") {
      //   alert("할일을 입력하세요.");
      //   return;
      // }
      // this.todos.push(newTodo);
      // this.addItemText = "";
      if (this.addItemText == "") return;
      db.collection("todos")
        .add({
          text: this.addItemText,
          state: "yet",
          createdAt: new Date(),
        })
        .then((snapShot) => {
          db.collection("todos").doc(snapShot.id).update({
            id: snapShot.id,
          });
        });
      this.addItemText = "";
    },
    checkItem(index) {
      if (this.todos[index].state === "yet") {
        // this.todos[index].state = "done";
        db.collection("todos").doc(this.todos[index].id).update({
          state: "done",
        });
      } else {
        // this.todos[index].state = "yet";
        db.collection("todos").doc(this.todos[index].id).update({
          state: "yet",
        });
      }
    },
    editShow(index1) {
      console.log(`index >> ${index1}`);
      this.crrEditItem = index1;
      this.writeState = "edit";
      this.editItemText = this.todos[index1].text;
      this.$refs.list.children[index1].className = "editing"; // 연한 연두색으로 색 변경
    },
    editSave() {
      //this.todos[this.crrEditItem].text = this.editItemText;
      this.writeState = "add";
      this.$refs.list.children[this.crrEditItem].className = "";

      db.collection("todos").doc(this.todos[this.crrEditItem].id).update({
        text: this.editItemText,
      });
    },
    deleteTodo(index1) {
      // this.todos.splice(index1, 1);
      // this.writeState = "add";

      db.collection("todos").doc(this.todos[index1].id).delete();
    },
  },
  mounted() {
    this.$refs.writeArea.focus();

    // db.collection("todos")
    //   .get()
    //   .then((result) => {
    //     result.forEach((doc) => {
    //       console.log(doc.data());
    //       this.todos.push(doc.data());
    //     });
    //   });
  },
  firestore: {
    todos: db.collection("todos").orderBy("createdAt", "desc"), // 이 객체 프로퍼티명 즉 todos가 firebase db의 컬렉션명과 동일해야 함.
  },
};
</script>

<style>
</style>