// describe("Prueba de la funcion callApi", () => {
//     it("Debería arrojar un error al recibir una URL inválida", async () => {
//             expect(2).toBe(2);               
//         });
//     })

const validate = require("../src/helpers/function/forms/validateForm");
  
describe('validate function', () => {
  it('Debe retornar false si toda la data es incorrecta', () => {
    
    const invalidObject = {
      email: 'mguizaunal.edu.co',
      password: '', // VACIO
      nDni: '', // VACIO
      birthdate: '1998-07-11',
      name: 'Maria Guiza',
      description: 'Neurologia',
      username: 'MariaCamila',
      time: '10:00'
    };
    expect(validate(invalidObject)).toBe(false);
  });

  it('Debe retornar true si toda la data es correcta', () => {
    const validObject = {
      email: 'mguiza@unal.edu.co',
      password: 'password123',
      nDni: '123456',
      birthdate: '1998-07-11',
      name: 'Maria Guiza',
      description: 'Neurologia',
      username: 'MariaCamila',
      time: '10:00'
    };
    // console.log("validate(invalidObject)");
    // console.log(validate(invalidObject));
    expect(validate(validObject)).toBe(true);
  });
});

