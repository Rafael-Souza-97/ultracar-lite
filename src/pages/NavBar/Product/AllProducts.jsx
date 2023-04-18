import React from 'react'
import mockProducts from '../../../Mocks/Products/Products.mock'

function AllProducts() {
  return (
    <div className="overflow-x-auto py-10 mt-1 mb-14">
      <h1 className="mb-14 text-gray-600 text-center text-4xl font-light">
        Produtos
      </h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Título</th>
            <th className="px-4 py-2">Marca</th>
            <th className="px-4 py-2">Preço</th>
            <th className="px-4 py-2">Quantidade</th>
            <th className="px-4 py-2">Serial</th>
            <th className="px-4 py-2">Armazém</th>
          </tr>
        </thead>
        <tbody>
          {mockProducts.map((product, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="border px-4 py-2">{product.title}</td>
              <td className="border text-center first-line:px-4 py-2">{product.brand}</td>
              <td className="border text-center px-4 py-2">{product.price}</td>
              <td className="border text-center px-4 py-2">{product.qtde}</td>
              <td className="border text-center file:px-4 py-2">{product.serial}</td>
              <td className="border text-center px-4 py-2">{product.warehouse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AllProducts