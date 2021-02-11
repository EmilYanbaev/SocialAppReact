import { Field, reduxForm } from "redux-form";
import style from "./Login.module.css"
import { maxLengthCreator, required } from './../../../../utils/validators/validators';


const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.inputWrapp}>
            <input className={style.inputWrapp__input + " " + (hasError ? style.warning : "")} {...input} {...props} />
            <p className={style.error} style={hasError ? { "display": "block" } : { "display": "none" }} >{meta.error}</p>
        </div>
    )
}

const maxLength = maxLengthCreator(30);

let LoginForm = (props) => {
    return (
        <form className={style.form_group} onSubmit={props.handleSubmit}>
            <label htmlFor="inputEmail">Email address</label>
            <Field
                component={Input}
                name={"email"}
                type="text"
                id="inputEmail"
                placeholder="Email enter"
                validate={[required, maxLength]}
            />

            <label htmlFor="inputPass">Password</label>
            <Field
                component={Input}
                name={"password"}
                type="password"
                id="inputPass"
                placeholder="Password"
                validate={[required]}
            />

            <p className={style.error} >{props.error}</p>
            <div className={style.control}>
                <div className={style.control__checkBox}>
                    <Field
                        component={"input"}
                        name={"rememberMe"}
                        type="checkbox"
                        id="checkBox"
                        className={style.checkBox} />
                    <label htmlFor="checkBox">Remember Me</label>
                </div>

                <button type="submit" className={style.btn}>Sign In</button>
            </div>
        </form>
    )
}
LoginForm = reduxForm({ form: "login" })(LoginForm)
export default LoginForm
