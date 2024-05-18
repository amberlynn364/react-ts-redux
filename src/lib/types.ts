export enum RouterPaths {
  RootLayout = '/',
  NotFoundPage = '*',
  AddUser = 'add-user',
}

export interface UserDto {
  id: string;
  name: string;
  username: string;
  email: string;
  company: {
    name: string;
    catchPhrase: string;
  };
}

export interface UserCredential {
  username: string;
  email: string;
  name: string;
}
