import { CredentialModel, UserModel } from "../config/data-source";


//Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.

export const createCredential = async (credential: {username: string, password:string}) =>{

    const newCredential=  {
        username: credential.username, 
        password:credential.password
    }

    const credentialCreate = await CredentialModel.create(newCredential)
    await CredentialModel.save(credentialCreate)

    return credentialCreate;
}

export const verifyCredential = async (credential: {user: string, password:string}) =>{
    const foundCredential = await CredentialModel.findOne({ where: { username: credential.user } });

        if (foundCredential && foundCredential.password === credential.password) {
            const user = await UserModel.findOne({ where: { credential: foundCredential } });
            
            const response = {login: true, user: user}
            return response;
        } else {
            throw new Error("Credenciales incorrectas");
        }
}