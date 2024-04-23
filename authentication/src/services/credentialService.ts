import { CredentialModel } from "../config/data-source";
import { IcredentialDto } from "../dto/IcredentialDto";


export const createCredential = async (credential: IcredentialDto) =>{

    const newCredential=  {
        username: credential.username, 
        password:credential.password,
        userId: credential.userId
    }

    const credentialCreate = await CredentialModel.create(newCredential)
    await CredentialModel.save(credentialCreate)
    return credentialCreate;
}

export const verifyCredential = async (credential: {username: string, password:string}) =>{

    const {username, password} = credential;
    const foundCredential = await CredentialModel.findOneBy({username});

        if (foundCredential && foundCredential.password === password && foundCredential.username=== username) {
            const response = {login: true, idUser: foundCredential.id}
            return response;
        } else {
            throw new Error("Credenciales incorrectas");
        }
}
