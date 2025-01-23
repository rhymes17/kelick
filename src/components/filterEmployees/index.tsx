import React from 'react'

type Employees = {
    id: string;
        profile: string;
        email: string;
        role: string;
        status: string;
}

export const FilterEmployees = (
    employees: Employees[],
    searchTermLower: string
) => employees.filter(
    (employee) => 
        employee.id.toLocaleLowerCase().includes(searchTermLower) || 
        employee.profile.toLocaleLowerCase().includes(searchTermLower) || 
        employee.email.toLocaleLowerCase().includes(searchTermLower) || 
        employee.role.toLocaleLowerCase().includes(searchTermLower) ||
        employee.status.toLocaleLowerCase().includes(searchTermLower)  
)