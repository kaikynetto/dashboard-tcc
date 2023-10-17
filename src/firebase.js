import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXac6NgAyh-BuhwpTVXeIM3x4iZ_4ofk8",
authDomain: "tasking-aef2f.firebaseapp.com",
projectId: "tasking-aef2f",
storageBucket: "tasking-aef2f.appspot.com",
messagingSenderId: "293636426255",
appId: "1:293636426255:web:bf17563bf4514de9e6f17a",
measurementId: "G-WGLJ4CS8YH"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };