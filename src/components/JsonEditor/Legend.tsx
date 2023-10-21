import { CaretDownOutlined, PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';

const Legend = () => {
  return (
    <div
      style={{
        marginBottom: '10px',
        width: '100%',
        padding: '8px',
        border: '1px solid #BBB',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ fontWeight: 'bold', borderBottom: '1px solid #CCC' }}>Legend</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div
          style={{
            display: 'flex',
            border: '1px solid #DDD',
            borderRadius: '5px',
            padding: '5px',
            margin: '5px',
            marginBottom: '0px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #DDD',
              borderRadius: '2px',
              padding: '2px',
            }}
          >
            <CaretDownOutlined rev="" />
          </div>
          <span>&nbsp; Expanded Button</span>
        </div>

        <div
          style={{
            display: 'flex',
            border: '1px solid #DDD',
            borderRadius: '5px',
            padding: '5px',
            margin: '5px',
            marginBottom: '0px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #DDD',
              borderRadius: '2px',
              padding: '2px',
            }}
          >
            <CaretDownOutlined rev="" style={{ transform: 'rotate(270deg)' }} />
          </div>
          <span>&nbsp; Minified Button</span>
        </div>

        <div
          style={{
            display: 'flex',
            border: '1px solid #DDD',
            borderRadius: '5px',
            padding: '5px',
            margin: '5px',
            marginBottom: '0px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #DDD',
              borderRadius: '2px',
              padding: '2px',
            }}
          >
            <PlusSquareOutlined rev="" style={{ color: '#1E88E5' }} />
          </div>
          <span>&nbsp; Add Button</span>
        </div>

        <div
          style={{
            display: 'flex',
            border: '1px solid #DDD',
            borderRadius: '5px',
            padding: '5px',
            margin: '5px',
            marginBottom: '0px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #DDD',
              borderRadius: '2px',
              padding: '2px',
            }}
          >
            <MinusSquareOutlined rev="" style={{ color: '#e74c3c' }} />
          </div>
          <span>&nbsp; Remove Button</span>
        </div>

        <div
          style={{
            display: 'flex',
            border: '1px solid #DDD',
            borderRadius: '5px',
            padding: '5px',
            margin: '5px',
            marginBottom: '0px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #DDD',
              borderRadius: '2px',
              padding: '2px',
            }}
          >
            <MinusSquareOutlined rev="" style={{ color: 'gray' }} />
          </div>
          <span>&nbsp; Remove Button (disabled)</span>
        </div>
      </div>
    </div>
  );
};

export default Legend;
