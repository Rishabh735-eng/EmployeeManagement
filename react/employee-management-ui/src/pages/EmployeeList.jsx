import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/employeeService";
import { useNavigate } from "react-router-dom";

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

            // Remove deleted employee from the list
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
        <div style={{ padding: "20px" }}>

            <h2>Employee Management</h2>

            {/* Add Employee Button */}
            <button onClick={() => navigate("/add-employee")}>
                Add Employee
            </button>

            &nbsp;&nbsp;

            {/* Logout Button */}
            <button onClick={logout}>
                Logout
            </button>

            <br />
            <br />

            <table border="1" cellPadding="10">

                <thead>
                    <tr>
                        <th>Id</th>
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
                            <td colSpan="6">
                                No employees found
                            </td>
                        </tr>

                    ) : (

                        employees.map((emp) => (

                            <tr key={emp.id}>

                                <td>{emp.id}</td>

                                <td>{emp.name}</td>

                                <td>{emp.email}</td>

                                <td>{emp.department}</td>

                                <td>{emp.salary}</td>

                                <td>

                                    {/* Edit Button */}
                                    <button
                                        onClick={() => handleEdit(emp.id)}
                                    >
                                        Edit
                                    </button>

                                    &nbsp;&nbsp;

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleDelete(emp.id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>
    );
}

export default EmployeeList;
