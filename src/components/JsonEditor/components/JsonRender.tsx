/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { ConfigContext } from '../store';
import RenderJsonConfig from './RenderJsonConfig';

const JsonRender = ({ onChangeKey, getValue }: any) => {
  const { editObject, schema, allowMap } = useContext(ConfigContext);

  return (
    <RenderJsonConfig
      sourceData={editObject}
      schema={schema}
      onChangeKey={onChangeKey}
      allowMap={allowMap}
      getValue={getValue}
    />
  );
};
export default JsonRender;
