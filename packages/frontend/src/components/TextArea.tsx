import styles from "./TextArea.module.css";

interface Props {
  value: string;
  onChange?: (value: string) => void;
}

export default function TextArea({ value, onChange }: Props) {
  return (
    <textarea
      className={styles.textarea}
      value={value}
      onChange={
        onChange
          ? ({ target }) => {
              onChange(target.value);
            }
          : undefined
      }
    />
  );
}
