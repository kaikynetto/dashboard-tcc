import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../pages/Context';
import { FeedBackCard, FeedBacksContainer } from '../FeedBacks/FeedBacksElements';
import axios from 'axios';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { MdPassword } from 'react-icons/md';
import { db } from '../../firebase';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() =>{ 
    
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
  }, [])

  return (
    <FeedBacksContainer>
      <div style={{ width: '100%' }}>
        {users && users.length > 0 ? (
          <>
            <p style={{ fontSize: 22 }}>USUÁRIOS</p>
            {users.map((item, index) => (
                <FeedBackCard key={index}>
                    <div style={{display: 'flex', marginBottom: 20, alignItems: 'center'}}>
                        <AiOutlineUser size={32} fill='var(--secondary-color)'/>
                        <p style={{marginLeft: 10,color: "var(--secondary-color)", fontSize: 18}}>{item.name} {item.surname}</p>
                    </div>
                    <div style={{display: 'flex', marginBottom: 20, alignItems: 'center'}}>
                        <AiOutlineMail size={32} fill='var(--secondary-color)'/>
                        <p style={{marginLeft: 10, color: "var(--secondary-color)", fontSize: 18}}>{item.email}</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <AiOutlineUser size={32} fill='var(--secondary-color)'/>
                        <p style={{marginLeft: 10,color: "var(--secondary-color)", fontSize: 18}}>{item.cpf}</p>
                    </div>
                </FeedBackCard>
            ))}
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 22 }}>Sem usuários no momento!</p>
          </div>
        )}
      </div>
    </FeedBacksContainer>
  );
}
