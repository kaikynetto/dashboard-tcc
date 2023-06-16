import styled from "styled-components";

export const FeedBacksContainer = styled.div`
    // height: 80vh;
    margin: 30px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 15px;
`;

export const FeedBackCard = styled.div`
    width: 100%;
    background: var(--primary-color);
    padding: 10px 10px;
    margin-bottom: 10px;
    border-radius: 15px;
`;

export const FeedBackAssunto = styled.h4`
    font-size: 22px;
    color: var(--secondary-color);
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
`;

export const ModalCloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #333;
  cursor: pointer;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 400px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
`;

export const ButtonSee = styled.button`
    background: var(--secondary-color);
    padding: 10px;
    color: var(--primary-color);
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
    border: none;
`;