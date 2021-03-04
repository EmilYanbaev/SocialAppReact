import { Field, reduxForm } from "redux-form";
import style from "./Login.module.css"
import { maxLengthCreator, required } from './../../../../utils/validators/validators';
import { Button } from './../../../otherComponent/GroupComponent';

const maxLength = maxLengthCreator(30);

let LoginForm = ({ handleSubmit, captchaUrl, error }) => {
    debugger;
    return (
        <form className={style.form_group} onSubmit={handleSubmit}>

            {CreateField("inputEmail", "email", Input, "text", [required, maxLength], "Email enter", "Email address",)}
            {CreateField("inputPass", "password", Input, "password", [required], "Password", "Password",)}

            { error && <p className={style.error} >{error}</p>}
            {captchaUrl &&
                <div className={style.captchaControl}>
                    <img src={captchaUrl} />
                    {CreateField("captcha", "captcha", Input, "text", [required], "", "Captcha",)}
                </div>
            }

            <div className={style.control}>
                <div className={style.control__checkBox}>
                    {CreateField("checkbox", "rememberMe", "input", "checkbox", [], "", "Remember Me", { className: style.checkBox })}
                </div>

                <Button type="submit">Sign In</Button>
            </div>
        </form>
    )
}

LoginForm = reduxForm({ form: "login" })(LoginForm)
export default LoginForm

const CreateField = (id, name, component, type, validators, placeholder, text, props) => {
    return (
        <>
            <label htmlFor={id} className = {style.label}>{text}</label>
            <Field id={id} name={name} component={component} type={type} validate={validators} placeholder={placeholder} {...props} />
        </>
    )
}

const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.inputWrapp}>
            <input className={style.inputWrapp__input + " " + (hasError ? style.warning : "")} {...input} {...props} />
            {hasError && <p className={style.error}>{meta.error}</p>}
        </div>
    )
}


