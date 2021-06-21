import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import React, { useState } from 'react'
import { Modal } from '/components/Modal'
import { GlobalStyle } from '../globalStyles'
import styles from '../styles/Home.module.css'
import { bgWrap, bgText } from '../styles/Home.module.css'

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
