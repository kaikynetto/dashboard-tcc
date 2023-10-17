import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { db } from '../src/firebase';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [feedbacks, setFeedBacks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = db.collection('users');
      const snapshot = await usersCollection.get();
      const userList = [];

      snapshot.forEach((doc) => {
        userList.push({ id: doc.id, ...doc.data() });
      });

      setUsers(userList);
    };

    fetchUsers();
  }, []);

  return (
    <AuthContext.Provider value={{ feedbacks, users }}>
      {children}
    </AuthContext.Provider>
  );
}
