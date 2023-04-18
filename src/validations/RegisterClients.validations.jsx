import React from 'react'

export function validateClient(clientRegister) {
  if(
    clientRegister.name === "" ||
    clientRegister.email === "" ||
    // clientRegister.cel === "" ||
    clientRegister.address === "" ||
    clientRegister.neighbor === "" ||
    clientRegister.car === "" ||
    clientRegister.plate === ""
  ) {
    return "Preencha todos os campos corretamente.";
  }

  if(clientRegister.name.length <= 3) {
    return "O nome precisa ter pelo menos 4 caracteres.";
  }

  if(clientRegister.email.length <= 2) {
    return "A marca precisa ter pelo menos 3 caracteres.";
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(clientRegister.email)) {
    return "O email precisa ser válido.";
  }

  if(clientRegister.cpf.length !== 14) {
    return "O CPF deve ter 11 caracteres.";
  }

  if(clientRegister.cel.length !== 15) {
    return "O telefone deve ter 15 números.";
  }

  if(clientRegister.address.length < 5) {
    return "O número de série do produto precisa ter pelo menos 5 caracteres.";
  }

  if(clientRegister.neighbor.length <= 3) {
    return "O local de estoque precisa ter pelo menos 4 caracteres.";
  }

  if(clientRegister.car.length <= 1) {
    return "O modelo do carro precisa ter pelo menos 2 caracteres.";
  }

  if(clientRegister.plate.length <= 6) {
    return "A placa do carro precisa ter pelo menos 7 caracteres.";
  }

  return "";
}

export default validateClient;
