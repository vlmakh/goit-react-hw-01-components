import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 20px auto 0 auto;
  width: 300px;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid darkgrey;
  background-color: #fff;
  box-shadow: 2px 2px 4px white;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    return props.type ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  display: block;
  border: 1px solid darkgrey;
  border-radius: 4px;
  padding: 8px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
