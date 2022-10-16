import styles from "./Button.module.css"


export default function Button(props) {
    return (
        <button className={`${styles.button} ${props.className}`}>{props.text}</button>
    );
}