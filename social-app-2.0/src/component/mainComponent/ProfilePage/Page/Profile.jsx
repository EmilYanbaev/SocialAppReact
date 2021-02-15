import React, { useEffect } from 'react';
import { Field, reduxForm } from "redux-form"
import style from "./Profile.module.css"

let Profile = (props) => {
    return (
        <div className={style.container}>
            <div className={style.user}>
                <div className={style.user__photo}
                    style={props.profile.photos?.large ?
                        { "background-image": `url(${props.profile.photos.large})` } : {}}>
                </div>
                <button className={style.btn}>MESSAGE</button>
            </div>

            <ProfileForm {...props} onSubmit={props.onSubmit} />
        </div>
    )
}

export default Profile



let ProfileForm = (props) => {

    useEffect(() => {
        props.initialize({
            aboutMe: props.profile.aboutMe,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription
        });
    }, [props.profile])

    return (
        <form className={style.userInfo} onSubmit={props.handleSubmit}>
            <div className={style.mainInfo}>
                <div className={style.mainInfo__name}>
                    {props.profile.fullName}
                </div>
            </div>
            <div className={style.secondaryInfo}>
                <Input name="aboutMe" title="about me:" type="text" />
                <Input name="lookingForAJob" title="looking for a job" type="checkbox" style={{ "width": "auto" }} />
                <Input name="lookingForAJobDescription" title="looking for a job description" type="text" />
            </div>
            <div className={style.wrappBtn}>
                <button type="submit" className={style.btn}>Save</button>
            </div>
        </form>
    )
}

let Input = (props) => {
    return (
        <div className={style.secondaryInfo__item}>
            <p>{props.title}</p>
            <Field className={style.input} component={"input"} name={props.name} type={props.type} style={props.style} />
        </div>
    )
}

ProfileForm = reduxForm({ form: 'userInfo' })(ProfileForm)





// class ProfileForm extends React.Component {

//     constructor(props) {
//         super(props);
//         props.initialize({
//             status: "123",
//             aboutMe: props.profile.aboutMe,
//             lookingForAJob: props.profile.lookingForAJob,
//             lookingForAJobDescription: props.profile.lookingForAJobDescription
//         });
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.profile !== this.props.profile) {
//             this.props.initialize({
//                 status: "123",
//                 aboutMe: this.props.profile.aboutMe,
//                 lookingForAJob: this.props.profile.lookingForAJob,
//                 lookingForAJobDescription: this.props.profile.lookingForAJobDescription
//             });
//         }
//     }

//     render() {
//         return (
//             <form className={style.userInfo} onSubmit={this.props.handleSubmit}>
//                 <div className={style.mainInfo}>
//                     <div className={style.mainInfo__name}>
//                         {this.props.profile.fullName}
//                     </div>
//                     <div className={style.mainInfo__status}>
//                         <Field className={style.input} component={"input"} name="status" type="text" />
//                     </div>
//                 </div>
//                 <div className={style.secondaryInfo}>
//                     <div className={style.secondaryInfo__item}>
//                         <p>about me:</p>
//                         <Field className={style.input} component={"input"} name="aboutMe" type="text" />
//                     </div>
//                     <div className={style.secondaryInfo__item}>
//                         <p>looking for a job:</p>
//                         <Field className={style.input} component={"input"} type="checkbox" name="lookingForAJob" />
//                     </div>
//                     <div className={style.secondaryInfo__item}>
//                         <p>looking for aJ job description:</p>
//                         <Field className={style.input} component={"input"} name="lookingForAJobDescription" />
//                     </div>
//                 </div>
//                 <div className={style.wrappBtn}>
//                     <button type="submit" className={style.btn}>Save</button>
//                 </div>
//             </form>
//         )
//     }
// }