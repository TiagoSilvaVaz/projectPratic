import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDX4VFJlYY2DyvTYjll-CSwcl0NrO_K8E8",
  authDomain: "sisporto-8fc58.firebaseapp.com",
  projectId: "sisporto-8fc58",
  storageBucket: "sisporto-8fc58.appspot.com",
  messagingSenderId: "1084140021698",
  appId: "1:1084140021698:web:34196c14d90561ba20585b",
  databaseURL: "https://sisporto-8fc58-default-rtdb.firebaseio.com/",
  //measurementId: "${config.measurementId}"
};

const app = initializeApp(firebaseConfig);
console.log(app)
export default app;


