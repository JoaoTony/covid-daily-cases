import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4px;
  background-color: gray;
  border-radius: 6px;
  position: relative;

  box-sizing: border-box;

  :hover {
    div {
      opacity: 1;
    }
  }

  cursor: pointer;
`;

export const Target = styled.div`
  width: 10px;
  height: 10px;

  border-radius: 50%;


  background-color: #7979F7;
  position: absolute;
  z-index: 2;
  bottom: -3px;

  cursor: pointer;
`;

export const Floating = styled.div`
  padding: 10px;
  background-color: #EAF2F8;
  position: absolute;
  bottom: 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all ease 0.5s;

  opacity: 0;

  :after {
    content: '';
    width: 10px;
    height: 10px;
    background-color: #EAF2F8;
    position: absolute;
    z-index: 2;
    bottom: -5px;

    transform: rotate(45deg);
  }
`;

export const LocationPoint = styled.div<{ left: number }>`
  position: absolute;

  top: 15px;
  left: ${({ left }) => `${left}px`};

  color: gray;
  font-size: 1rem
`;
