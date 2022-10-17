import styled from '@emotion/styled';

export const Stats = styled.section`
  width: 300px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid darkgrey;
`;

export const Title = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
  margin: 20px 0;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  width: 20%;
  background-color: aqua;
  padding: 10px 0;
`;

export const Label = styled.span`
  display: block;
  font-size: 12px;
  color: #fff;
`;

export const Percentage = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;
