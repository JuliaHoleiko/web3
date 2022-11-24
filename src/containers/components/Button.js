import styles from "./Button.module.css"


export default function Button(props) {
    const cameras = props.cameras
    return (
        <button className={`${styles.button} ${props.className}`} onClick= {props.onClick  } type={props.type}>{props.text}  </button>
        
    );
}