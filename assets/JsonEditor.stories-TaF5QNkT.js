import{J as s}from"./index-BMUqlAVd.js";import"./index-yeExZq-E.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./assertThisInitialized-h6TrQsGh.js";const m={title:"Example/JsonEditor",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};let e={data:{keyStr:"string",keyNum:1,keyBool:!0,keyArr:["1",1,!0,[],{}],keyObj:{second:null}}};const t={args:{width:"440px",data:e.data,schema:{keyStr:{type:"string",required:!0}},onChange(a){e.data=a,console.log(a)}}};var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    width: "440px",
    data: dataRef.data,
    schema: {
      keyStr: {
        type: "string",
        required: true
      }
    },
    onChange(data) {
      dataRef.data = data;
      console.log(data);
    }
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const u=["Static"];export{t as Static,u as __namedExportsOrder,m as default};
//# sourceMappingURL=JsonEditor.stories-TaF5QNkT.js.map
