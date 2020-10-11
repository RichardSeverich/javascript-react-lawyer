import React from "react";

const FormDropDown = (props) => {

  const options = () => {
    //console.log(props.options);
    let ops = props.options.map((option, index) => {
      return (
        <option 
          key={index} 
          value={option.value}
        >
          {option.content}
        </option>
      );
    });
    return ops;
  };

  return (
    <div className="form-group row">
      <label className="col-sm-3 control-label">{props.labelContent}</label>
      <div className="col-sm-9">
        <select className="custom-select custom-select-sm" {...props.bind}>
          {options()}
        </select>
      </div>
    </div>
  );
};

export default FormDropDown;
