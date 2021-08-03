interface EmployeeConfig{
    firstname: string
    lastname: string
    id: number
    age: number
    salary: number
    getBonus: boolean
}

function createEmployee(config:EmployeeConfig): {firstname: string, lastname: string, id: number, age: number, salary: number, getBonus: boolean, bonus: number} {
    let newEmployee = {firstname: 'Woratat', lastname: 'Kumklam', id: 632110352, age: 21, salary: 0, getBonus: false, bonus: 0}
    if(config.firstname){
        newEmployee.firstname = config.firstname
    }
    if(config.lastname){
        newEmployee.lastname = config.lastname
    }
    if(config.id){
        newEmployee.id = config.id
    }
    if(config.salary){
        newEmployee.salary = config.salary
    }
    if(config.age){
        newEmployee.age = config.age
    }
    if (config.getBonus == true) {
        newEmployee.bonus = (config.salary * 2.5)-config.salary;
    }else{
        newEmployee.bonus = 0
    }
    return newEmployee
}
let myEmployee = createEmployee({firstname: 'Woratat', lastname: 'Kumklam', id: 632110352, age: 21, salary: 100, getBonus: true})
console.log(myEmployee)