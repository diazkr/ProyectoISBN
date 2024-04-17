export const validate = (input) => {
    const errors = {};

    ///Valicación del email
    const regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(input.email && !regExEmail.test(input.email)){
        errors.email = "El email no es valido"
    }


    //Validación de contraseña
    const regExPassword = /^(?=.*\d).{6,}$/;
    if(input.password && !regExPassword.test(input.password)) {
        errors.password = "Debe tener al menos 6 caracteres con un número"
    }

    //Validación de nDni
    if (input.nDni && !/^\d{5,}$/.test(input.nDni)) {
        errors.nDni = "Debe ser un número de al menos 5 caracteres";
    }

    const regExdate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
   

    //Validación de fecha
    if (input.birthdate && !regExdate.test(input.birthdate)) {
        errors.birthdate = "Debe tener el formato YYYY-MM-DD";
    }

    // if (input.date && !regExdate.test(input.date)) {
    //     errors.date = "Ingrese una fecha válida";
    // }

    const regexName  = /^[a-zA-Z\s]{2,}$/;
    if (input.name && !regexName.test(input.name)) {
        errors.name= "Ingrese un nombre valido";
    }

    if (input.description && !regexName.test(input.description)) {
        errors.description= "Ingrese una descripción valida";
    }

    if (input.username && !regexName.test(input.username)) {
        errors.username= "Ingrese un nombre de usuario valido";
    }

    const regexTime = /^(09|1[0-6]):[0-5][0-9]$/;

    if (input.time && !regexTime.test(input.time)) {
        errors.time = "Horario de citas: 9:00 a 16:30";
    }



    return errors;
}

export const ValidateFullData=(objeto)=>{
    for (let key in objeto) {
        if (!objeto[key]) {
          return false;
        }
      }
      return true;
}