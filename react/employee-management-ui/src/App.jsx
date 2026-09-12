import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";
import PrivateRoute from "./components/PrivateRoute";
import EditEmployee from "./pages/EditEmployee";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Login Page */}
                <Route
                    path="/"
                    element={<Login />}
                />

                {/* Employee List */}
                <Route
                    path="/employees"
                    element={
                        <PrivateRoute>
                            <EmployeeList />
                        </PrivateRoute>
                    }
                />

                {/* Add Employee */}
                <Route
                    path="/add-employee"
                    element={
                        <PrivateRoute>
                            <AddEmployee />
                        </PrivateRoute>
                    }
                />

                {/* Edit Employee */}
                <Route
                    path="/edit-employee/:id"
                    element={
                        <PrivateRoute>
                            <EditEmployee />
                        </PrivateRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;