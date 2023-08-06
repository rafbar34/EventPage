import style from './textArea.module.css';
type textAreaType = {
  name: string;
  placeholder: string;
  setState: any;
};
export const TextArea = ({placeholder, name, setState}: textAreaType) => {
  return (
    <textarea
      onChange={(e) => {
        setState(e.target.value);
      }}
      placeholder={placeholder}
      className={style.textArea}
      name={name}
      rows={4}
      cols={50}></textarea>
  );
};
