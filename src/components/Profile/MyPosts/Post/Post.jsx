import s from './Post.module.css'

function Post(props){
    let message = props.message;
    return(
        <div>
            <img className={s.avatar} src="https://w7.pngwing.com/pngs/202/62/png-transparent-social-media-marketing-united-states-digital-marketing-business-avatar-clip-blue-computer-network-text.png" alt="No Avatar"/>
            <span className={s.post}>{message}</span>
        </div>
    );
}

export default Post;