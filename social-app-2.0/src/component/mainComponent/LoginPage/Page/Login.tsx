import { LoginDataType } from "../../../../types/commonTypes";
import style from "./Login.module.css"
import LoginForm from './LoginForm';


type PropsType = {
    signIn: (data: LoginDataType) => void,
    captchaUrl: string | null
}

let Login: React.FC<PropsType> = ({ signIn, captchaUrl }) => {
    return (
        <div className={style.loginPage}>
            <div className={style.container}>
                <div className={style.loginPage__title}>
                    <h1>Sign In</h1>
                    <p>Enter your email address and password to access user panel.</p>
                </div>
                {//@ts-ignore
                    <LoginForm onSubmit={signIn} captchaUrl={captchaUrl} />}
            </div>
        </div>
    )
}
export default Login