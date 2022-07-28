importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAmz_RWFBAtp5_cdSHX3Ku8RbVvdP1M6jo",
  authDomain: "homemade-4c6ef.firebaseapp.com",
  projectId: "homemade-4c6ef",
  storageBucket: "homemade-4c6ef.appspot.com",
  messagingSenderId: "1039988480650",
  appId: "1:1039988480650:web:1850417ef674f35cae6b73",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
