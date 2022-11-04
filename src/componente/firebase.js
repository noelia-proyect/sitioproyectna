// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDNUK4k-ypswZExqqxvdA9cUg_bNBgxfS8',
    authDomain: 'fb-bdreact-cc9ef.firebaseapp.com',
    projectId: 'fb-bdreact-cc9ef',
    storageBucket: "fb-bdreact-cc9ef.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
