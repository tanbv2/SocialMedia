import React from 'react';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';

const UserCard = ({
  children,
  user,
  border,
  handleClose,
  setShowFollowers,
  setShowFollowing,
  msg,
}) => {
  const handleCloseAll = () => {
    if (handleClose) handleClose();
    if (setShowFollowers) setShowFollowers(false);
    if (setShowFollowing) setShowFollowing(false);
  };

  const showMsg = (user) => {
    return (
      <>
        <div>{user.text}</div>
        {user.media.length > 0 && (
          <div>
            {user.media.length} <i className="fas fa-image" />
          </div>
        )}

        {user.call && (
          <span className="material-icons">
            {user.call.times === 0
              ? user.call.video
                ? 'videocam_off'
                : 'phone_disabled'
              : user.call.video
              ? 'video_camera_front'
              : 'call'}
          </span>
        )}
      </>
    );
  };

  return (
    <div className={`d-flex p-2 align-items-center justify-content-between  w-100 ${border}  `}>
      <div>
        <Link
          to={`/profile/${user._id}`}
          onClick={handleCloseAll}
          className="d-flex align-items-center"
          style={{ textDecoration: 'none' }}
        >
          <Avatar src={user.avatar} size="big-avatar" />

          <div style={{ transform: 'translateY(-2px)', marginLeft: '15px' }}>
            <span>{msg ? showMsg(user) : user.fullname}</span>
            <small className="d-block" style={{ opacity: 0.7 }}>
              @{user.username}
            </small>
          </div>
        </Link>
      </div>

      {children}
    </div>
  );
};

export default UserCard;
