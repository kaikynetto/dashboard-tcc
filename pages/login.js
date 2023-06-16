import React, { useEffect, useState } from 'react'
import img2 from "../public/img/logo.png"
import styled from 'styled-components'
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { MdPassword } from 'react-icons/md';
import Router, { useRouter } from 'next/router';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = () => {
    axios({
      method: "POST",
      url: "http://localhost/artemis-api/tasking/login.php",
      data: {
        email,
        password
      }
    }).then((res) => {
      if(res.data.status === "OK!" && res.data.userStatus === "admin") {
        localStorage.setItem("email", email),
        localStorage.setItem("password", password);
        router.push("/");
      } else {
        alert("Senha ou email inválidos!");
      }
    })
  }

  
  return (
    <LoginContainer>
      <LoginForm>
          <Image width="100px" height="100px" src={img2}/>
        <Heading>Seja bem-vindo de volta à Tasking!</Heading>
        <InputBox>
          <AiOutlineMail size={24} color='var(--primary-color)'/>
          <Input value={email} onChange={e => setEmail(e.target.value)} type='email'placeholder='Email'/>
        </InputBox>
        <InputBox>
          <MdPassword size={24} color='var(--primary-color)'/>
          <Input value={password} onChange={e => setPassword(e.target.value)} type='password'placeholder='Senha'/>
        </InputBox>
        <InputBtn onClick={() => {
          login();
        }}>Entrar</InputBtn>
      </LoginForm>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
`;

const LoginForm = styled.div`
  text-align: center;
`;

const ForgotPassword = styled.a`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-size: 18px;
  margin: 10px;
  color: var(--primary-color);
`;

const InputBox = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 10px;
  justify-content: flex-start;
  border: 1px solid var(--primary-color);
  background: none;
  margin-bottom: 20px;
  color: var(--primary-color);
  border-radius: 5px;
`;

const Input = styled.input`
  border: none;
  background: none;
  color: var(--primary-color);
  outline: none;
  margin-left: 5px;
  width: 100%;
  display: block;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
     color: white;
  }
`;

const InputBtn = styled.button`
  width: 100%;
  padding: 10px;
//   margin-top: 20px;
  border-radius: 5px;
  border: none;
  background: var(--primary-color);
  color: var(--secondary-color);

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const HaveAccount = styled.button`
  margin-top: 20px;
  background: none;
  border: none;
  font-size: 18px;
  color: var(--primary-color);
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;