import ErrMsg from './ErrMsg';
import CellValue from './CellValue';
import Link from './Link';

const S = {
  ML_8: {
    marginLeft: 8
  }
};

const C = {
  URI: 'https://bundlephobia.com/result?p='
};

const _crHref = (name, version) => `${C.URI}${name}@${version}`;
const _toKbStr = sizeByte => (sizeByte/1024).toFixed(1)


const BundleInfo = ({ json }) => {
  if (!json) { return null; }

  const { errMsg } = json;
  if (errMsg) {
    return (<ErrMsg errMsg={errMsg} />);
  }

  const {
    name, version, gzip, size, dependencyCount,
    description
  } = json
  , href = _crHref(name, version);

  return (
    <>
     <div>
       <CellValue caption="name" value={name} />
       <CellValue caption="version" value={version} />
       <CellValue caption="size kB" value={_toKbStr(size)} />
       <CellValue caption="gzip kB" value={_toKbStr(gzip)} />
       <CellValue caption="dependencyCount" value={dependencyCount} />
     </div>
     <div style={S.ML_8}>
       {description}
     </div>
     <div style={S.ML_8}>
       <Link href={href} caption="Bundelphobia Link" />
     </div>
    </>
  );
};

export default BundleInfo
