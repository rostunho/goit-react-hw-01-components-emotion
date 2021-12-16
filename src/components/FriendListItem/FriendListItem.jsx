import PropTypes from 'prop-types';
import { Item, Online, Offline, Avatar, Name } from './FriendListItem.styled';

function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <Item key={id}>
      {isOnline ? <Online /> : <Offline />}
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
