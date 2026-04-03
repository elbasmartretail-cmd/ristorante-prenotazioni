importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyD3qyxx_KTpUW-8Gmo-HZneskMwff4WVyk",
  authDomain: "prenotazioni-ristorante-27661.firebaseapp.com",
  databaseURL: "https://prenotazioni-ristorante-27661-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "prenotazioni-ristorante-27661",
  storageBucket: "prenotazioni-ristorante-27661.firebasestorage.app",
  messagingSenderId: "849827200863",
  appId: "1:849827200863:web:76aefb2651e1c6406040ea"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Notifica in background:', payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '🔔',
    sound: 'default',
    tag: 'allarme-prenotazione'
  });
});