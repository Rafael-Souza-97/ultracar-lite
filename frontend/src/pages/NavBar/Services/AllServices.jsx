import React from 'react';
import mockOS from '../../../Mocks/Services/Services.mock';

function AllServices() {
  return (
    <div className="overflow-x-auto py-10 mt-1 mb-14">
      <h1 className="mb-14 text-gray-600 text-center text-4xl font-light">
        Ordens de Serviço
      </h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Cliente</th>
            <th className="px-4 py-2">CPF</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Telefone</th>
            <th className="px-4 py-2">Endereço</th>
            <th className="px-4 py-2">Bairro</th>
            <th className="px-4 py-2">Carro</th>
            <th className="px-4 py-2">Placa</th>
            <th className="px-4 py-2">Mecânico</th>
            <th className="px-4 py-2">Serviço</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Peças</th>
            <th className="px-4 py-2">Preço</th>
            <th className="px-4 py-2">Observações</th>
          </tr>
        </thead>
        <tbody>
          {mockOS.map((os, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="border px-4 py-2">{os.name}</td>
              <td className="border text-center px-4 py-2">{os.cpf}</td>
              <td className="border text-center px-4 py-2">{os.email}</td>
              <td className="border text-center px-4 py-2">{os.cel}</td>
              <td className="border text-center px-4 py-2">{os.address}</td>
              <td className="border text-center px-4 py-2">{os.neighbor}</td>
              <td className="border text-center px-4 py-2">{os.car}</td>
              <td className="border text-center px-4 py-2">{os.plate}</td>
              <td className="border text-center px-4 py-2">{os.mechanic}</td>
              <td className="border text-center px-4 py-2">{os.service}</td>
              <td className="border text-center px-4 py-2">{os.status}</td>
              <td className="border text-center px-4 py-2">{os.parts}</td>
              <td className="border text-center px-4 py-2">{os.price}</td>
              <td className="border text-center px-4 py-2">{os.obs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllServices;
