import { UserCredential, UserDto } from '../lib/types';
import api from '../api/apiInstance';
import { createUser, deleteUser, getUsers } from '../api/users';

jest.mock('../api/apiInstance');

describe('getUsers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch users successfully', async () => {
    const mockUsers: UserDto[] = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        username: 'johndoe',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        username: 'janedoe',
      },
    ];

    (api.get as jest.Mock).mockResolvedValue({ data: mockUsers });

    const users = await getUsers();

    expect(users).toEqual(mockUsers);
    expect(api.get).toHaveBeenCalledTimes(1);
    expect(api.get).toHaveBeenCalledWith('');
  });

  it('should throw an error if the API call fails', async () => {
    const mockError = new Error('Network Error');

    (api.get as jest.Mock).mockRejectedValue(mockError);

    await expect(getUsers()).rejects.toThrow('Network Error');
    expect(api.get).toHaveBeenCalledTimes(1);
    expect(api.get).toHaveBeenCalledWith('');
  });
});

describe('createUser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a user successfully', async () => {
    const userData: UserCredential = {
      username: 'johndoe',
      email: 'john.doe@example.com',
      name: 'John Doe',
    };
    const mockUser: UserDto = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      username: 'johndoe',
    };

    (api.post as jest.Mock).mockResolvedValue({ data: mockUser });

    const user = await createUser(userData);

    expect(user).toEqual(mockUser);
    expect(api.post).toHaveBeenCalledTimes(1);
    expect(api.post).toHaveBeenCalledWith('', userData, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  });

  it('should throw an error if the API call fails', async () => {
    const userData: UserCredential = {
      username: 'johndoe',
      email: 'john.doe@example.com',
      name: 'John Doe',
    };
    const mockError = new Error('Network Error');

    (api.post as jest.Mock).mockRejectedValue(mockError);

    await expect(createUser(userData)).rejects.toThrow('Network Error');
    expect(api.post).toHaveBeenCalledTimes(1);
    expect(api.post).toHaveBeenCalledWith('', userData, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  });
});

describe('deleteUser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should delete a user successfully', async () => {
    const userId = 1;

    (api.delete as jest.Mock).mockResolvedValue({ status: 200 });

    await deleteUser(userId);

    expect(api.delete).toHaveBeenCalledTimes(1);
    expect(api.delete).toHaveBeenCalledWith(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    );
  });

  it('should throw an error if the API call fails', async () => {
    const userId = 1;
    const mockError = new Error('Network Error');

    (api.delete as jest.Mock).mockRejectedValue(mockError);

    await expect(deleteUser(userId)).rejects.toThrow('Network Error');
    expect(api.delete).toHaveBeenCalledTimes(1);
    expect(api.delete).toHaveBeenCalledWith(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    );
  });
});
