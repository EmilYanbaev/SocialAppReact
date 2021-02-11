import React from 'react';
import { Field, reduxForm } from "redux-form"
import style from "./Profile.module.css"

let Profile = (props) => {

    return (
        <div className={style.container}>
            <div className={style.user}>
                <div className={style.user__photo}>
                </div>
                <button className={style.btn}>
                    MESSAGE
                </button>
            </div>

            <ProfileForm {...props} onSubmit={props.onSubmit} />
        </div>
    )
}

export default Profile


class ProfileForm extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.profile !== this.props.profile) {
            this.props.initialize({
                status: "123",
                aboutMe: this.props.profile.aboutMe,
                lookingForAJob:this.props.profile.lookingForAJob,
                lookingForAJobDescription:this.props.profile.lookingForAJobDescription
            });
        }
    }

    render() {
        return (
            <form className={style.userInfo} onSubmit={this.props.handleSubmit}>
                <div className={style.mainInfo}>
                    <div className={style.mainInfo__name}>
                        {this.props.profile.fullName}
                    </div>
                    <div className={style.mainInfo__status}>
                        <Field className={style.input} component={"input"} name="status" type="text" />
                    </div>
                </div>
                <div className={style.secondaryInfo}>
                    <div className={style.secondaryInfo__item}>
                        <p>about me:</p>
                    <Field className={style.input} component={"input"} name="aboutMe" type="text" />
                    </div>
                    <div className={style.secondaryInfo__item}>
                        <p>looking for a job:</p>
                     <Field className={style.input} component={"input"} type="checkbox" name="lookingForAJob" />
                    </div>
                    <div className={style.secondaryInfo__item}>
                        <p>looking for aJ job description:</p>
                    <Field className={style.input} component={"input"} name="lookingForAJobDescription" />
                    </div>
                </div>
                <div className = {style.wrappBtn}>
                <button type="submit" className = {style.btn}>Save</button>
                </div>
            </form>
        )
    }
}

ProfileForm = reduxForm({ form: 'userInfo' })(ProfileForm)


// let Input = (props) => {
//     debugger;
//     console.log(props)
//     return (
//      <>
//             <input className={style.input}/>
//      </>
//      )
//  }