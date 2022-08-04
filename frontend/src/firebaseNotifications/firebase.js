import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyAmz_RWFBAtp5_cdSHX3Ku8RbVvdP1M6jo",
  authDomain: "homemade-4c6ef.firebaseapp.com",
  projectId: "homemade-4c6ef",
  storageBucket: "homemade-4c6ef.appspot.com",
  messagingSenderId: "1039988480650",
  appId: "1:1039988480650:web:1850417ef674f35cae6b73",
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BPKhpfQnAoBpq5L5oPcMq6eU2PM8FMEXLQLh9TAVz86UheDVu6uy09B7r1117--78Emyh7P8WFu6YmRuFxEF9SA",
  })
    .then((currentToken) => {
      if (currentToken) {
        localStorage.setItem("firebase_token", currentToken);
        console.log("current token for client: ", currentToken);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
