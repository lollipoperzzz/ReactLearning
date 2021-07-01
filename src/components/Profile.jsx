import classes from './Profile.module.css'

function Profile() {
    return (
        <div className={classes.content}>
            <img className={classes.main_img} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="no-image"/>
            <div>
                ava+desc
            </div>
            <div>
                MyPosts
                <div className={classes.item}>
                    New post
                </div>
                <div className={classes.item}>
                    post1
                </div>
                <div className={classes.item}>
                    post2
                </div>
            </div>
        </div>
    );
}

export default Profile;