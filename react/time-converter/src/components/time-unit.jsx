import { useId } from "react";

export const TimeUnit = ({ label, name, value, onChange }) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}: </label>
      <input
        type="number"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
