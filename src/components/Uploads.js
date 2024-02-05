import React, { useState, useEffect } from "react";
import Select from "react-select";

const Uploads = ({ data }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentTags, setCurrentTags] = useState([]);

  useEffect(() => {
    if (data.select_tags) {
      setCurrentTags(data.select_tags.split(",").map((tag) => tag.trim()));
    }
  }, [data.select_tags]);

  const handleTagSelection = (selectedOption) => {
    if (selectedOption) {
      setSelectedTags([...selectedTags, selectedOption.value]);
      setCurrentTags(currentTags.filter((t) => t !== selectedOption.value));
    }
  };

  const handleTagRemoval = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
    setCurrentTags([...currentTags, tag]);
  };

  const tagOptions = currentTags.map((tag) => ({
    value: tag,
    label: tag,
  }));

  return (
    
    <tbody className=" rounded-2xl  font-normal text-[14px] flex flex-col gap-3 ">
    <tr className=" px-6 bg-white rounded-lg w-[1034px] h-[58px] grid grid-cols-12 place-items-start place-content-center  items-center mb-4">
      <td className="col-span-2 col-start-1 ">{data.id}</td>
      <td className=" underline text-blue-400 col-span-2 col-start-3 ">
        {data.links}
      </td>
      <td className="col-span-2 col-start-5">{data.prefix} </td>
      <td className="col-span-2 col-start-7 ">
        <Select
          options={tagOptions}
          value={null}
          onChange={handleTagSelection}
          placeholder="Select Tags"
          className="text-black font-figtree outline-none focus:outline-none text-[14px] font-normal"
          theme={(theme) => ({
            ...theme,
            borderRadius: 8,
            colors: {
              ...theme.colors,
              primary25: "#F5F5F5",
              primary: "black",
            },
          })}
          styles={{
            menuList: (base) => ({
              ...base,
              "::-webkit-scrollbar": {
                display: "none",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              borderRadius: 8,
              height: 40,
              width: 134,
              color: state.isSelected ? "white" : "black",
              backgroundColor: state.isSelected
                ? "#605BFF"
                : state.isFocused
                ? "#F5F5F5"
                : "white",
            }),
            menu: (provided) => ({
              ...provided,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              borderRadius: 12,
              fontSize: 14,
              width: 150,
              height: 205,
            }),
            control: (provided) => ({
              ...provided,
              borderRadius: 8,
              boxShadow: "none",
              height: 32,
              width: 150,
              paddingLeft: 6,
              paddingRight: 6,
              caretColor: "transparent",
              borderColor: "#F2F2F2",
              "&:hover": {
                borderColor: "#F2F2F2",
              },
            }),
            indicatorSeparator: () => ({
              display: "none",
            }),
          }}
        />
      </td>
      <td className=" ">
        <div className="flex gap-2 overflow-x-auto">
          {selectedTags.map((tag) => (
            <div
              key={tag}
              className="text-white capitalize flex bg-[#605BFF] rounded items-center justify-center align-middle p-2 text-[10px]"
            >
              <p className="m-0 uppercase">{tag}</p>
              <button
                onClick={() => handleTagRemoval(tag)}
                className="ml-2"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </td>
    </tr>
  </tbody>
  );
};
export default Uploads;
