import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { clearNotify } from '../redux/actions';
import { Notification, StoreState } from '../redux/types';


const Wrapper = styled.div`
  min-width: 125px;
  padding: 5px 12px;
  background: #EAB76C;
  border-radius: 8px;
  position: fixed;
  z-index: 1001;
  font-size: 12px;
  color: #fff;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const Toast: FC = () => {
  const [timer, setTimer] = useState<any>();
  const notification = useSelector<StoreState, Notification>(state => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notification.isOpen) {
      setTimer(setTimeout(() => {
        dispatch(clearNotify());
      }, 3000));
    }
    return () => {
      clearTimeout(timer);
    }
  }, [notification]);

  return notification.isOpen ? (
    <Wrapper>
      {notification.errorMessage}
    </Wrapper>
  ) : null
}

export default Toast
