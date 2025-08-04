import React from 'react';
import Navbar from "../components/Navbar";
import { useNavigate, Link } from 'react-router-dom';
import "./Start.css";

const Start = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <div className="topp">
        <div className="leftt">
          {/* <img src="https://ik.imagekit.io/jastej/ganezone.png?updatedAt=1754135487000"  alt="Gamezone"  onClick={goToHome}  /> */}
        {/* <Link to='/start' className='link' >Gamezone</Link> */}
        <h2 className="linkk" onClick={()=>{navigate('/')}}>Gamezone</h2>
        </div>
        <div className="rightt">
        <div className="storee"><h2 className="linkk" onClick={()=>{navigate('/store')}}>Store</h2></div>
        <div className="Aboutt"><h2 className="linkk" onClick={()=>{navigate('/About')}}>About Us</h2></div>
        <div className="loginn"><h2 className="linkk" onClick={()=>{navigate('/users')}}>Login</h2></div>

        </div>
      </div>
      <div className="bodyy">
        <div className="hero-text">"Rising beneath the wave lies a legend."<br />
          The tides bring stories — of warriors, of worlds, of epic quests. <br />
          Welcome to GameZone, where each title is a journey,
          and every player, a wanderer of fate.
          Choose your legend. Begin the tide.
          <button className="explore-btn" onClick={() => navigate('/store')}>
             Begin Your Journey
          </button>
          </div>
          
      </div>
    </div>
  );
};



export default Start;
