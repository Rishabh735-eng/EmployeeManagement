import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {

            const token = await login(username, password);

            localStorage.setItem("token", token);

            console.log("Login successful");
            alert("Login Successful");

            navigate("/employees");

        } catch (error) {

            console.log("Error:", error);
            console.log("Response:", error.response);

            alert("Invalid Credentials");
        }
    };

    return (
        <div className="login-page">

            <div className="login-container">

                <div className="login-header">
                    <div className="login-icon">👤</div>

                    <h2>Employee Management</h2>
                    <p>Sign in to your account</p>
                </div>

                <div className="login-form">

                    <label>Username</label>

                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button onClick={handleLogin}>
                        Login
                    </button>

                </div>

                <div className="login-footer">
                    <p>Employee Management System</p>
                </div>

            </div>

        </div>
    );
}

export default Login;