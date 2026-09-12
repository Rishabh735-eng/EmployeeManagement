import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

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
        <div style={{ padding: "50px" }}>

            <h2>Employee Management Login</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={handleLogin}>
                Login
            </button>

        </div>
    );
}

export default Login;