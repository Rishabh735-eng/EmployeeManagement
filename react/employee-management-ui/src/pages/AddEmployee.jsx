import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../services/employeeService";
import "./AddEmployee.css";

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
        <div className="add-employee-page">

            <div className="add-employee-card">

                {/* Header */}
                <div className="add-employee-header">

                    <div>
                        <h1>Add Employee</h1>

                        <p>
                            Enter employee details below
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
                            className="save-btn"
                        >
                            Save Employee
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default AddEmployee;