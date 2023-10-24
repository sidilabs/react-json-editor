"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const M=require("./index-6e0fba57.cjs"),{global:E}=__STORYBOOK_MODULE_GLOBAL__,{logger:h}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var p="backgrounds",{document:s,window:S}=E,B=()=>S.matchMedia("(prefers-reduced-motion: reduce)").matches,O=(r,e=[],a)=>{if(r==="transparent")return"transparent";if(e.find(n=>n.value===r))return r;let t=e.find(n=>n.name===a);if(t)return t.value;if(a){let n=e.map(o=>o.name).join(", ");h.warn(M.dedent`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${n}.
      `)}return"transparent"},v=r=>{(Array.isArray(r)?r:[r]).forEach(x)},x=r=>{var a;let e=s.getElementById(r);e&&((a=e.parentElement)==null||a.removeChild(e))},w=(r,e)=>{let a=s.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{let t=s.createElement("style");t.setAttribute("id",r),t.innerHTML=e,s.head.appendChild(t)}},A=(r,e,a)=>{var n;let t=s.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let o=s.createElement("style");o.setAttribute("id",r),o.innerHTML=e;let i=`addon-backgrounds-grid${a?`-docs-${a}`:""}`,d=s.getElementById(i);d?(n=d.parentElement)==null||n.insertBefore(o,d):s.head.appendChild(o)}};const{useMemo:f,useEffect:k}=__STORYBOOK_MODULE_PREVIEW_API__;var L=(r,e)=>{var c;let{globals:a,parameters:t}=e,n=(c=a[p])==null?void 0:c.value,o=t[p],i=f(()=>o.disable?"transparent":O(n,o.values,o.default),[o,n]),d=f(()=>i&&i!=="transparent",[i]),g=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=f(()=>{let l="transition: background-color 0.3s;";return`
      ${g} {
        background: ${i} !important;
        ${B()?"":l}
      }
    `},[i,g]);return k(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!d){v(l);return}A(l,u,e.viewMode==="docs"?e.id:null)},[d,u,e]),r()},T=(r,e)=>{var y;let{globals:a,parameters:t}=e,n=t[p].grid,o=((y=a[p])==null?void 0:y.grid)===!0&&n.disable!==!0,{cellAmount:i,cellSize:d,opacity:g}=n,u=e.viewMode==="docs",c=t.layout===void 0||t.layout==="padded"?16:0,l=n.offsetX??(u?20:c),b=n.offsetY??(u?20:c),$=f(()=>{let m=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",_=[`${d*i}px ${d*i}px`,`${d*i}px ${d*i}px`,`${d}px ${d}px`,`${d}px ${d}px`].join(", ");return`
      ${m} {
        background-size: ${_} !important;
        background-position: ${l}px ${b}px, ${l}px ${b}px, ${l}px ${b}px, ${l}px ${b}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${g/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g/2}) 1px, transparent 1px) !important;
      }
    `},[d]);return k(()=>{let m=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!o){v(m);return}w(m,$)},[o,$,e]),r()},C=[T,L],I={[p]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},R={[p]:null};exports.decorators=C;exports.globals=R;exports.parameters=I;
//# sourceMappingURL=preview-28f60d04.cjs.map
