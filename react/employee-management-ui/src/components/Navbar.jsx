function Navbar() {

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <div>
            <h2>Employee Management System</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Navbar;