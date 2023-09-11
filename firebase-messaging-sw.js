/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyBwG7HAROHZaWXYzjzIG-JNdNEqPzedKMA",
  authDomain: "cleandeskai.firebaseapp.com",
  projectId: "cleandeskai",
  storageBucket: "cleandeskai.appspot.com",
  messagingSenderId: "937690079602",
  appId: "1:937690079602:web:5f2337042e05a8cf653deb",
  measurementId: "G-E8B856ZZTV",
});

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
const messaging = firebase.messaging();
