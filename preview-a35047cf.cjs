"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});var _="storybook/highlight",d="storybookHighlight",r=`${_}/add`,s=`${_}/reset`;const{global:O}=__STORYBOOK_MODULE_GLOBAL__,{addons:E}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:H}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:l}=O,g=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,S=e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"}),i=E.getChannel(),T=e=>{let t=d;n();let o=Array.from(new Set(e.elements)),h=l.createElement("style");h.setAttribute("id",t),h.innerHTML=o.map(a=>`${a}{
          ${g(e.color,e.style)}
         }`).join(" "),l.head.appendChild(h)},n=()=>{var o;let e=d,t=l.getElementById(e);t&&((o=t.parentNode)==null||o.removeChild(t))};i.on(H,n);i.on(s,n);i.on(r,T);exports.highlightObject=S;exports.highlightStyle=g;
//# sourceMappingURL=preview-a35047cf.cjs.map
