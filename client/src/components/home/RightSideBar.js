import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import UserCard from '../UserCard';
import FollowBtn from '../FollowBtn';
import LoadIcon from '../../assets/images/loading.gif';
import { getSuggestions } from '../../redux/actions/suggestionsAction';

const RightSideBar = () => {
  const { auth, suggestions } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="mt-3">
      <UserCard user={auth.user} />

      <div className="d-flex justify-content-between align-items-center my-2">
        <h5 className="text-danger">Gợi ý cho bạn</h5>
        {!suggestions.loading && (
          <i
            className="fas fa-redo"
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(getSuggestions(auth.token))}
          />
        )}
      </div>

      {suggestions.loading ? (
        <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
      ) : (
        <div className="suggestions">
          {suggestions.users.map((user) => (
            <UserCard key={user._id} user={user}>
              <FollowBtn user={user} />
            </UserCard>
          ))}
        </div>
      )}

      <div style={{ opacity: 0.5 }} className="my-2">
        <a
          href="https://www.facebook.com/profile.php?id=100033670082606"
          target="_blank"
          rel="noreferrer"
          style={{ wordBreak: 'break-all' }}
        >
          Liên Hệ
        </a>
        <small className="d-block">Chào Mừng Đến Với INSTAGRAM</small>

        <small>&copy; 2022 INSTAGRAM FROM BUI VAN TAN</small>
      </div>
    </div>
  );
};

export default RightSideBar;
