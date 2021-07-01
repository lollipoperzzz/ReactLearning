import classes from './Header.module.css'

function Header(){
    return(
        <header className={classes.header}>
            <img className={classes.App_logo} src="https://cryptologos.cc/logos/aave-aave-logo.png" alt="no-logo"/>
        </header>
    );
}

export default Header;