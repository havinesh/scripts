// /* eslint-disable no-undef */
// // Scripts for firebase and firebase messaging
// importScripts(
//   "https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js"
// );
// importScripts(
//   "https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js"
// );

// // Initialize the Firebase app in the service worker by passing in
// // your app's Firebase config object.
// // https://firebase.google.com/docs/web/setup#config-object
// firebase.initializeApp({
//   apiKey: "AIzaSyBwG7HAROHZaWXYzjzIG-JNdNEqPzedKMA",
//   authDomain: "cleandeskai.firebaseapp.com",
//   projectId: "cleandeskai",
//   storageBucket: "cleandeskai.appspot.com",
//   messagingSenderId: "937690079602",
//   appId: "1:937690079602:web:5f2337042e05a8cf653deb",
//   measurementId: "G-E8B856ZZTV",
// });

// // // Retrieve an instance of Firebase Messaging so that it can handle background
// // // messages.
// const messaging = firebase.messaging();


/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts(
  'https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js',
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js',
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyBlXW0Wt33uXDU_yMBL8rH5saNErqrkR88',
  authDomain: 'clean-774d8.firebaseapp.com',
  projectId: 'clean-774d8',
  storageBucket: 'clean-774d8.appspot.com',
  messagingSenderId: '341897944642',
  appId: '1:341897944642:web:18d63fc1c6c009cb2517db',
  measurementId: 'G-LC1Q5CK340',
});

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  // Customize notification here
  const notificationTitle = 'CleanDesk';
  const notificationOptions = {
    body: 'Notification from CleanDesk.',
    icon: '',
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});
