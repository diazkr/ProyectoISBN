import { UserModel } from "../config/data-source";
import { IuserDto } from "../dto/userDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import {createCredential} from "../services/credentialService"



export const getAllUsers = async (): Promise <User[]>=>{
    const allUser= await UserModel.find({
        relations:{
            appointments: true
        }
    }); //Llamado a la base de datos
    return allUser;
}

export const getUserById = async (id: number): Promise <User>=>{
    const foundUser = await UserModel.findOne({
        where: { id },
        relations: ['appointments']
    });

    if(foundUser){
        return foundUser;
    }else {
        throw new Error("No se encontró usuario con ese id");
    }
}

export const createUser = async (userInput: IuserDto)=>{
    const newCredential: Credential = await createCredential({username: userInput.username, password: userInput.password});
   
    
    const newUser: User = new User(); 
        (newUser.name= userInput.name),
        (newUser.email= userInput.email),
        (newUser.birthdate= userInput.birthdate),
        (newUser.nDni= userInput.nDni), 
        (newUser.credential = newCredential)

    const userCreate = await UserModel.create(newUser)
    const result = await UserModel.save(userCreate)



    return result;
}

