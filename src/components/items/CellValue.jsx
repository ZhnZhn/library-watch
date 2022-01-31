
const S_CELL = {
  display: 'inline-block',
  marginLeft: 8
}
, S_CAPTION = { fontWeight: 600 }
, S_VALUE = { textAlign: 'center' };

const CellValue = ({
  caption='',
  value='N/A'
}) => (
  <div style={S_CELL}>
    <div style={S_CAPTION}>{caption}</div>
    <div style={S_VALUE}>{value}</div>
  </div>
);

export default CellValue
