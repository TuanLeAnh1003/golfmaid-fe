import React, {useState, useEffect} from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import logo from '../../Assets/Images/lo-go.png';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import { Link } from "react-router-dom";
import { useStore } from "../../Store/useStore";
import autoAvatar from '../../Assets/Images/avatarclone.jpg';
import userApi from '../../Apis/UserApi'; 

function Header({ parentSearch }) {
  const [isSignInShowed, setIsSignInShowed] = useState(false);
  const [isSignUpShowed, setIsSignUpShowed] = useState(false);
  const [isAdminSignInShowed, setIsAdminSignInShowed] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleShowSignIn = () => {
    setIsSignInShowed(true);
  }

  const childShowSignIn1 = (a) => {
    setIsSignInShowed(a);
  }

  const childShowSignUp2 = (a) => {
    setIsSignUpShowed(a);
  }

  const childShowSignUp1 = (a) => {
    if(a) {
      setIsSignUpShowed(a);
      setIsSignInShowed(false);
    }
  }

  const childShowSignIn2 = (a) => {
    if(a) {
      setIsSignInShowed(a);
      setIsSignUpShowed(false);
    }
  }

  const handleShowAdminSignIn = () => {
    setIsAdminSignInShowed(true);
  }

  const childShowAdmSignIn = (a) => {
    setIsAdminSignInShowed(a);
  }

  const handleClickSearch = () => {
    parentSearch(searchInput)
  }

  const [state, dispatch, isAuthen] = useStore();
  const [user, setUser] = useState({})

  useEffect(() => {
    userApi.getMe({userId: localStorage.getItem("userid")})
    .then(data => setUser({...data}));
  }, [])

  return (
    <div className="header">
      <div className="header-first">
        <div className="header-first__search">
          <input type="text" placeholder="Tìm người giúp việc..." onChange={e => setSearchInput(e.target.value)}/>
          {
            searchInput && (
              <Link to='/search'>
                <FontAwesomeIcon icon={solid('magnifying-glass')} onClick={handleClickSearch}/>
              </Link>
            )
          }
        </div>

        <div className="header-first__more">
          <div className="header-first__more-item header-first__more-order">
            <FontAwesomeIcon icon={solid('box')} />
            <Link to="/search-contract">Tra cứu hợp đồng</Link>
          </div>

          {isAuthen() 
            ?<Link to={`account/${user.userId}`} className="header-first__more-item header-first__more-search user-button">
              <p>Hi, {user.lastName} {user.firstName}</p>
              <img className="user-avatar" src={user.image ? user.image : autoAvatar} />
            </Link>
            :<div className="header-first__more-item header-first__more-search" onClick={handleShowSignIn}>
              <FontAwesomeIcon icon={solid('user')} />
              <span>Đăng nhập</span>
            </div>
          }
          
        </div>
      </div>

      <div className="header-second">
        <Link to="/" className="header-second__logo">
          <img src={logo} alt="watch" />
        </Link>

        <ul className="header-second__nav">
          <Link to="">GIỚI THIỆU</Link>
          <Link to="/househelper/list">NGƯỜI GIÚP VIỆC</Link>
          <Link to="/househelper/find">NGƯỜI THUÊ</Link>
          <Link to="/contact">LIÊN HỆ</Link>
          <Link to="/employee-form">TÌM VIỆC</Link>
          <Link to="/employer-form">TÌM GIÚP VIỆC</Link>

        </ul>
      </div>

      {isSignInShowed && <SignIn handleShowSignIn1={childShowSignIn1} handleShowSignUp1={childShowSignUp1}/>} 
      {isSignUpShowed && <SignUp handleShowSignIn2={childShowSignIn2} handleShowSignUp2={childShowSignUp2}/>}
    </div>
  )
}

export default Header