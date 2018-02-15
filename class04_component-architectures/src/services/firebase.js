import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDh-a3I9dQE7iOzsR72AWYUyaphp7AuYos",
  authDomain: "todo-9ea8e.firebaseapp.com",
  databaseURL: "https://todo-9ea8e.firebaseio.com",
  projectId: "todo-9ea8e",
  storageBucket: "",
  messagingSenderId: "45672748538"
};

const app = firebase.initializeApp(config);

export const db = app.database();