import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/employeeService";
import { useNavigate } from "react-router-dom";
import "./EmployeeList.css";

function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    const navigate = useNavigate();

    // Logout
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    // Load employees when page opens
    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        try {
            const response = await getEmployees();
            setEmployees(response.data);
        } catch (error) {
            console.error("Error loading employees:", error);
        }
    };

    // Edit employee
    const handleEdit = (id) => {
        navigate(`/edit-employee/${id}`);
    };

    // Delete employee
    const handleDelete = async (id) => {

        const confirmed = window.confirm(
            "Are you sure you want to delete this employee?"
        );

        if (!confirmed) {
            return;
        }

        try {

            await deleteEmployee(id);

            setEmployees((prevEmployees) =>
                prevEmployees.filter((emp) => emp.id !== id)
            );

            alert("Employee deleted successfully");

        } catch (error) {

            console.error("Error deleting employee:", error);

            alert("Failed to delete employee");
        }
    };

    return (
        <div className="employee-page">

            {/* Header */}
            <div className="employee-header">

                <div>
                    <h1>Employee Management</h1>
                    <p>Manage your employees and their information</p>
                </div>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>


            {/* Dashboard Card */}
            <div className="employee-card">

                {/* Card Header */}
                <div className="card-header">

                    <div>
                        <h2>Employees</h2>
                        <span className="employee-count">
                            {employees.length} employee
                            {employees.length !== 1 ? "s" : ""}
                        </span>
                    </div>

                    <button
                        className="add-btn"
                        onClick={() => navigate("/add-employee")}
                    >
                        + Add Employee
                    </button>

                </div>


                {/* Employee Table */}
                <div className="table-container">

                    <table className="employee-table">

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Department</th>
                                <th>Salary</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {employees.length === 0 ? (

                                <tr>
                                    <td
                                        colSpan="6"
                                        className="no-employees"
                                    >
                                        No employees found
                                    </td>
                                </tr>

                            ) : (

                                employees.map((emp) => (

                                    <tr key={emp.id}>

                                        <td>
                                            <span className="employee-id">
                                                #{emp.id}
                                            </span>
                                        </td>

                                        <td>
                                            <div className="employee-name">
                                                <div className="avatar">
                                                    {emp.name
                                                        ? emp.name.charAt(0).toUpperCase()
                                                        : "?"}
                                                </div>

                                                <span>{emp.name}</span>
                                            </div>
                                        </td>

                                        <td>{emp.email}</td>

                                        <td>
                                            <span className="department">
                                                {emp.department}
                                            </span>
                                        </td>

                                        <td>
                                            <span className="salary">
                                                ₹{emp.salary}
                                            </span>
                                        </td>

                                        <td>

                                            <div className="action-buttons">

                                                <button
                                                    className="edit-btn"
                                                    onClick={() =>
                                                        handleEdit(emp.id)
                                                    }
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="delete-btn"
                                                    onClick={() =>
                                                        handleDelete(emp.id)
                                                    }
                                                >
                                                    Delete
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default EmployeeList;