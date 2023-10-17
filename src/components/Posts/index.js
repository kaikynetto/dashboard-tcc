import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../pages/Context';
import { FeedBackCard, FeedBacksContainer } from '../FeedBacks/FeedBacksElements';
import axios from 'axios';
import { AiOutlineUser, AiOutlineMail, AiOutlineFileText, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { MdPassword } from 'react-icons/md';
import { db } from '../../firebase';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{ 
    
    const fetchUsers = async () => {
      const usersCollection = db.collection('posts');
      const snapshot = await usersCollection.get();
      const userList = [];

      snapshot.forEach((doc) => {
        userList.push({ id: doc.id, ...doc.data() });
      });

      setPosts(userList);
    };

    fetchUsers();
  }, [])

  return (
    <FeedBacksContainer>
      <div style={{ width: '100%' }}>
        {posts && posts.length > 0 ? (
          <>
            <p style={{ fontSize: 22 }}>Publicações</p>
            {posts.map((item) => (
                <FeedBackCard>
                    <div style={{display: 'flex', marginBottom: 20, alignItems: 'center'}}>
                        <AiOutlineUser size={32} fill='var(--secondary-color)'/>
                        <p style={{marginLeft: 10,color: "var(--secondary-color)", fontSize: 18}}>{item.uid}</p>
                    </div>
                    <div style={{display: 'flex', marginBottom: 20, alignItems: 'center'}}>
                        <AiOutlineFileText size={32} fill='var(--secondary-color)'/>
                        <p style={{marginLeft: 10,color: "var(--secondary-color)", fontSize: 18}}>{item.text}</p>
                    </div>
                    <div style={{display: 'flex', marginBottom: 20, alignItems: 'center'}}>
                        <AiOutlineArrowUp size={32} fill='var(--secondary-color)'/>
                        <p style={{marginLeft: 10,color: "var(--secondary-color)", fontSize: 18}}>{item.upvotes}</p>
                    </div>
                    <div style={{display: 'flex', marginBottom: 20, alignItems: 'center'}}>
                        <AiOutlineArrowDown size={32} fill='var(--secondary-color)'/>
                        <p style={{marginLeft: 10,color: "var(--secondary-color)", fontSize: 18}}>{item.downvotes}</p>
                    </div>
                </FeedBackCard>
            ))}
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 22 }}>Sem posts no momento!</p>
          </div>
        )}
      </div>
    </FeedBacksContainer>
  );
}
