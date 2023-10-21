/* eslint-disable @typescript-eslint/no-explicit-any */
import { MinusSquareOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import React from 'react';
import { ConfigContext } from '../store';
import { getTypeString, DataType, navigateSchema, getSchemaObject } from '../common';
import { useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CMinusSquareOutlined: any = MinusSquareOutlined;

function ToolsView(props: {
  fieldValue: any;
  fieldKey: string;
  uniqueKey: string;
  sourceData: any;
  parentPath: string;
  custom?: string;
}) {
  const { schema } = useContext(ConfigContext);

  //parente fixed - any direct property cannot be changed
  if (navigateSchema(schema, props.parentPath.split('.'))?.fixed) {
    return null;
  }

  const schemaObject = getSchemaObject(schema, props.parentPath, props.fieldKey);
  const isObjectInSchema = Object.keys(schemaObject.properties || {}).length > 0;

  const isSchemaType = isObjectInSchema || schemaObject.type !== undefined;
  const schemaType = isObjectInSchema ? 'object' : schemaObject.type;

  return (
    <ConfigContext.Consumer>
      {({ onChangeType, onClickDelete }) => (
        <span className="tools" data-path={props.parentPath} data-custom={props.custom}>
          <span>
            <Select
              size="small"
              onChange={(value) => onChangeType(value, props.uniqueKey)}
              defaultValue={getTypeString(props.fieldValue)}
            >
              {isSchemaType ? (
                <Select.Option value={schemaType} key={schemaType}>
                  {schemaType}
                </Select.Option>
              ) : (
                Object.values(DataType).map((item: string) => (
                  <Select.Option value={item} key={item}>
                    {item}
                  </Select.Option>
                ))
              )}
            </Select>
          </span>
          {!schemaObject.mandatory ? (
            <span className="iconSubtraction">
              <CMinusSquareOutlined onClick={() => onClickDelete(props.fieldKey, props.parentPath)} />
            </span>
          ) : (
            <span className="iconSubtraction">
              <CMinusSquareOutlined style={{ color: 'gray' }} />
            </span>
          )}
        </span>
      )}
    </ConfigContext.Consumer>
  );
}
export default ToolsView;
