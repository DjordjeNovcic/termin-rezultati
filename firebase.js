<script type="module">
  // Firebase imports
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

  // Your config
  const firebaseConfig = {
    apiKey: "AIzaSyB9C173giGVH0gt_x4W8f-hoJldHXyRfqo",
    authDomain: "termin-rezultati.firebaseapp.com",
    databaseURL: "https://termin-rezultati-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "termin-rezultati",
    storageBucket: "termin-rezultati.firebasestorage.app",
    messagingSenderId: "263582756600",
    appId: "1:263582756600:web:d40d40c474340122d4950d"
  };

  // Initialize Firebase
  window.app = initializeApp(firebaseConfig);
  window.db = getDatabase(window.app);
  window.dbRef = (path) => ref(window.db, path);
  window.pushTo = (path, data) => push(ref(window.db, path), data);
  window.setTo = (path, data) => set(ref(window.db, path), data);
  window.onValue = onValue;
</script>
