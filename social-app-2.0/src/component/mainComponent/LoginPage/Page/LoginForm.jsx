import { Field, reduxForm } from "redux-form";
import style from "./Login.module.css"
import { maxLengthCreator, required } from './../../../../utils/validators/validators';

const maxLength = maxLengthCreator(30);

let LoginForm = ({handleSubmit,error}) => {
    return (
        <form className={style.form_group} onSubmit={handleSubmit}>

            {CreateField("inputEmail", "email", Input, "text", [required, maxLength], "Email enter", "Email address",)}
            {CreateField("inputPass", "password", Input, "password", [required], "Password", "Password",)}
            
            <p className={style.error} >{error}</p>
            <div className={style.control}>
                <div className={style.control__checkBox}>
                    {CreateField("checkbox", "rememberMe", "input", "checkbox", [], "", "Remember Me", {className:style.checkBox})}
                </div>
                <button type="submit" className={style.btn}>Sign In</button>
            </div>
        </form>
    )
}

LoginForm = reduxForm({ form: "login" })(LoginForm)
export default LoginForm

const CreateField = (id, name, component, type, validators, placeholder, text, props) => {
    return (
        <>
            <label htmlFor={id}>{text}</label>
            <Field id={id} name={name} component={component} type={type} validate={validators} placeholder={placeholder} {...props}/>
        </>
    )
}

const Input = ({ input, meta,...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.inputWrapp}>
            <input className={style.inputWrapp__input + " " + (hasError ? style.warning : "")} {...input} {...props} />
            <p className={style.error} style={hasError ? { "display": "block" } : { "display": "none" }} >{meta.error}</p>
        </div>
    )
}


