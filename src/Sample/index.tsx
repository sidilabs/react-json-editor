import { useState } from "react";
import { JsonEditor } from "../components/JsonEditor";

const Sample = () => {
  const [state, setState] = useState({
    keyStr: "string",
    keyNum: 1,
    keyBool: true,
    keyArr: ["1", 1, true, [], {}],
    keyObj: {
      second: null,
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #CCC",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h1>App with JsonEditor</h1>
      <JsonEditor
        data={state}
        onChange={(d) => {
          setState(d);
          console.log(d);
        }}
      />
      <button
        onClick={() => {
          console.log(state);
        }}
      >
        Console Log Data
      </button>
    </div>
  );
};
export default Sample;
