export const srcDoctorImage = (especialist)=>{

    if(especialist === "Cardiología"){
        return("src/assets/doctors/doctors-1.jpg")
    }
    if(especialist === "Neurología"){

        return("src/assets/doctors/doctors-2.jpg")
        
    }
    if(especialist === "Hepatología"){

        return("src/assets/doctors/doctors-3.jpg")
        
    }
    if(especialist === "Pediatría"){

        return("src/assets/doctors/doctors-4.jpg")
        
    }
    else{
        "https://i.pinimg.com/564x/6c/6e/d7/6c6ed7f4011b7f926b3f1505475aba16.jpg"
    }
}