import React from "react";

const FormInput = (props) => {
  return (
    <div className="form-group row">
      <label className="col-sm-3 control-label">{props.labelContent}</label>
      <div className="col-sm-9">
        <input
          className="form-control"
          type={props.type}
          minLength={props.minLength}
          maxLength={props.maxLength}
          {...props.bind}
        ></input>
      </div>
    </div>
  );
};

export default FormInput;
