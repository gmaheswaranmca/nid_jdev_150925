import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const [loginCustomer, setLoginCustomer] = useState({email: '', password:''});
    const navigate = useNavigate();
    const handleLogin = async () => {
        const baseUrl = 'http://localhost:8081';
        const response = await axios.post(`${baseUrl}/admin/login`,{...loginCustomer});
        localStorage.setItem("token", response.data)
        alert('Welcome to app. You have logged in successfully.');
        navigate('/admin');
    };

    useEffect(()=>{
        if(localStorage.getItem("token") != null) {
            navigate("/admin");
        }        
    },[]);
    return (
        <>
            <h3>Login</h3>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Username (email)</label>
                        <input type="text" className="form-control" id="email" 
                         value={loginCustomer.email} onChange={(event) => { setLoginCustomer({...loginCustomer, email:event.target.value}); } } 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" 
                        value={loginCustomer.password} onChange={(event) => { setLoginCustomer({...loginCustomer, password:event.target.value}); } }
                        />
                    </div>
                    

                    <button type="button" className="btn btn-primary"
                        onClick={handleLogin}>Login</button>
                </form>
            </div>
        </>
    )
}