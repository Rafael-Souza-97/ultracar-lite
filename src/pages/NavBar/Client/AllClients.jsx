import React from 'react';
import mockClients from '../../../Mocks/Clients/Clients.mock'

function AllClients() {
  return (
    <div className="overflow-x-auto py-10 mt-1 pt-24 mb-36">
      <h1 className="mb-14 text-gray-600 text-center text-4xl font-light">
        Clientes
      </h1>

    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Nome</th>
          <th className="px-4 py-2">CPF</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Telefone</th>
          <th className="px-4 py-2">Endereço</th>
          <th className="px-4 py-2">Bairro</th>
          <th className="px-4 py-2">Carro</th>
          <th className="px-4 py-2">Placa</th>
        </tr>
      </thead>

      <tbody>
        {mockClients.map((client, index) => (
          <tr key={index} className={ index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
            <td className="border px-4 py-2">{ client.name }</td>
            <td className="border text-center px-4 py-2">{client.cpf}</td>
            <td className="border text-center px-4 py-2">{client.email}</td>
            <td className="border text-center px-4 py-2">{client.cel}</td>
            <td className="border text-center px-4 py-2">{client.address}</td>
            <td className="border text-center px-4 py-2">{client.neighbor}</td>
            <td className="border text-center px-4 py-2">{client.car}</td>
            <td className="border text-center px-4 py-2">{client.plate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default AllClients;
