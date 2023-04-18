import React from 'react'

export function validateEmployee(employeeRegister) {
  if(
    employeeRegister.name === "" ||
    employeeRegister.office === "" ||
    employeeRegister.wage === "" ||
    employeeRegister.benefits === "" ||
    employeeRegister.address === ""
  ) {
    return "Preencha todos os campos corretamente.";
  }

  if(employeeRegister.name.length <= 3) {
    return "O nome precisa ter pelo menos 4 caracteres.";
  }

  if(employeeRegister.cpf.length !== 14) {
    return "O CPF deve ter 11 caracteres.";
  }

  if(employeeRegister.cel.length !== 15) {
    return "O telefone deve ter 15 números.";
  }

  if(employeeRegister.office.length <= 3) {
    return "O local de estoque precisa ter pelo menos 4 caracteres.";
  }

  if (parseFloat(employeeRegister.wage.replace(',', '.')) < 1) {
    return "O salário deve ser maior que R$ 1.300,00.";
  }

  if(employeeRegister.startDate.length !== 10) {
    return "A data deve estar no formato dd/mm/aaaa.";
  }

  if(employeeRegister.benefits.length <= 6) {
    return "O campo de benefícios precisa ter pelo menos 7 caracteres.";
  }

  if(employeeRegister.address.length < 5) {
    return "O número de série do produto precisa ter pelo menos 5 caracteres.";
  }

  return "";
}

export default validateEmployee;
