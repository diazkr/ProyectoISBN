import { UserModel } from "../config/data-source";
import { IuserDto } from "../dto/userDto";
import { User } from "../entities/User";



export const getAllUsers = async (): Promise <User[]>=>{
    const allUser= await UserModel.find(); 
    return allUser;
}

export const getUserById = async (id: number): Promise <User>=>{
    const foundUser = await UserModel.findOne({
        where: { id }
    });

    if(foundUser){
        return foundUser;
    }else {
        throw new Error("No se encontró usuario con ese id");
    }
}

export const createUser = async (userInput: IuserDto)=>{
    
    const newUser: User = new User(); 
        (newUser.name= userInput.name),
        (newUser.email= userInput.email),
        (newUser.birthdate= userInput.birthdate),
        (newUser.nDni= userInput.nDni)

    const userCreate = await UserModel.create(newUser)
    const result = await UserModel.save(userCreate)



    return result;
}

