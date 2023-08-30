import { createSlice } from '@reduxjs/toolkit';

const recipeSlice = createSlice({
	name: 'recipe',
	initialState: {
		username: '',
		isAuth: false,
		userInfo: [],
		recipeTitle: '',
		recipeDescription: '',
		recipeImage: '',
		recipeIngredients: [],
		recipeInstructions: [],
		recipeTags: [],
		recipeId: '',
		recipeAuthor: '',
		recipeAuthorId: '',
		recipeAuthorImage: '',
		recipeAuthorEmail: '',
		recipeAuthorUsername: '',
		recipeAuthorBio: '',
		recipeAuthorLocation: '',
		recipeAuthorWebsite: '',
		recipeAuthorFacebook: '',
		recipeAuthorTwitter: '',
		recipeAuthorInstagram: '',
		recipeAuthorYoutube: '',
		recipeAuthorPinterest: '',
		recipeAuthorLinkedin: '',
		recipeAuthorGithub: '',
		recipeAuthorTwitch: '',
		recipeAuthorDiscord: '',
		recipeAuthorOther: '',
		hamburgerClicked: false,
	},

	reducers: {
		setIsAuth: (state, action) => {
			state.isAuth = action.payload;
		},
		setRecipeTitle: (state, action) => {
			state.recipeTitle = action.payload;
		},
		setRecipeDescription: (state, action) => {
			state.recipeDescription = action.payload;
		},
		setRecipeImage: (state, action) => {
			state.recipeImage = action.payload;
		},
		setRecipeIngredients: (state, action) => {
			state.recipeIngredients = action.payload;
		},
		setRecipeInstructions: (state, action) => {
			state.recipeInstructions = action.payload;
		},
		setRecipeTags: (state, action) => {
			state.recipeTags = action.payload;
		},
		setRecipeId: (state, action) => {
			state.recipeId = action.payload;
		},
		setRecipeAuthor: (state, action) => {
			state.recipeAuthor = action.payload;
		},
		setRecipeAuthorId: (state, action) => {
			state.recipeAuthorId = action.payload;
		},
		setRecipeAuthorImage: (state, action) => {
			state.recipeAuthorImage = action.payload;
		},
		setRecipeAuthorEmail: (state, action) => {
			state.recipeAuthorEmail = action.payload;
		},
		setRecipeAuthorUsername: (state, action) => {
			state.recipeAuthorUsername = action.payload;
		},
		setRecipeAuthorBio: (state, action) => {
			state.recipeAuthorBio = action.payload;
		},
		setRecipeAuthorLocation: (state, action) => {
			state.recipeAuthorLocation = action.payload;
		},
		setRecipeAuthorWebsite: (state, action) => {
			state.recipeAuthorWebsite = action.payload;
		},
		setRecipeAuthorFacebook: (state, action) => {
			state.recipeAuthorFacebook = action.payload;
		},
		setRecipeAuthorTwitter: (state, action) => {
			state.recipeAuthorTwitter = action.payload;
		},
		setRecipeAuthorInstagram: (state, action) => {
			state.recipeAuthorInstagram = action.payload;
		},
		setRecipeAuthorYoutube: (state, action) => {
			state.recipeAuthorYoutube = action.payload;
		},
		setRecipeAuthorPinterest: (state, action) => {
			state.recipeAuthorPinterest = action.payload;
		},
		setRecipeAuthorLinkedin: (state, action) => {
			state.recipeAuthorLinkedin = action.payload;
		},
		setRecipeAuthorGithub: (state, action) => {
			state.recipeAuthorGithub = action.payload;
		},
		setRecipeAuthorTwitch: (state, action) => {
			state.recipeAuthorTwitch = action.payload;
		},
		setRecipeAuthorDiscord: (state, action) => {
			state.recipeAuthorDiscord = action.payload;
		},
		setHamburgerClicked: (state, action) => {
			state.hamburgerClicked = action.payload;
		},
		setUserInfo: (state, action) => {
			state.userInfo = action.payload;
		},
		setUsername:(state, action) => {
			state.username = action.payload;
}	},
});

export const {
	setIsAuth,
	setRecipeTitle,
	setRecipeDescription,
	setRecipeImage,
	setRecipeIngredients,
	setRecipeInstructions,
	setRecipeTags,
	setRecipeId,
	setRecipeAuthor,
	setRecipeAuthorId,
	setRecipeAuthorImage,
	setRecipeAuthorEmail,
	setRecipeAuthorUsername,
	setRecipeAuthorBio,
	setRecipeAuthorLocation,
	setRecipeAuthorWebsite,
	setRecipeAuthorFacebook,
	setRecipeAuthorTwitter,
	setRecipeAuthorInstagram,
	setRecipeAuthorYoutube,
	setRecipeAuthorPinterest,
	setRecipeAuthorLinkedin,
	setRecipeAuthorGithub,
	setRecipeAuthorTwitch,
	setRecipeAuthorDiscord,
	setHamburgerClicked,
	setUserInfo,
	setUsername,
} = recipeSlice.actions;
export default recipeSlice.reducer;
