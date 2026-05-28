import UserRepository
from "../repositories/user.repository.js";

const repository =
new UserRepository();

export const getUserByEmail =
async (email) => {

  return await repository
    .getUserByEmail(email);
};