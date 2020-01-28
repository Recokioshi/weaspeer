import * as firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: 'AIzaSyAgsq_sP5F56_nDP5GB9jESALOz_Lt6emA',
  authDomain: 'weaspeer.firebaseapp.com',
  databaseURL: 'https://weaspeer.firebaseio.com',
  projectId: 'weaspeer',
  storageBucket: 'weaspeer.appspot.com',
  messagingSenderId: '177819034242',
  appId: '1:177819034242:web:f1f38e87448f0bb50eca9b',
  measurementId: 'G-7BVGH5C7HX'
};
// Initialize Firebase

let app: firebase.app.App;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
} else {
  app = firebase.app();
}

export default app;
