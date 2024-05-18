export enum RouterPaths {
  RootLayout = '/',
  NotFoundPage = '*',
  AddUser = 'add-user',
}

export interface UserDto {
  id: number;
  name: string;
  username: string;
  email: string;
}

export type UserCredential = Omit<UserDto, 'id'>;
