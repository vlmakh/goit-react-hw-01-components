import PropTypes from 'prop-types';
import { List, Friend, Status, Avatar, Name } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => {
        return (
          <Friend key={friend.id}>
            <Status type={friend.isOnline} />
            <Avatar src={friend.avatar} alt={friend.name} width="48" />
            <Name>{friend.name}</Name>
          </Friend>
        );
      })}
    </List>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
