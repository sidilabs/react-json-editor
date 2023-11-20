/* eslint-disable @typescript-eslint/no-explicit-any */
export enum DataType {
  STRING = "string",
  NUMBER = "number",
  BOOLEAN = "boolean",
  OBJECT = "object",
  ARRAY = "array",
}

export const typeMap: Record<DataType, any> = {
  [DataType.STRING]: "",
  [DataType.BOOLEAN]: true,
  [DataType.NUMBER]: 0,
  [DataType.OBJECT]: {},
  [DataType.ARRAY]: [],
};

export const getTypeString = (element: any): string => {
  return Object.prototype.toString.call(element).match(/\w+/g)?.[1].toLowerCase() as string;
};

const setNewValue: any = (keys: string[], obj: any, newElement: any, isChangingKey = false, result: any[] = []) => {
  const index: any = keys.shift();
  const objKeys: string[] = Object.keys(obj);
  if (keys.length) {
    setNewValue(keys, obj[objKeys[index]], newElement, isChangingKey);
    return;
  }
  if (isChangingKey) {
    delete obj[objKeys[index]];
    result[0] = { ...obj, ...newElement };
  } else {
    obj[objKeys[index]] = newElement;
  }
  return;
};
// #TODO this function has logical issues
export const getQuoteAddress = (
  newElement: any,
  uniqueKey: string,
  currentData: {
    [keyof: string]: any;
  },
  isChangingKey = false
) => {
  // because first index is root index, don't find it.
  const indexKeys = uniqueKey.split("-").slice(1);
  setNewValue(indexKeys, currentData, newElement, isChangingKey);
  return currentData;
};

export const isObject = (value: any) => {
  return !!(value && typeof value === "object");
};

export const getPlaceholder = (value: any) => {
  if (!isObject(value)) return null;
  const currentType = getTypeString(value);
  if (currentType === DataType.ARRAY) {
    return `Array [${value.length}]`;
  } else {
    return `Object {${Object.keys(value).length}}`;
  }
};

export const navigateSchema = (jsonSchema: any, path: string[]): any => {
  const current = path.shift() || "";
  let result: any = {};
  if (/\\d+\]/.test(current)) {
    const index = current.replace(/[\[\]]/g, "");
    result = navigateSchema(jsonSchema?.properties?.[index], path);
  } else if (current) {
    result = navigateSchema(jsonSchema?.properties?.[current] || jsonSchema?.properties?.["*"], path);
  } else {
    result = jsonSchema;
  }
  return result;
};

export const getSchemaObject = (jsonSchema: any, parentPath: string, fieldKey: string) => {
  const all = navigateSchema(
    jsonSchema,
    [...parentPath.split("."), "*"].filter((path) => path != "")
  );
  const detail = navigateSchema(
    jsonSchema,
    [...parentPath.split("."), fieldKey].filter((path) => path != "")
  );
  return all || detail || {};
};

export const getParentRef = (jsObject: any, parentPath: string) => {
  let currentParent = jsObject;
  const arrPath = parentPath.split(".");
  arrPath.forEach((path) => {
    const result = /(.*)\[(\d+)\]$/.exec(path);
    if (result) {
      const key = result[1];
      currentParent = currentParent[key];
    } else {
      currentParent = currentParent[path];
    }
  });
  return currentParent;
};

export const getParent = (jsObject: any, uniqueKey: string, upper = false) => {
  const arr = [...uniqueKey.split("-")];
  arr.shift();
  arr.pop();
  if (upper) {
    arr.pop();
  }

  const result = getParentRecursive(jsObject, arr);

  return result;
};

const getParentRecursive = (jsObject: any, uniqueArr: string[]): any => {
  const currentArr = [...uniqueArr];
  const currentIndex = currentArr.shift();
  if (currentIndex === undefined) {
    return jsObject;
  } else {
    if (Array.isArray(jsObject)) {
      return getParentRecursive(jsObject[+currentIndex], currentArr);
    } else {
      let found = {};
      Object.values(jsObject).forEach((value, index) => {
        if (index == +currentIndex) {
          found = getParentRecursive(value, currentArr);
        }
      });
      return found;
    }
  }
};
