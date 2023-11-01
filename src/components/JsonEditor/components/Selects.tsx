/* eslint-disable @typescript-eslint/no-explicit-any */

export const SelectBoolean = ({ onChange, value: fieldValue }: any) => {
  return (
    <select
      ref={(ref) => {
        if (ref) {
          ref.value = fieldValue;
        }
      }}
      onChange={(e) => {
        onChange(JSON.parse(e.target.value));
      }}
    >
      <option value={'true'} label="true">
        true
      </option>
      <option value={'false'} label="false">
        false
      </option>
    </select>
  );
};

export const SelectOptions = ({ fieldSchema, onChange, value: fieldValue }: any) => {
  return (
    <select
      ref={(ref) => {
        if (ref) {
          ref.value = fieldValue;
        }
      }}
      defaultValue={'string'}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      {fieldSchema.options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
