import React from 'react';
import recipesHubLogo from '../../assets/recipes-hub-logo.png';

const Header = () => {
	return (
		<div>
			<img src={recipesHubLogo} alt="recipes-Hub-Logo" />
			<nav></nav>
		</div>
	);
};

export default Header;
