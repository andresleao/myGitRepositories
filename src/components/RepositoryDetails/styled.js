import styled from 'styled-components';

export const Container = styled.div`
  background-color: #110a64;
  border-radius: 0.5rem;
  box-shadow: 0px 15px 15px -9px rgba(0, 0, 0, 0.59);
  border: 2px solid #fff;
`;

export const Avatar = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50px;
  grid-area: AV;
`;

export const Photo = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 100px;
`;

export const Back = styled.button`
  border: none;
  padding: 1rem 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  margin-left: 3px;
  font-weight: bold;
  transition: all 0.5s;

  &:hover {
    background-color: #110a64;
    color: #fff;
  }
`;

export const Title = styled.h3`
  padding: 1rem;
  color: #fff;
  font-size: 1.5rem;
  background-color: #f25bdb;
  border-bottom: solid 2px #fff;
`;

export const Details = styled.ul`
  list-style: none;
  padding: 1rem;
  display: grid;
  grid-template-areas:
    'AV CT'
    'AV CT';
  margin-left: 2rem;
`;

export const ItemContainer = styled.div`
  grid: CT;
  border-left: solid 2px #f25bdb;
  margin-right: 2rem;
  padding: 0 1.5rem;
`;

export const Item = styled.li`
  color: #fff;
  font-weight: bold;
  margin-bottom: 1rem;
`;
