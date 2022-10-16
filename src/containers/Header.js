import LinkButton from "./components/LinkButton"
import Button from "./components/Button"
import styles from "./Header.module.css"


export default function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <b>Camera</b> 
            </div>
            <div className={styles.nav}>
                <LinkButton className={styles.link} text="Home" link="" />
                <LinkButton className={styles.link} text="Catalog" link="" />
                <LinkButton className={styles.link} text="Cart" link="" />
            </div>
            <div></div>
        </header>
    );
}