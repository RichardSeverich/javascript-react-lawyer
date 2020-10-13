import React from "react";

const FormDropDown = (props) => {

  const options = () => {
    //console.log(props.options);
    let ops = props.options.map((option, index) => {
      return (
        <option 
          key={index} 
          value={option.value}
          selected="selected"
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
      <div className="col-sm-9" >
        <select {...props.bind} className="custom-select custom-select-sm">
          <option value="" selected disabled hidden>Selecione</option>
          {options()}
        </select>
      </div>
    </div>
  );
};

export default FormDropDown;
