import style from "./ModalBlock.module.css"
import ModalPortal from '../../../../otherComponent/ModalPortal';
import { Field, reduxForm } from 'redux-form';
import { Button } from '../../../../otherComponent/GroupComponent';
import { isValidURL, required } from '../../../../../utils/validators/validators';

let ModalContainer = (props) => {
    const changeInfo = props.view ? <ChangeInfo profile={props.profile} closeModal={props.closeModal} onSubmit={props.onSubmit} /> : null;

    return (<>{changeInfo}</>)
}

let ChangeInfo = ({ profile, closeModal, onSubmit }) => {
    let handleSave = (data) => {
        closeModal();
        onSubmit(data);
    }
    return (<ModalPortal>
        <div className={style.modal}>
            <FormProfile initialValues = {profile} onSubmit={handleSave.bind(this)} />
        </div>
    </ModalPortal>)
}

export default ModalContainer


let FormProfile = (props) => {
    return (
        <form className={style.formUserInfo} onSubmit={props.handleSubmit}>
            <div className={style.userInfo}>
                <ItemForm name="fullName" title="Full name:" type="text" component={Textarea} validators={[required]} />
                <ItemForm name="aboutMe" title="About me:" type="text" component="textarea" />
                <ItemForm name="lookingForAJob" title="Looking for a job" type="checkbox" component="input" />
                <ItemForm name="lookingForAJobDescription" title="Looking for a job description" type="text" component="textarea" />
                <ItemForm name="contacts.vk" title="Vk:" type="text" component={Textarea} validators = {[isValidURL]} />
                <ItemForm name="contacts.github" title="GitHub:" type="text" component={Textarea} validators = {[isValidURL]} />
            </div>
            {/* <p className={style.error} >{props.error}</p> */}
            <Button type="submit">Save</Button>
        </form>
    )

}

FormProfile = reduxForm({ form: 'userInfo' })(FormProfile)

let ItemForm = ({ name, component, title, type, validators, ...props }) => {
    return (
        <div className={style.item}>
            <p className={style.item__title}>{title}</p>
            <Field className={style.item__component} component={component} name={name} type={type} validate={validators} {...props} />
        </div>
    )
}


const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <>
            <textarea className={style.item__component + " " + (hasError ? style.warning : "")} {...input} {...props} />
            {hasError && <p className={style.error}>{meta.error}</p>}
        </>
    )
}

