import { R as r } from "./index-d373fa27.js";
const o = r.createContext({});
function f(e) {
  const t = r.useContext(o);
  return r.useMemo(() => typeof e == "function" ? e(t) : { ...t, ...e }, [t, e]);
}
const i = {};
function c({ components: e, children: t, disableParentContext: u }) {
  let n;
  return u ? n = typeof e == "function" ? e({}) : e || i : n = f(e), r.createElement(
    o.Provider,
    { value: n },
    t
  );
}
export {
  o as MDXContext,
  c as MDXProvider,
  f as useMDXComponents
};
//# sourceMappingURL=index-b41da66d.js.map
