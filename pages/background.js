import Image from 'next/image'
import Modal from 'react-modal'
import React, { useState } from 'react'
import ViewSource from '../components/view-source'
import itemsButton from '../components/itemsButton'
import { bgWrap, bgText } from '../styles/Home.module.css'
import styled from 'styled-components'

// Modal.setAppElement("#__next")

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


const Background = () => (
  <div>
    {/* <ViewSource pathname="pages/background.js" /> */}
    <div className={bgWrap}>
      <Image
        alt="Inventory"
        src="/images/scoutTemplate.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <Container>
      <Button>Click Me</Button>
    </Container>
    {/* <p className={bgText}>
      Test2
    </p> */}
    {/* <Modal isOpen={true}>
      <div>In the modal</div>
    </Modal> */}
  </div>
)

export default Background