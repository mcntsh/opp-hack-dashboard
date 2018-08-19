import React from 'react';

const FormField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <div className="">{touched && error}</div>
    </div>
  );
};

export default FormField;
