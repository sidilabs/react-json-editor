export type JsonViewProps = {
    setEditObject: any;
    editObject: Record<string, any>;
    optionsMap?: Record<string, Array<{
        value: string;
        label?: string;
    }>>;
    schema: any;
};
declare function JsonView(props: JsonViewProps): import("react/jsx-runtime").JSX.Element;
export default JsonView;
