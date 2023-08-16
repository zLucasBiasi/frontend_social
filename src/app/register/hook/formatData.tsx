import { ChangeEvent, useState } from "react";

export const useFormatedData = () => {
  const [inputDate, setInputDate] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    let formattedValue = inputValue.replace(/\D/g, "");
    if (formattedValue.length > 2 && formattedValue.length <= 4) {
      formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(
        2
      )}`;
    } else if (formattedValue.length > 4) {
      formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(
        2,
        4
      )}/${formattedValue.slice(4, 8)}`;
    }
    setInputDate(formattedValue);
  };

  return { inputDate, handleChange };
};
