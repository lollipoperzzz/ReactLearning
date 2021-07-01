import s from './Header.module.css'

function Header(){
    return(
        <header className={s.header}>
            <img className={s.App_logo} src="https://cryptologos.cc/logos/aave-aave-logo.png" alt="no-logo"/>
        </header>
    );
}

export default Header;