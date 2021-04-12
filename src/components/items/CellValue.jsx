
const S = {
  CELL: {
    display: 'inline-block',
    marginLeft: 8
  },
  CAPTION: {
    fontWeight: 600
  },
  VALUE: {
    textAlign: 'center'
  }
};

const CellValue = ({ caption='', value='N/A' }) => (
  <div style={S.CELL}>
    <div style={S.CAPTION}>{caption}</div>
    <div style={S.VALUE}>{value}</div>
  </div>
);

export default CellValue
