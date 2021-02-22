export class AppUser {
  id: number;
  username?: string;
  fName?: string; // First name of user
  lName?: string; // Last name of user
  email?: string; // User email
  password?: string; // User Password
  passwordConfirmation?: string;  // User Password Config
  isAdmin?: boolean; // Indicate Admin role
  avatar?: string; // Indicate Admin role if Photo missing
  token?: string; // For Token Based Authentication
  description?: string; // For what? maek sens??
}
