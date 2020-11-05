import React from "react";
import { SizeType } from "../constants";
import "./styles/index.less"

interface InputProps {
  addonBefore?: string;
  addonAfter?: string;
  sizeType?: SizeType;
  value?: string;
  onChange?: (value: string) => void;
}

export default function Input(props: InputProps) {
  console.log(props)
  const { addonBefore, addonAfter } = props
  return (
    <div className="wrapper">
      {addonBefore ? (
        <input type="text" className="addonBefore" disabled placeholder={addonBefore}/>
      ) : null}

      <input type="text" className="content" />

      {addonAfter ? (
        <input type="text" className="addonAfter" disabled placeholder=".com"/>
      ) : null}
    </div>
  );
}
