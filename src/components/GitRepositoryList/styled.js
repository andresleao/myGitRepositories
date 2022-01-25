import styled from 'styled-components';

export const Container = styled.div`
  background-color: #110a64;
  border-radius: 0.5rem;
  box-shadow: 0px 15px 15px -9px rgba(0, 0, 0, 0.59);
`;

export const Title = styled.h3`
  font-size: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #f25bdb;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 0.7rem 0;
  border-bottom: 3px solid #fff;
`;

export const List = styled.ul`
  list-style: none;
  padding: 1.5rem 1rem;
`;

export const ItemContainer = styled.li`
  color: #fff;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  border-left: 8px solid #f25bdb;
  background-color: #141688;
  padding: 0rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;

  &:hover {
    background-color: #0f11b3;
  }
`;

export const ItemTitle = styled.div`
  border-radius: 0.5rem;
  padding: 0.3rem 0;
  font-size: 1.4rem;
`;

export const Field = styled.div`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Details = styled.button`
  margin: 0.5rem 0;
  padding: 0.3rem 0;
  border: none;
  font-size: 1.3rem;
  font-weight: bold;
  border-radius: 10rem;
  transition: all 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #110a64;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 15px 15px -9px rgba(0, 0, 0, 0.59);
    background-color: #f25bdb;
    color: #fff;
  }
`;
