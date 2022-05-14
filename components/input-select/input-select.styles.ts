import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  height: 40px;
  position: relative;
`;

export const Input = styled.input`
  width: 150px;
  height: 40px;

  border-radius: 8px;
  background-color: #DBE2E7;

  border: none;

  padding: 10px;

  outline-color: gray;
`;

export const Options = styled.div`
  position: absolute;
  top: 45px;
  width: 100%;

  background-color: #DBE2E7;
  border-radius: 8px;


  z-index: 2000;

  box-shadow:  0 0 8px #F1F5F7;

  p {
    color: gray;
    font-size: 1rem;
    padding: 8px 10px;
    :hover{
      background: #F1F5F7 ;
    }

    :first-child {
      border-radius: 8px 8px 0 0;
    }

    :last-child {
      border-radius: 0 0 8px 8px;
    }
  }
`;
