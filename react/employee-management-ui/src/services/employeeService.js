import api from "../api/api";

export const getEmployees = () => {
    return api.get("/api/employees");
};

export const addEmployee = (employee) => {
    return api.post("/api/employees", employee);
};

export const getEmployeeById = (id) => {
    return api.get(`/api/employees/${id}`);
};

export const updateEmployee = (id, employee) => {
    return api.put(`/api/employees/${id}`, employee);
};

export const deleteEmployee = (id) => {
    return api.delete(`/api/employees/${id}`);
};