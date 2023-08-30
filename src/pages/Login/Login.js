import React, { useEffect } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth, googleAuthProvider } from '../../firebase-config'
import { setUserInfo, setIsAuth, setUsername } from '../../redux/recipeSlice'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { signInWithPopup } from 'firebase/auth'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userInfo, isAuth, username } = useSelector(
    (state) => state.recipeReducer,
  )

  const signUpWithGoogle = () => {
    try {
      signInWithPopup(auth, googleAuthProvider).then((result) => {
        localStorage.setItem('auth', true)
        const user = result.user
        const userInfo = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          isAuth: localStorage.getItem('auth'),
        }
        console.log(userInfo)
        dispatch(setUsername(userInfo.displayName.split(' ')[0]))
        localStorage.setItem('username', userInfo.displayName.split(' ')[0])
        dispatch(setUserInfo(userInfo))
        dispatch(setIsAuth(true))
        toast.success('Successfully Logged in!')
      })
    } catch (error) {
      toast(error.message)
    }
  }

  console.log(username)

  useEffect(() => {
    console.log(userInfo)
    if (localStorage.getItem('auth')) {
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [isAuth])

  return (
    <div className="login-container">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="form-container">
        <div className="left-section">
          <h1>Log In</h1>
          <form className="form form-group">
            <input
              className="form-control username"
              type="text"
              placeholder="Username"
            />
            <input
              className="password form-control"
              type="password"
              placeholder="Password"
            />
            <button className="submit-button btn btn-danger" type="submit">
              Log In
            </button>
          </form>
        </div>
        <div className="center-section">OR</div>
        <div className="right-section">
          <button
            className="submit-button-facebook btn btn-danger"
            type="submit"
          >
            Log in with Facebook
          </button>
          <button
            className="submit-button-twitter btn btn-danger"
            type="submit"
          >
            Log in with Twitter
          </button>
          <button
            className="submit-button-google btn btn-danger"
            type="submit"
            onClick={signUpWithGoogle}
          >
            Log in with Google+
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
