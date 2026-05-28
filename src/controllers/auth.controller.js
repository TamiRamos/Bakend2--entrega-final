import UserModel
from "../dao/models/user.model.js";

import jwt from "jsonwebtoken";

import { generateToken }
from "../utils/jwt.js";

import { recoverPassword }
from "../services/auth.service.js";

import {
  createHash,
  isValidPassword
} from "../utils/bcrypt.js";



export const register = async (
  req,
  res
) => {

  const {
    first_name,
    last_name,
    email,
    password
  } = req.body;

  const hashedPassword =
    await createHash(password);

  const user =
    await UserModel.create({

      first_name,
      last_name,
      email,

      password: hashedPassword
    });

  res.json({

    message: "Usuario creado",

    user
  });
};




export const login = async (
  req,
  res
) => {

  const { email, password } =
    req.body;

  const user =
    await UserModel.findOne({
      email
    });

  if (!user) {

    return res.status(404).json({

      error:
        "Usuario no encontrado"
    });
  }

  const validPassword =
    await isValidPassword(
      password,
      user.password
    );

  if (!validPassword) {

    return res.status(401).json({

      error:
        "Contraseña incorrecta"
    });
  }

  const token = generateToken({

    id: user._id,

    email: user.email,

    role: user.role
  });

  res.json({
    token
  });
};




export const forgotPassword =
async (req, res) => {

  const { email } = req.body;

  await recoverPassword(email);

  res.json({

    message:
      "Correo de recuperación enviado"
  });
};




export const resetPassword =
async (req, res) => {

  const { token } = req.params;

  const { newPassword } =
    req.body;

  try {

    const decoded =
      jwt.verify(
        token,
        process.env.JWT_SECRET
      );

    const user =
      await UserModel.findOne({

        email:
          decoded.email
      });

    const samePassword =
      await isValidPassword(
        newPassword,
        user.password
      );

    if (samePassword) {

      return res.status(400).json({

        error:
"NO puede usar la misma contraseña"
      });
    }

    user.password =
      await createHash(newPassword);

    await user.save();

    res.json({

      message:
        "Contraseña actualizada"
    });

  } catch (error) {

    res.status(400).json({

      error:
        "Token expirado"
    });
  }
};