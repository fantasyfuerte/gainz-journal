"use client";

import Select from "react-select";

interface Props {
  options: { value: string; label: string }[];
  placeholder: string;
}

function SelectComponent({ options,placeholder }: Props) {
  return (
    <Select
    placeholder={placeholder}
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
