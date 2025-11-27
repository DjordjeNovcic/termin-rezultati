import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue }
  from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9C173giGVH0gt_x4W8f-hoJldHXyRfqo",
  authDomain: "termin-rezultati.firebaseapp.com",
  databaseURL: "https://termin-rezultati-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "termin-rezultati",
  storageBucket: "termin-rezultati.appspot.com",
  messagingSenderId: "263582756600",
  appId: "1:263582756600:web:d40d40c474340122d4950d"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.db = db;
window.dbRef = (path) => ref(db, path);
window.pushTo = (path, data) => push(ref(db, path), data);
window.setTo = (path, data) => set(ref(db, path), data);
window.onValue = onValue;
