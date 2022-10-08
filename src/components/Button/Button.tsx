import styles from "./Button.module.scss";

const Button = (props: any) => {
  const type = props.type;

  return (
    <button className={`${styles.base} ${styles[type]}`}>
      {props.children}
    </button>
  );
};

export default Button;
