// Firebase compat initializer (v10 compat scripts required on page)
(function () {
  // Set this in any page before loading this file if you want custom config:
  // window.DIGISOLUTIONS_FIREBASE_CONFIG = { ... };
  var firebaseConfig = window.DIGISOLUTIONS_FIREBASE_CONFIG || {
    apiKey: 'REPLACE_WITH_FIREBASE_API_KEY',
    authDomain: 'REPLACE_WITH_FIREBASE_AUTH_DOMAIN',
    projectId: 'REPLACE_WITH_FIREBASE_PROJECT_ID',
    storageBucket: 'REPLACE_WITH_FIREBASE_STORAGE_BUCKET',
    messagingSenderId: 'REPLACE_WITH_FIREBASE_MESSAGING_SENDER_ID',
    appId: 'REPLACE_WITH_FIREBASE_APP_ID'
  };

  if (!window.firebase) {
    console.error('Firebase compat CDN is missing on this page.');
    return;
  }

  if (!firebase.apps || !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  window.firebaseAuth = firebase.auth();
  window.firebaseDb = firebase.firestore ? firebase.firestore() : null;
})();
