import React from 'react'
import mockEmployees from '../../../Mocks/Employees/Employees.mock'

function AllEmployees() {
  return (
    <div className="overflow-x-auto py-10 mt-1 pt-24 mb-52">
      <h1 className="mb-14 text-gray-600 text-center text-4xl font-light">
        Colaboradores
      </h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">CPF</th>
            <th className="px-4 py-2">Telefone</th>
            <th className="px-4 py-2">Cargo</th>
            <th className="px-4 py-2">Salário</th>
            <th className="px-4 py-2">Data de início</th>
            <th className="px-4 py-2">Benefícios</th>
            <th className="px-4 py-2">Endereço</th>
          </tr>
        </thead>
        <tbody>
          {mockEmployees.map((employee, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="border px-4 py-2">{employee.name}</td>
              <td className="border text-center first-line:px-4 py-2">{employee.cpf}</td>
              <td className="border text-center px-4 py-2">{employee.cel}</td>
              <td className="border text-center px-4 py-2">{employee.office}</td>
              <td className="border text-center file:px-4 py-2">{employee.wage}</td>
              <td className="border text-center px-4 py-2">{employee.startDate}</td>
              <td className="border text-center px-4 py-2">{employee.benefits}</td>
              <td className="border text-center px-4 py-2">{employee.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AllEmployees;
