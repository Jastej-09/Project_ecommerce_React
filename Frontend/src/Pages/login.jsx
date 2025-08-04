import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate,Link } from 'react-router-dom';
const login = () => {
  
    const [username, setuser] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    
    const navigate = useNavigate();


     const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        axios.post("https://project-ecommerce-react.onrender.com/users/login", formData)
            .then((res) => {
                console.log(res);
                navigate("/store")
            })
            .catch((err) => {
                console.log(err);
            });
    };
  
  
    return (
    <div>
        <div className="top">
        <div className="left">
          {/* <img src="https://ik.imagekit.io/jastej/ganezone.png?updatedAt=1754135487000"  alt="Gamezone"  onClick={goToHome}  /> */}
        {/* <Link to='/start' className='link' >Gamezone</Link> */}
        <h2 className="link" onClick={()=>{navigate('/')}}>Gamezone</h2>
        </div>
        <div className="right">
        <div className="store"><h2 className="link" onClick={()=>{navigate('/store')}}>Store</h2></div>
        <div className="About"><h2 className="link" onClick={()=>{navigate('/About')}}>About Us</h2></div>
        <div className="login"><h2 className="link" onClick={()=>{navigate('/users')}}>Login</h2></div>
        </div>
        </div>

      <div className="body">
        
            <div className="page">
            <form onSubmit={handleSubmit}>
                <div className="formgroupp">
                    <label htmlFor="user">Username</label>
                <input 
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setuser(e.target.value)}
                    name="username"
                    id="username"
                    />
                </div>
                    <div className="formgroupp">
                        <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        name="email"
                        id="email"
                    />
                    </div>
                    <div className="formgroupp">
                        <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        name="password"
                        id="password"
                        
                     />
                     <br /><br />
                    </div>
                     <button type="submit">Login</button>
                     <div className="extra-buttons">
                    <button className="secondary-btn" onClick={() => navigate('/users2')}>New User</button>
                    <button className="secondary-btn" onClick={() => navigate('/admin/login')}>Admin Login</button>
                    </div>

                     
            </form>
        </div>
        
      </div>
    </div>
  )
}

export default login
