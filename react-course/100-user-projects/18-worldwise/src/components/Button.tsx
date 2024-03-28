import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonType = "primary" | "back" | "position";
type onClickType =
  | (() => void)
  | ((event: React.MouseEvent<HTMLButtonElement>) => void);

interface ButtonProps {
  children: ReactNode;
  onClick: onClickType;
  type: ButtonType;
}

function Button({ children, onClick, type }: ButtonProps) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
