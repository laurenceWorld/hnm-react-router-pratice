import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };

  const goToLogout = () => {
    setAuthenticate(false);
    navigate('/login');
  };

  const goHome = () => {
    navigate('/');
  };

  const search = (event) => {
    if (event.key === 'Enter') {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  function openNav() {
    document.getElementById('mySidenav').style.width = '200px';
  }

  function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

  return (
    <div>
      <div id='mySidenav' className='sidenav'>
        <a href='javascript:void(0)' className='closebtn' onClick={closeNav}>
          <FontAwesomeIcon icon={faX} />
        </a>
        <ul>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </div>

      <div>
        <span className='sidenav_open' onClick={openNav}>
          <FontAwesomeIcon icon={faBars} />
        </span>
        {authenticate === false ? (
          <div className='login-button' onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
          </div>
        ) : (
          <div className='login-button' onClick={goToLogout}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그아웃</div>
          </div>
        )}
      </div>
      <div className='nav-section'>
        <img
          width={100}
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAaKiaRYNTRewPvMiE3pTI6o9LoTX1gpOtw&s'
          alt='H&M logo'
          onClick={goHome}
        />
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className='search_bar'>
          <FontAwesomeIcon icon={faSearch} className='search_icon' />
          <input
            type='text'
            placeholder='제품 검색'
            onKeyDown={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
