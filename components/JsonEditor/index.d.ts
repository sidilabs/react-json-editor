export type JsonEditorProps = {
    width?: number | string;
    data: Record<string, any>;
    optionsMap?: Record<string, Array<{
        value: string;
        label?: string;
    }>>;
    schema?: any;
    onChange: (data: any) => void;
};
export declare const JsonEditor: ({ data, onChange, schema, optionsMap, width }: JsonEditorProps) => import("react/jsx-runtime").JSX.Element;
