import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={s.content}>
            <img className={s.main_img} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="no-image"/>
            <div>
                ava+desc
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;