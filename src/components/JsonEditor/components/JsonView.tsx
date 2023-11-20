/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useRef, useState } from "react";
import { DataType, getParent, getParentRef, getQuoteAddress, getSchemaObject, getTypeString, typeMap } from "../common";

import { ConfigContext } from "../store";
import ArrayView from "./ArrayView";

import RenderJsonConfig from "./RenderJsonConfig";
import { useCallback } from "react";
import { SelectBoolean, SelectOptions } from "./Selects";
import JsonRender from "./JsonRender";

export type JsonViewProps = {
  setEditObject: any;
  editObject: Record<string, any>;
  optionsMap?: Record<
    string,
    Array<{
      value: string;
      label?: string;
    }>
  >;
  schema: any;
};

function JsonView(props: JsonViewProps) {
  const { editObject, setEditObject, optionsMap } = props;
  const editObjectRef = useRef(editObject);
  if (JSON.stringify(editObject) !== JSON.stringify(editObjectRef.current)) {
    editObjectRef.current = editObject;
  }
  const collisionRef = useRef(0);
  const [allowMap, setAllowMap] = useState<Record<string, boolean>>({});

  const editObjectString = JSON.stringify(editObject);

  const syncData = (data: Record<string, any>) => {
    setEditObject({ ...data });
  };

  const onClickDelete = useCallback(
    (key: string, parentPath: any) => {
      const parentData = getParentRef(editObject, parentPath) ?? editObject;
      if (Array.isArray(parentData)) {
        parentData.splice(+key, 1);
      } else {
        Reflect.deleteProperty(parentData, key);
      }
      syncData(editObject);
    },
    [editObjectString]
  );

  const onChangeType = useCallback((type: DataType, uniqueKey: string) => {
    const newEditObject = getQuoteAddress(typeMap[type], uniqueKey, editObjectRef.current);
    syncData(newEditObject);
  }, []);

  const onChangeKey = useCallback(
    (
      event: React.ChangeEvent<HTMLInputElement>,
      currentKey: string,
      uniqueKey: string,
      source: Record<string, any>,
      _parentKey: string,
      parentPath: string
    ) => {
      const pathArray = parentPath.split(".");

      const selfIsGlobal = parentPath == "";
      const parentIsGlobal = pathArray.length == 1;
      const upperParentArray = [...pathArray];
      const keyParent = upperParentArray.pop() as string;
      const upperParentPath = upperParentArray.join(".");
      const upperParentRef = getParentRef(source, upperParentPath);

      const targetRef = selfIsGlobal ? source : getParentRef(source, parentPath);

      const newValue: Record<string, any> = {};

      const oldKeys = Object.keys(targetRef);
      let hasCollision = false;
      const currentIndex = +(/.*-(\d+)$/.exec(uniqueKey)?.[1] || -1);
      if (oldKeys.some((oldKey, index) => oldKey == event.target.value && index != currentIndex)) {
        hasCollision = true;
        collisionRef.current++;
      }
      for (const [key, value] of Object.entries(targetRef)) {
        if (key === currentKey) {
          newValue[(hasCollision ? `$E-${collisionRef.current}$_` : "") + event.target.value] = targetRef[key];
        } else {
          newValue[key] = value;
        }
      }

      if (selfIsGlobal) {
        source = newValue;
      } else if (parentIsGlobal) {
        source[parentPath] = newValue;
      } else {
        upperParentRef[keyParent] = newValue;
      }

      syncData(source);
    },
    [editObjectString]
  );

  const onChangeValue = (value: any, key: string, _: Record<string, any>, deepLevel = 0, uniqueKey = "") => {
    const source = getParent(editObjectRef.current, uniqueKey);
    source[key] = value;
    if (deepLevel == 1) {
      syncData(source);
    } else {
      const arrPath: string[] = [];
      uniqueKey.split(".").forEach((p) => {
        if (/.*\[\d+\]/.test(p)) {
          arrPath.push(p.replace(/\[\d*\]/, ""));
        } else {
          arrPath.push(p);
        }
      });
      syncData(editObjectRef.current);
    }
  };

  const timerValueRef = useRef(0);
  const onChangeValueDelayed = (
    value: any,
    key: string,
    source: Record<string, any>,
    deepLevel = 0,
    parentPath = ""
  ) => {
    if (timerValueRef.current) {
      clearTimeout(timerValueRef.current);
    }
    timerValueRef.current = +setTimeout(() => {
      onChangeValue(value, key, source, deepLevel, parentPath);
    }, 800);
  };

  const getValue = useCallback(
    (
      fieldValue: any,
      fieldKey: string,
      sourceData: any,
      deepLevel: number,
      parentUniqueKey: string,
      parentPath: string,
      schema: any,
      allowMap: any
    ) => {
      const thatType = getTypeString(fieldValue);
      const newParentPath = `${!!parentPath ? parentPath + "." : ""}${fieldKey}`;
      switch (thatType) {
        case DataType.ARRAY:
          return (
            <ArrayView
              fieldValue={fieldValue}
              fieldKey={fieldKey}
              sourceData={sourceData}
              deepLevel={deepLevel}
              parentUniqueKey={parentUniqueKey}
              getValue={getValue}
              parentPath={newParentPath}
              schema={schema}
            />
          );
        case DataType.OBJECT:
          return (
            <span>
              <RenderJsonConfig
                sourceData={fieldValue}
                schema={schema}
                deepLevel={deepLevel + 1}
                parentUniqueKey={parentUniqueKey}
                parentPath={newParentPath}
                onChangeKey={onChangeKey}
                allowMap={allowMap}
                getValue={getValue}
              />
            </span>
          );
        case DataType.STRING:
          const fieldSchema = getSchemaObject(schema, parentPath, fieldKey);
          if (fieldSchema.options?.length > 0) {
            return (
              <SelectOptions
                fieldSchema={fieldSchema}
                value={fieldValue}
                onChange={(value: string) => {
                  onChangeValueDelayed(value, fieldKey, sourceData, deepLevel, parentUniqueKey);
                }}
              />
            );
          } else {
            return (
              <input
                ref={(ref) => {
                  if (ref) {
                    ref.value = fieldValue;
                  }
                }}
                style={{ width: 100 }}
                onChange={(evt) => {
                  onChangeValueDelayed(evt.currentTarget.value, fieldKey, sourceData, deepLevel, parentUniqueKey);
                }}
              />
            );
          }
        case DataType.NUMBER:
          return (
            <input
              ref={(ref) => {
                if (ref) {
                  ref.value = fieldValue;
                }
              }}
              className={"inputNumber"}
              type="number"
              onChange={(event) => {
                onChangeValueDelayed(+(event.target.value || 0), fieldKey, sourceData, deepLevel, parentUniqueKey);
              }}
            />
          );
        case DataType.BOOLEAN:
          return (
            <SelectBoolean
              field={fieldKey}
              value={fieldValue}
              onChange={(value: boolean) => {
                onChangeValueDelayed(value, fieldKey, sourceData, deepLevel, parentUniqueKey);
              }}
            />
          );
      }
      return null;
    },
    []
  );
  const onChangeAllow = useCallback(
    (uniqueKey: string) => {
      allowMap[uniqueKey] = !allowMap[uniqueKey];
      setAllowMap({ ...allowMap });
    },
    [JSON.stringify(allowMap)]
  );

  const value = useMemo(
    () => ({
      editObject,
      setEditObject: syncData,
      optionsMap,

      onChangeType,
      onClickDelete,
      onChangeAllow,
      allowMap,
      schema: props.schema,
    }),
    [
      editObjectString,
      JSON.stringify(optionsMap),
      onChangeType,
      onClickDelete,
      onChangeAllow,
      JSON.stringify(allowMap),
      JSON.stringify(props.schema),
    ]
  );
  return (
    <ConfigContext.Provider value={value}>
      <JsonRender onChangeKey={onChangeKey} getValue={getValue} />
    </ConfigContext.Provider>
  );
}

export default JsonView;
