import UserDTO from "../dto/user.dto.js";

export const current = async (
  req,
  res
) => {

  const userDTO =
    new UserDTO(req.user);

  res.json({
    status: "success",
    payload: userDTO
  });
};