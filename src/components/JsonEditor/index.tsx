/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles/index.scss";
import cloneDeep from "lodash.clonedeep";
import JsonView from "./components/JsonView";
import { useEffect, useRef, useState } from "react";

export type JsonEditorProps = {
  width?: number | string;
  data: Record<string, any>;
  optionsMap?: Record<
    string,
    Array<{
      value: string;
      label?: string;
    }>
  >;
  schema?: any;
  onChange: (data: any) => void;
};

export const JsonEditor = ({ data, onChange, schema, optionsMap, width }: JsonEditorProps) => {
  const [state, setState] = useState(cloneDeep(data));
  useEffect(() => {
    setState(cloneDeep(data));
  }, [JSON.stringify(data)]);
  return (
    <div className="jsonEditorContainer" style={{ width: width ?? 500, marginBottom: "20px" }}>
      <JsonView
        {...{
          //the cloneDeep is to ensure that an entirily new object is being used
          editObject: state,
          setEditObject: onChange,
          optionsMap: optionsMap,
          schema: schema || {},
        }}
      />
    </div>
  );
};
