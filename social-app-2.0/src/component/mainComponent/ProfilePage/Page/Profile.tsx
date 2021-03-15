import style from "./Profile.module.css"
import InfoBlock from "./Block/InfoBlock";
import MainBlock from './Block/MainBlock';
import ModalBlock from './Block/ModalBlock';
import { FullProfileType, ProfileType } from "../../../../types/commonTypes";



type PropsType = {
    isOwner: boolean,
    profile: FullProfileType | null
    viewModal: boolean,

    savePhoto: (file: any) => void,
    toggleModal: (open: boolean) => void,
    onSubmit: (data: ProfileType) => void
}

let Profile: React.FC<PropsType> = (props) => {

    return (
        <div className={style.container}>

            <MainBlock isOwner={props.isOwner} photos={props.profile?.photos} savePhoto={props.savePhoto} openModal={() => { props.toggleModal(true) }} />

            <InfoBlock profile={props.profile} />

            <ModalBlock profile={props.profile} closeModal={() => { props.toggleModal(false) }} view={props.viewModal} onSubmit={props.onSubmit} />

        </div>
    )
}

export default Profile















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