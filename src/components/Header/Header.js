// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import recipesHubLogo from '../../assets/recipes-hub-logo.png'
// import './Header.css'
// import { GiHamburgerMenu } from 'react-icons/gi'
// import { MdClose } from 'react-icons/md'
// import { useDispatch, useSelector } from 'react-redux'
// import { setHamburgerClicked, setIsAuth } from '../../redux/recipeSlice'
// import { signOut } from 'firebase/auth'
// import { auth } from '../../firebase-config'
// import { useNavigate } from 'react-router-dom'

// const Header = () => {
//   const { hamburgerClicked, username, isAuth, userInfo } = useSelector(
//     (state) => state.recipeReducer,
//   )

//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const handleHamburgerClick = () => {
//     dispatch(setHamburgerClicked(!hamburgerClicked))
//   }

//   const signUserOut = () => {
//     signOut(auth).then(() => {
//       localStorage.clear()
//       setIsAuth(false)
//       navigate('/login')
//     })
//   }

//   return (
//     <div className="header bg-dark d-flex align-items-center justify-content-between  w-100 px-2 py-2">
//       <Link to="/">
//         <img
//           className="recipe-logo"
//           src={recipesHubLogo}
//           alt="recipes-Hub-Logo"
//         />
//       </Link>

//       {!hamburgerClicked && (
//         <GiHamburgerMenu
//           onClick={handleHamburgerClick}
//           className="hamburger-icon"
//         />
//       )}

//       {hamburgerClicked && (
//         <MdClose
//           onClick={handleHamburgerClick}
//           className="close-icon d-lg-none"
//         />
//       )}

//       {hamburgerClicked && (
//         <div className="list-menu">
//           <NavLink
//             className="nav-link"
//             onClick={() => {
//               dispatch(setHamburgerClicked(false))
//             }}
//             to="/login"
//           >
//             <span className="login">Login</span>
//           </NavLink>
//           <NavLink
//             onClick={() => {
//               dispatch(setHamburgerClicked(false))
//             }}
//             className="nav-link"
//             to="/"
//           >
//             <span className="home">Home</span>
//           </NavLink>

//           <NavLink
//             onClick={() => {
//               dispatch(setHamburgerClicked(false))
//             }}
//             className="nav-link"
//             to="/about"
//           >
//             <span className="about">About</span>
//           </NavLink>

//           <NavLink className="nav-link nav-link-bottom" to="/contact">
//             <span className="contact">Contact</span>
//           </NavLink>
//         </div>
//       )}

//       <div className="list-menus">
//         {localStorage.getItem('auth') ? (
//           <div className="d-flex gap-2 ">
//             <span className="user">{`Logged as ${localStorage.getItem(
//               'username',
//             )}`}</span>
//             <button onClick={signUserOut} className="inline-flex logout">
//               Logout
//             </button>
//           </div>
//         ) : (
//           <NavLink className="nav-links  nav-link-login" to="/login">
//             <span className="login">Login</span>
//           </NavLink>
//         )}

//         <NavLink className="nav-links  nav-link-home" to="/">
//           <span className="home">Home</span>
//         </NavLink>

//         <NavLink className="nav-links  nav-link-about" to="/about">
//           <span className="about">About</span>
//         </NavLink>

//         <NavLink className="nav-links  nav-link-contact" to="/contact">
//           <span className="contact">Contact</span>
//         </NavLink>
//       </div>
//     </div>
//   )
// }

// export default Header
