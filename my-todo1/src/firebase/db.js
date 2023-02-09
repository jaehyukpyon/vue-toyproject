import firebase from 'firebase/app'; // 파이어베이스 기능 불러오기
import 'firebase/firestore'; // 파이어베이스의 파이어스토어 기능 불러오기

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS53FdAUV9BtXaomcNKbNsgJXCMclmgM0",
  authDomain: "my-todo1-c5f09.firebaseapp.com",
  projectId: "my-todo1-c5f09",
  storageBucket: "my-todo1-c5f09.appspot.com",
  messagingSenderId: "1613352930",
  appId: "1:1613352930:web:ffd502d763a2ce0ce0b3bb"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();
