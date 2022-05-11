
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAn7EyfvuLDex9kcZLR2JFr1t4BNp_fyr8",
  authDomain: "golfmaid-57620.firebaseapp.com",
  projectId: "golfmaid-57620",
  storageBucket: "golfmaid-57620.appspot.com",
  messagingSenderId: "881519794968",
  appId: "1:881519794968:web:bcae54fd657f04fb245c6d",
  measurementId: "G-M07WQPZLZM"
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export { storage };