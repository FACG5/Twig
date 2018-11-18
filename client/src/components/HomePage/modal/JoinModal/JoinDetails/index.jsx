import React from 'react';
import './style.css';
import StageOne from './StageOne';
import StegeTwo from './StageTwo';
import { ModalConsumer } from '../../ModalContext';

export default function JoinDetails() {
  return (
    <ModalConsumer>
      {context => (
        <div className="modal__content">
          {context.firstStage ? <StageOne /> : <StegeTwo />}
        </div>
      )}
    </ModalConsumer>
  );
}
