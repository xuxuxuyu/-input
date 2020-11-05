import React from "react";
import "./styles/index.less"

export default function Input() {

  return (
    <div className="wrapper">
      <input type="text" className="addonBefore" />
      <input type="text" className="content" />
      <input type="text" className="addonAfter" />
    </div>
  );
}
