import styles from "./LinkButton.module.css"


export default function LinkButton(props) {
    return (
        <div className={styles.link}>
            <a className={styles.a} href={props.link}>
                {props.text}
            </a>
        </div>
    );
}