import React, { useState } from 'react';
import './components/styles.css';
import Order from './components/Order';
import { Link, useNavigate } from 'react-router-dom'; 
import { useEffect } from 'react';
import axios from 'axios';
function ArchiveOrders(props) {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const navigate = useNavigate();
  const handleCreateOrder = () => {
    navigate('/createdOrder');
  };
  const handleLogout = async () => {
        
    // Якщо POST-запит виконано успішно, видаляємо кукіс
    localStorage.removeItem('email');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // Якщо є додаткова логіка для виходу, додайте її тут

    // Перенаправлення користувача на головну сторінку або іншу, де потрібно
    navigate('/');
};
const [orders, setOrders]=useState('');
  useEffect(() => {
    axios.get("https://f5a6-46-219-228-232.ngrok-free.app/api/v1/orders/specified/?state=PD",{
      withCredentials: true,
      baseURL: URL,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      
    })
    .then(response => {
      setOrders(response.data.results)
      console.log('Профіль користувача:', response.data.results);

    })
    .catch(error => {
      console.error('Помилка при отриманні профілю користувача:', error);
    });
  }, []);
  const states = {NW: 'Новий',
        REG: 'Зареєстрований',
        APPR: 'Затверджений',
        SNT: 'Надісланий',
        DLV: 'Доставлений',
        PD: 'Оплачений',
        CNL: 'Скасований'}
  return (
      <div style={{justifyContent:"space-around", width:"100%"}}>
        <div style={{justifyContent:"space-around", width:"100%"}}>
          <div className="row nav-logout" style={{ display: 'flex', flexDirection: 'row'} }>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
              <div className="row"  style={{ display: 'flex', flexDirection: 'row', width:'100%' } }>
                <div className="col" style={{ paddingTop:'15px', width:'50%', textAlign:'left', paddingLeft:'40px'}}>
                  <img src="star1.png" alt="star" width="270" height="75" />
                </div>
              
                <div className="col" style={{padding:'25px', width:'40%'}}>
                    <input class="form-control me-2" type="text" style={{borderRadius:'12px', height:'20px'}} placeholder="пошук посилки.."/>
                    <Link to="/" className="button" style={{height:'20px'}} onClick={handleLogout}>Вихід</Link>
                </div>
                <div className='col'style={{padding:'25px', width:'10%'}}>
                    <img   src="support.png" alt="star" width="70" height="60"   style={{borderRadius:'100px'}} ></img>
                  </div>
                
              </div>
            </nav>
          </div>

          <div className="row d-flex justify-content-center" style={{ display: 'flex', flexDirection: 'row' } }>
            <div className="vertical-menu">
                <Link to="/myprofile" className="menu-item" >
                Мій профіль
              </Link>
              <Link to="/orders" className="menu-item">
                Мої замовлення
              </Link>
              <Link to="/createdOrder" className="menu-item">
                Створити посилку
              </Link>
              <Link to="/ArchiveOrders" className="menu-item" style={{background:'lightgray'}}>
            Архівовані
          </Link>
          <Link to="/DeletedOrders" className="menu-item">
            Видалені
          </Link>
            </div>
            {Array.isArray(orders) && orders.length > 0 ? (
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {orders.map(data => (
        <div
        key={data.id}
        style={{
          border: "1px solid #ddd",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          borderRadius: "5px",
          padding: "10px",
          marginBottom: "10px",
          marginTop: "15px",
          marginRight: "15px", // додано відступ для кращого розташування блоків
          width: "450px", // ширина блока
        }}
      >
          <p><strong>Замовлення було створене: </strong><br></br><br></br>{data.created_at}</p>
          <p><strong>Дата видачі: </strong>{data.grant_date}</p>
          <p><strong>Статус замовлення:</strong> {states[data.state]}</p>
        </div>
      ))}
    </div>
    ) : (
      <p>Немає замовлень</p>
    )}
          </div>
        </div>
      </div>
  );
}

export default ArchiveOrders;
