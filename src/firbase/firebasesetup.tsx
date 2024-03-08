import firebase from "firebase/compat/app";
import  {getAuth} from "firebase/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCGv36iQJg9Q8OIbSesY2mZneSKN0a77Tk",
    authDomain: "allmart-ecommerce-eff71.firebaseapp.com",
    projectId: "allmart-ecommerce-eff71",
    storageBucket: "allmart-ecommerce-eff71.appspot.com",
    messagingSenderId: "543898218788",
    appId: "1:543898218788:web:ce5806a33d3f09095b03b1",
    measurementId: "G-VP18T17536"
}; //this is where your firebase app values you copied will go

const app=firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore=firebase.firestore();