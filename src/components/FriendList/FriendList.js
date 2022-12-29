import PropTypes from 'prop-types';
import {
  List,
  FriendListItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => {
        return (
          <FriendListItem key={friend.id}>
            <Status type={friend.isOnline.toString()} />
            <Avatar src={friend.avatar} alt={friend.name} width="48" />
            <Name>{friend.name}</Name>
          </FriendListItem>
        );
      })}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
