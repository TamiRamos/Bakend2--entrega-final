import { generateResetToken }
from "../utils/resetToken.js";

import { sendRecoveryEmail }
from "./mail.service.js";

export const recoverPassword = async (
  email
) => {

  const token =
    generateResetToken(email);

  const link =
`http://localhost:3000/reset-password/${token}`;

  await sendRecoveryEmail(
    email,
    link
  );
};