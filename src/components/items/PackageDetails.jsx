import React from 'react'

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

const CellValue = ({ caption='', value='' }) => (
  <div style={S.CELL}>
    <div style={S.CAPTION}>{caption}</div>
    <div style={S.VALUE}>{value}</div>
  </div>
);

const _trimTo5 = n => (''+n).substr(0, 5);
const _toYear = strDate => (''+strDate)
 .split('T')[0] || '';

const PackageDetails = ({ json={} }) => {
  const { analyzedAt, collected={}, score={} } = json
  , { github={}, metadata={} } = collected
  , { starsCount, issues={} } = github
  , { openCount } = issues
  , { version, license } = metadata
  , { final } = score;
  return (
    <div>
      <CellValue
        caption="stars"
        value={starsCount}
      />
      <CellValue
        caption="issues"
        value={openCount}
      />
      <CellValue
        caption="version"
        value={version}
      />
      <CellValue
        caption="score"
        value={_trimTo5(final)}
      />
      <CellValue
        caption="license"
        value={license}
      />
      <CellValue
        caption="onDate"
        value={_toYear(analyzedAt)}
      />
    </div>
  );
}

export default PackageDetails
