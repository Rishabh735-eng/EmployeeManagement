import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getEmployeeById,
    updateEmployee
} from "../services/employeeService";

import "./EditEmployee.css";

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
        <div className="edit-employee-page">

            <div className="edit-employee-card">

                {/* Header */}

                <div className="edit-employee-header">

                    <div>

                        <h1>Edit Employee</h1>

                        <p>
                            Update employee information below
                        </p>

                    </div>

                </div>


                {/* Form */}

                <form
                    className="employee-form"
                    onSubmit={handleSubmit}
                >

                    {/* Name */}

                    <div className="form-group">

                        <label>Employee Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter employee name"
                            value={employee.name}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* Email */}

                    <div className="form-group">

                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            value={employee.email}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* Department */}

                    <div className="form-group">

                        <label>Department</label>

                        <input
                            type="text"
                            name="department"
                            placeholder="Enter department"
                            value={employee.department}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* Salary */}

                    <div className="form-group">

                        <label>Salary</label>

                        <input
                            type="number"
                            name="salary"
                            placeholder="Enter salary"
                            value={employee.salary}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* Buttons */}

                    <div className="form-buttons">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={() => navigate("/employees")}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="update-btn"
                        >
                            Update Employee
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default EditEmployee;