import { useWeb3React } from '@web3-react/core';
import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { connector } from '../utils/configMeta';

const StyledLoginMetamask = styled.section`
  grid-column: 1/3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: none;
    padding: 1rem;
    border-radius: 1rem;
    width: 100px;
    background-color: #004394;
    font-weight: bold;
    letter-spacing: 3px;
  }
  .loginWhithMetamask {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2 {
      background: transparent;
      box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.5);
      border-radius: 1rem;
      padding: 3rem;
      color: #0449e9;
    }
  }
`;

const WebLogin = () => {
  const { active,
    account,
    activate,
    deactivate,
    chainId,
    error 
  } =
    useWeb3React();

  const connect = useCallback(() => {
    activate(connector);
    console.log('intente connectarme');
    localStorage.setItem('activeWallet', 'true');
  }, [activate]);

  useEffect(() => {
    const activeWallet = JSON.stringify(localStorage.getItem('activeWallet'));
    if (activeWallet) {
      connect();
    }
  }, [connect]);

  const discconect = () => {
    deactivate();
    localStorage.removeItem('activeWallet');
  };

  if (error) {
    localStorage.removeItem('activeWallet');
  }

  return (
    <StyledLoginMetamask>
      <div className="metaLogin">
        {active ? (
          <div className="loginWhitMetamask">
            <button onClick={discconect}>disconnect</button>
            <p>
              <strong>Account: </strong>
              {account}
            </p>
            <p>you are connected to {chainId} network</p>
          </div>
        ) : (
          <>
            <div className="loginWhithMetamask">
              <h2>
                <strong>click to login whith metamask </strong>
              </h2>
              <button onClick={connect}>connect</button>
            </div>
          </>
        )}
      </div>
    </StyledLoginMetamask>
  );
};
export default WebLogin;
