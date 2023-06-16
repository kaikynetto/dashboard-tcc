import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../pages/Context';
import { ButtonSee, FeedBackAssunto, FeedBackCard, FeedBacksContainer, Modal, ModalCloseButton, ModalContent, ModalImage, ModalOverlay } from './FeedBacksElements';
import { FiUser } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function FeedBacks() {
  const { feedbacks } = useContext(AuthContext);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const openModal = (feedback) => {
    setSelectedFeedback(feedback);
  };

  const closeModal = () => {
    setSelectedFeedback(null);
  };

  return (
    <FeedBacksContainer>
      <div style={{ width: '100%' }}>
        {feedbacks.length > 0 ? (
          <>
            <p style={{ fontSize: 22 }}>FEEDBACKS</p>
            {feedbacks.map((item) => (
              <FeedBackCard key={item.id}>
                <div style={{ display: 'flex', marginTop: 10, marginBottom: 10 }}>
                  <FiUser size={24} stroke='#6059f7' />
                  <p style={{ fontSize: 18, color: 'var(--secondary-color)' }}>Enviado por {item.name}</p>
                </div>
                <FeedBackAssunto>{item.message}</FeedBackAssunto>
                {item.image && (
                  <ButtonSee onClick={() => openModal(item)}>Ver imagem</ButtonSee>
                )}
              </FeedBackCard>
            ))}
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 22 }}>Sem feedbacks no momento!</p>
          </div>
        )}
      </div>

      {selectedFeedback && (
        <Modal>
          <ModalOverlay>
            <ModalContent>
              <div style={{width: '100%', display: 'flex', marginBottom: 20, justifyContent: 'space-between', alignItems: 'center'}}>
                <AiOutlineCloseCircle  style={{cursor: 'pointer'}} onClick={closeModal} fill='var(--secondary-color)' size={32}/>
              </div>
              <ModalImage src={selectedFeedback.image} alt="Imagem do Feedback" />
              {/* <ModalCloseButton onClick={closeModal}>Fechar</ModalCloseButton> */}
            </ModalContent>
          </ModalOverlay>
        </Modal>
      )}
    </FeedBacksContainer>
  );
}
