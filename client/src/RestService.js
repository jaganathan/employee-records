function getAllEmployees() {
    const url = "/api/v1/employees";
    return fetch(url).then((res) => res.json());
}

function createNewEmployee(employee) {
    const url = "/api/v1/create/employee";
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(employee)
      }

    let fetchRes = fetch(url, options);
    return fetchRes.then(res => res.json());
}

function deleteEmployee(employeeId) {
    const url = `/api/v1/employee/${employeeId}`
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
      }

    let fetchRes = fetch(url, options);
    return fetchRes.then(res => res.json());
}

module.exports = {
    getAllEmployees: getAllEmployees,
    createNewEmployee: createNewEmployee,
    deleteEmployee: deleteEmployee
}