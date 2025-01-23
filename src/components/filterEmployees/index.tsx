import React from 'react'
import { Employee } from '../sortEmployees'


export const FilterEmployees = (
    employees: Employee[],
    searchTermLower: string
) => employees.filter(
    (employee) => 
        employee.id.toLocaleLowerCase().includes(searchTermLower) || 
        employee.profile.toLocaleLowerCase().includes(searchTermLower) || 
        employee.email.toLocaleLowerCase().includes(searchTermLower) || 
        employee.role.toLocaleLowerCase().includes(searchTermLower) ||
        employee.status.toLocaleLowerCase().includes(searchTermLower)  
)