import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../utils/api';
import styles from '../styles/UserCard.module.css';
import { User } from '../utils/types';

const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (!id)  return;
    fetchUserById(id).then(setUser);
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.userCard}>
      <h1>{user.name}'s Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>Address: {`${user.address.street}, ${user.address.city}`}</p>
      <p>Zipcode: {user.address.zipcode}</p>
    </div>
  );
};

export default UserDetailsPage;
