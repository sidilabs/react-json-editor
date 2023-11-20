type Props = {
    fieldValue: any[];
    fieldKey: string;
    sourceData: any;
    getValue: (fieldValue: any, fieldKey: string, sourceData: any, deepLevel: number, parentUniqueKey: string, parentPath: string, schema: any, allowMap: any) => any;
    deepLevel: number;
    parentUniqueKey: string;
    parentPath: string;
    schema: any;
};
declare function ArrayView(props: Props): import("react/jsx-runtime").JSX.Element;
export default ArrayView;
