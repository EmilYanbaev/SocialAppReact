import style from "./Login.module.css"
import LoginForm  from './LoginForm';

let Login = (props) => {
    return (
        <div className={style.loginPage}>
            <div className={style.container}>
                <div className={style.loginPage__title}>
                    <h1>Sign In</h1>
                    <p>Enter your email address and password to access user panel.</p>
                    
                </div>
                <LoginForm onSubmit={props.signIn}  incorrectData = {props.incorrectData} />
            </div>
        </div>
    )
}
export default Login