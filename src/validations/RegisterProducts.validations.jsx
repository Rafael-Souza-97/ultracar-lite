import React from 'react'

export function validateProduct(productRegister) {
  if (
    productRegister.title === "" ||
    productRegister.brand === "" ||
    productRegister.qtde === "" ||
    productRegister.serial === "" ||
    productRegister.warehouse === ""
  ) {
    return "Preencha todos os campos corretamente.";
  }

  if(productRegister.title.length <= 3) {
    return "O nome precisa ter pelo menos 4 caracteres.";
  }

  if (parseFloat(productRegister.price.replace(',', '.')) < 1) {
    return "O preço deve ser maior que R$ 1,00.";
  }

  if(productRegister.brand.length <= 2) {
    return "A marca precisa ter pelo menos 3 caracteres.";
  }

  if(productRegister.qtde < 1) {
    return "A quantidade precisa ser maior do que 0.";
  }

  if(productRegister.serial.length < 4) {
    return "O número de série do produto precisa ter pelo menos 5 caracteres.";
  }

  if(productRegister.warehouse.length <= 3) {
    return "O local de estoque precisa ter pelo menos 4 caracteres.";
  }

  return "";
}

export default validateProduct;
