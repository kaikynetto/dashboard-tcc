import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../pages/Context';
import { FeedBackCard, FeedBacksContainer } from '../FeedBacks/FeedBacksElements';
import axios from 'axios';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { MdPassword } from 'react-icons/md';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() =>{ 
    axios
    .get('http://localhost/artemis-api/tasking/getusers.php')
    .then((res) => {
      setUsers(res.data);
    })
    .catch((error) => {
      console.error('Error retrieving users:', error);
    });
  }, [])

  return (
    <FeedBacksContainer>
      <div style={{ width: '100%' }}>
        {users && users.length > 0 ? (
          <>
            <p style={{ fontSize: 22 }}>USUÁRIOS</p>
            {users.map((item) => (
                <FeedBackCard>
                    <div style={{display: 'flex', marginBottom: 20, alignItems: 'center'}}>
                        <AiOutlineUser size={32} fill='var(--secondary-color)'/>
                        <p style={{marginLeft: 10,color: "var(--secondary-color)", fontSize: 18}}>{item.name} {item.surname}</p>
                    </div>
                    <div style={{display: 'flex', marginBottom: 20, alignItems: 'center'}}>
                        <AiOutlineMail size={32} fill='var(--secondary-color)'/>
                        <p style={{marginLeft: 10, color: "var(--secondary-color)", fontSize: 18}}>{item.email}</p>
                    </div>
                    <div style={{display: 'flex', marginBottom: 20, alignItems: 'center'}}>
                        <MdPassword size={32} fill='var(--secondary-color)'/>
                        <p style={{marginLeft: 10,color: "var(--secondary-color)", fontSize: 18}}>{item.password}</p>
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
