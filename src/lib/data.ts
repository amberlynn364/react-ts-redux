import { RouterPaths } from './types';

export const headerLinks = [
  {
    name: "User's List",
    hash: RouterPaths.RootLayout,
  },
  {
    name: 'Add User',
    hash: RouterPaths.AddUser,
  },
] as const;
