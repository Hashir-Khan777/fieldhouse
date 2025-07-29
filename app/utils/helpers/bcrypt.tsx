import bcrypt from "bcrypt";

const bcryptPassword = (password: any) => bcrypt.hash(password, 16);

const comparePassword = (userPassword: any, databaseUserPassword: any) =>
  bcrypt.compare(userPassword, databaseUserPassword);

export { bcryptPassword, comparePassword };
