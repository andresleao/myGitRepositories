import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';

export const Header = styled.header`
  height: 22vh;
  background-color: #110a64;
  border-bottom: 0.7rem solid #f25bdb;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.65);
  z-index: 100;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 3rem;
  display: flex;
  margin-top: 1rem;
`;

export const GitLogo = styled(BsGithub)`
  margin-right: 1rem;
`;
