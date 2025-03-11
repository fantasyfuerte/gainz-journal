import Select, { ActionMeta, SingleValue } from "react-select";

export type Option = { value: string; label: string };

interface Props {
  options: Option[];
  placeholder: string;
  setValue: (value: string | undefined) => void;
}

type reactSelectChange = (
  newValue: SingleValue<Option>,
  actionMeta: ActionMeta<Option>
) => void;

function SelectComponent({ options, placeholder, setValue }: Props) {
  const handleChange = (e: Option) => {
    if (e == null) setValue(undefined);
    else setValue(e.value);
  };

  return (
    <Select
      placeholder={placeholder}
      onChange={handleChange as reactSelectChange}
      styles={{
        control: (provided) => ({
          ...provided,
          backgroundColor: "transparent",
          border: "none",
          borderRadius: "0.5rem",
          padding: "0.5rem",
          fontSize: "1rem",
          color: "#94a1b2",
          outline: "none",
        }),
        menu: (provided) => ({
          ...provided,
          backgroundColor: "rgba(31, 18, 53,0.5)",
          backdropFilter: "blur(1px)",
          border: "none",
          borderRadius: "0.5rem",
        }),
        option: (provided) => ({
          ...provided,
          backgroundColor: "transparent",
          border: "none",
          borderRadius: "0.5rem",
          color: "#94a1b2",
          fontWeight: "500",
        }),
        singleValue: (provided) => ({
          ...provided,
          color: "#fffffe",
          fontWeight: "600",
          fontSize: "20px",
          zIndex: 10,
        }),
        placeholder: (provided) => ({
          ...provided,
          color: "#94a1b2",
          fontWeight: "600",
          opacity: "0.8",
        }),
      }}
      className="w-full"
      isClearable
      options={options}
    />
  );
}

export default SelectComponent;
