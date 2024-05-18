import { UserCredential, UserDto } from '../lib/types';
import api from './apiInstance';

export const getUsers = async (): Promise<UserDto[]> => {
  try {
    const response = await api.get<UserDto[]>('');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error while getting users:', error);
    throw error;
  }
};

export const createUser = async (
  userData: UserCredential
): Promise<UserDto> => {
  try {
    const response = await api.post('', userData, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const deleteUser = async (id: number) => {
  const response = await api.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  console.log(`User with id:${id} was deleted`);
  console.log(response);
};
