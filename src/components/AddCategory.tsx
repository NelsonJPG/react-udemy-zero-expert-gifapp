import { ChangeEvent, SetStateAction, SyntheticEvent, useState } from "react";

interface Props {
  onNewCategory: (category: string) => void;
  // setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddCategory = ({ onNewCategory }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const onInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const value = inputValue.trim();
    if (value.length <= 1) return;
    onNewCategory(value);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gif"
        onChange={onInputChange}
        value={inputValue}
      />
    </form>
  );
};
