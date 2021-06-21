import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Modal } from '/components/Modal'
// import Modal from 'react-modal'
import React, { useState } from 'react'
// import ViewSource from '../components/view-source'
// import itemsButton from '../components/itemsButton'
import { bgWrap, bgText } from '../styles/Home.module.css'
import styled from 'styled-components'
import { GlobalStyle } from '../globalStyles';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #0d43f4;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <div>
    {/* <ViewSource pathname="pages/background.js" /> */}
    <div className={bgWrap}>
      <Image
        src="/images/scoutTemplate.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <Container>
      <Button onClick={openModal}>Click Me</Button>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <GlobalStyle/>
    </Container>
  </div>
  )
}
