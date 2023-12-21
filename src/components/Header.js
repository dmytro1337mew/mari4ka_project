import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import Login from '../Login';


function Header() {
  const navigate=useNavigate();
  const handleLogout = async () => {
        
    
    localStorage.removeItem('email');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    

   
    navigate('/');
};
  return (
    <header className="header" >
      <div class="container-fluid mx-auto" >
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
        <div className="row"  style={{ display: 'flex', flexDirection: 'row', width:'100%' } }>
          <div className="col" style={{ paddingTop:'15px', width:'50%', textAlign:'left', paddingLeft:'40px'}}>
            <img src="star1.png" alt="star" width="290" height="90" />
          </div>
        
          <div className="col" style={{padding:'25px', width:'40%'}}>
          {localStorage.getItem('accessToken') ? (
  <>
    <Link to="/myprofile" className="button" style={{ height: '15px' }}>Кабінет</Link>
    <Link to="/" className="button" style={{ height: '15px' }} onClick={handleLogout}>Вийти</Link>
  </>
) : (
  <>
    <Link to="/login" className="button" style={{ height: '15px' }}>Вхід</Link>
    <Link to="/register" className="button" style={{ height: '15px' }}>Реєстрація</Link>
  </>
)}
              <input class="form-control me-2" type="text" style={{borderRadius:'12px', height:'25px'}} placeholder="пошук по сайту.."/>
          </div>
           <div className='col'style={{padding:'25px', width:'10%'}}>
              <img   src="support.png" alt="star" width="70" height="60"   style={{borderRadius:'100px'}} ></img>
            </div>
          
        </div>
      </nav>
     </div>
      
      <ul>
        <li><Link to="/about">Про компанію</Link></li>
        <li><Link to="/internationa_delivery">Міжнародна доставка</Link></li>
        <li><Link to="/departs">Відділення</Link></li>
        <li><Link to="/post">Поштомати</Link></li>
        <li><Link to="/for_delivers">Постачальникам</Link></li>
        <li><Link to="/vacancy">Вакансії</Link></li>
      </ul>
    </header>
  );
}

export default Header;
