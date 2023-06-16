import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [feedbacks, setFeedBacks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost/artemis-api/getfeedbacks.php')
      .then((res) => {
        setFeedBacks(res.data);
      })
      .catch((error) => {
        console.error('Error retrieving feedbacks:', error);
      });


    axios
    .get('http://localhost/artemis-api/tasking/getusers.php')
    .then((res) => {
      setUsers(res.data);
    })
    .catch((error) => {
      console.error('Error retrieving users:', error);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ feedbacks }}>
      {children}
    </AuthContext.Provider>
  );
}
