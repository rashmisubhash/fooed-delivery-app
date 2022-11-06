import React from "react";
import Select from "react-select";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

const customStyles = {
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    background: isSelected ? "#dd2476" : undefined,
    margin: "0px",
    color: isSelected ? "white" : undefined,
    zIndex: 1,
  }),
  menu: (provided, state) => ({
    ...provided,
    marginTop: "2px",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#dd2476",
    padding: "5px 8px",
    "&:hover": {
      color: "#dd2476",
    },
  }),
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? "1px solid #dd2476" : "1px solid #cdd4db",
    boxShadow: "none",
    borderRadius: "2px",
    minHeight: "36px",
    // width: "100%"
  }),
};

const Dropdown = ({ setSelectedType, selectedType, menu }) => {
  function optionCustom() {
    const options = [];
    menu.map((item, index) => {
      options.push({ label: item.menu_name, value: item.menu_id });
    });
    return options;
  }
  return (
    <div>
      <Select
        value={selectedType}
        onChange={(e) => setSelectedType(e)}
        styles={customStyles}
        placeholder="Filter..."
        className="custom-dropdown"
        options={optionCustom()}
      />

      <button className="button-primary clear-custom my-0" onClick={() => setSelectedType(null)}>
        X
      </button>

      <style jsx>{`
        .custom-dropdown {
          width: 200px;
          border-radius: 2px;
          height: 2.5em;
          line-height: 1.5;

          font-size: 0.9rem;
          max-height: 2.5em;
          display: inline-block;
        }
        .clear-custom {
          margin-left: 1rem;
          padding: 0.2rem 1rem;
          color: white;
          font-size: 1rem;
          font-weight: bold;
          background-color: red;
          border-radius: 6px;
          border: 2px solid white;
          min-height: 36px;
          height: 2.4em;
        }
        .css-1aieuwr-control {
          max-height: 2.5em;
        }
      `}</style>
    </div>
  );
};

export default Dropdown;
