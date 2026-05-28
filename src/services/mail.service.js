import transporter
from "../utils/transporter.js";

export const sendRecoveryEmail =
async (email, link) => {

  await transporter.sendMail({

    from: process.env.EMAIL,

    to: email,

    subject:
"Recuperación de contraseña",

    html: `

      <h2>
        Recuperar contraseña
      </h2>

      <a href="${link}">
        Restablecer contraseña
      </a>
    `
  });
};