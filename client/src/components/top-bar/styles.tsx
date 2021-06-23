import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  padding: 16px 16px 0 0;
  max-width: 768px;
  margin: 0 auto;
`;

const ContainerStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  width: 100%;
`;

const Versus = styled.div`
  font-size: 48px;
  color: #dd2222;
  text-shadow: 0px 0px 5px #884444;
`;

export { Container, ContainerStatus, Versus };
