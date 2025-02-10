

import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtCjNvNJ6ShosVxVs5CiDFMLT72XewUjU",
  authDomain: "storage-7c53f.firebaseapp.com",
  projectId: "storage-7c53f",
  storageBucket: "storage-7c53f.firebasestorage.app",
  messagingSenderId: "477442063798",
  appId: "1:477442063798:web:3614506a689bef72f21517",
  measurementId: "G-N2Q1L2ZV7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const messagesRef = collection(db, "messages");

export default function FirestoreApp() {
  const [message, setMessage] = useState("");
  const [messages] = useCollectionData(query(messagesRef, orderBy("createdAt")), { idField: "id" });

  const sendMessage = async () => {
    if (message.trim() !== "") {
      await addDoc(messagesRef, {
        text: message,
        createdAt: new Date()
      });
      setMessage("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Firestore Chat</h2>
      <div>
        {messages && messages.map(msg => <p key={msg.id}>{msg.text}</p>)}
      </div>
      <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
