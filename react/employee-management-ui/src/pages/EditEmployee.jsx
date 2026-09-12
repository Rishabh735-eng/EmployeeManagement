import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getEmployeeById,
    updateEmployee
} from "../services/employeeService";

function EditEmployee() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        department: "",
        salary: ""
    });

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        try {
            const response = await getEmployeeById(id);
            setEmployee(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await updateEmployee(id, employee);

            alert("Employee Updated Successfully");

            navigate("/employees");

        } catch (error) {

            console.error(error);

            alert("Failed to Update Employee");
        }
    };

    return (
        <div style={{ padding: "20px" }}>

            <h2>Edit Employee</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="email"
                    name="email"
                    value={employee.email}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="department"
                    value={employee.department}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="salary"
                    value={employee.salary}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Update Employee
                </button>

            </form>

        </div>
    );
}

export default EditEmployee;