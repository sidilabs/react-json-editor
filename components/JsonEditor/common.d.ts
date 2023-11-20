export declare enum DataType {
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
    OBJECT = "object",
    ARRAY = "array"
}
export declare const typeMap: Record<DataType, any>;
export declare const getTypeString: (element: any) => string;
export declare const getQuoteAddress: (newElement: any, uniqueKey: string, currentData: {
    [keyof: string]: any;
}, isChangingKey?: boolean) => {
    [keyof: string]: any;
};
export declare const isObject: (value: any) => boolean;
export declare const getPlaceholder: (value: any) => string | null;
export declare const navigateSchema: (jsonSchema: any, path: string[]) => any;
export declare const getSchemaObject: (jsonSchema: any, parentPath: string, fieldKey: string) => any;
export declare const getParentRef: (jsObject: any, parentPath: string) => any;
export declare const getParent: (jsObject: any, uniqueKey: string, upper?: boolean) => any;
