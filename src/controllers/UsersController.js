const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");

const knex = require("../database/knex");
const { response } = require("express");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    try {
      const userExists = await knex("users").where({ email }).first()
  
      if (userExists) {
        throw new AppError("Este email já está em uso!");
      }
  
      const hashedPassword = await hash(password, 8);
  
      await knex("users").insert({
        name,
        email,
        password: hashedPassword,
      })
  
      return response.status(201).json({});
      
    } catch (error) {
      console.log(error)
    }

  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const user_id = request.user.id

    const user = await knex("users").where({ id: user_id }).first()


    if(!user) {
      throw new AppError("User não encontrado!")
    }

    const userWithUpdatedEmail = await knex("users").where({ email }).first()


    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user_id){
      throw new AppError("Este email ja esta em uso")
    }
    

    if( password && !old_password) {
      throw new AppError("Digite a senha antiga também!")
    }

    if ( password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if(!checkOldPassword) {
        throw new AppError("Senha antiga não confere")
      }

      user.password = await hash(password, 8)
    }

    await knex("users").update({
      name: name ?? user.name,
      email: email ?? user.email,
      password: user.password,
    }).where({ id: user_id });

    return response.json({})
  }
}

module.exports = UsersController;
