"use strict";function l(c){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];var n=Array.from(typeof c=="string"?[c]:c);n[n.length-1]=n[n.length-1].replace(/\r?\n([\t ]*)$/,"");var d=n.reduce(function(t,u){var a=u.match(/\n([\t ]+|(?!\s).)/g);return a?t.concat(a.map(function(g){var r,e;return(e=(r=g.match(/[\t ]/g))===null||r===void 0?void 0:r.length)!==null&&e!==void 0?e:0})):t},[]);if(d.length){var f=new RegExp(`
[	 ]{`+Math.min.apply(Math,d)+"}","g");n=n.map(function(t){return t.replace(f,`
`)})}n[0]=n[0].replace(/^\r?\n/,"");var o=n[0];return s.forEach(function(t,u){var a=o.match(/(?:^|\n)( *)$/),g=a?a[1]:"",r=t;typeof t=="string"&&t.includes(`
`)&&(r=String(t).split(`
`).map(function(e,h){return h===0?e:""+g+e}).join(`
`)),o+=r+n[u+1]}),o}exports.dedent=l;
//# sourceMappingURL=index-6e0fba57.cjs.map
