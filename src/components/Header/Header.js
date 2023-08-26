import React from 'react';
import { NavLink, basename } from 'react-router-dom';
import recipesHubLogo from '../../assets/recipes-hub-logo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setHamburgerClicked } from '../../redux/recipeSlice';

const Header = () => {
	const { hamburgerClicked } = useSelector(state => state.recipeReducer);

	const dispatch = useDispatch();

	const handleHamburgerClick = () => {
		dispatch(setHamburgerClicked(!hamburgerClicked));
	};

	return (
		<div className="header bg-dark d-flex align-items-center justify-content-between  w-100 px-2 py-2">
			<img
				className="recipe-logo"
				src={recipesHubLogo}
				alt="recipes-Hub-Logo"
			/>
			{!hamburgerClicked &&
				<GiHamburgerMenu
					onClick={handleHamburgerClick}
					className="hamburger-icon d-xl-none "
				/>}

			{hamburgerClicked &&
				<MdClose onClick={handleHamburgerClick} className="close-icon" />}

			{hamburgerClicked &&
				<div className="list-menu d-flex flex-column align-items-center justify-content-evenly position-absolute">
					<NavLink className="nav-link nav-link-top " to="/">
						<span className="home">Home</span>
					</NavLink>

					<NavLink className="nav-link" to="/about">
						<span className="about">About</span>
					</NavLink>

					<NavLink className="nav-link nav-link-bottom" to="/contact">
						<span className="contact">Contact</span>
					</NavLink>
				</div>}
		</div>
	);
};

export default Header;
