import styles from './input.module.css';
type inputType = {
  type: string;
  placeholder: string;
  name: string;
  setState: any;
  style?: Object | undefined;
};

export const Input = ({
  style,
  type,
  placeholder,
  name,
  setState,
}: inputType) => {
  return (
    <div
      style={style}
      className={styles.box}>
      <label htmlFor={name}>
        <input
          onChange={(e) => {
            setState(e.target.value);
          }}
          id={name}
          type={type}
          placeholder={placeholder}
          className={styles.input}
          name={name}
        />
      </label>
    </div>
  );
};
