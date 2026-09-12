import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../services/employeeService";

function AddEmployee() {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        department: "",
        salary: ""
    });

    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addEmployee(employee);

            alert("Employee Added Successfully");

            navigate("/employees");

        } catch (error) {

            console.error(error);

            alert("Failed to Add Employee");
        }
    };

    return (
        <div style={{ padding: "20px" }}>

            <h2>Add Employee</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={employee.name}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={employee.email}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={employee.department}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    value={employee.salary}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button type="submit">
                    Save Employee
                </button>

            </form>

        </div>
    );
}

export default AddEmployee;