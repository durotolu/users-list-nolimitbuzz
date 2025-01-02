import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../utils/api';
import styles from '../styles/UserCard.module.css';
import { User } from '../utils/types';

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <div className={styles.userList}>
        {users.map((user: any) => (
          <div className={styles.userCard} key={user.id}>
            <h3>{user.name}</h3>
            <p>
              <i>{user.username}</i>
            </p>
            <Link to={`/user/${user.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
