const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
};

export const fetchUserById = async (id: string) => {
  const response = await fetch(`${API_URL}/users/${id}`);
  return response.json();
};
