import React,{ useState } from "react";
import "./styles/index.less";

interface InputProps {
  addonBefore?: string;
  addonAfter?: string;
  defaultValue?: string;
  sizeType?: string;
  onChange?: (value: string) => void;
}

export default function Input(props: InputProps) {
  const { addonBefore, addonAfter, defaultValue, sizeType="middle", onChange } = props
  const [ value, setValue ] = useState(defaultValue || "")

  const onValueChange = (event: any) => {
    if(onChange) {
      onChange(event.target.value)
    }
    setValue(event.target.value)
  }

  return (
    <div className={"wrapper" + " " + sizeType}>
      {addonBefore ? (
        <input type="text" className="addonBefore" disabled placeholder={addonBefore} />
      ) : null}

      <input type="text" className="content" value={value} onChange={onValueChange} />

      {addonAfter ? (
        <input type="text" className="addonAfter" disabled placeholder={addonAfter} />
      ) : null}
    </div>
  );
}
