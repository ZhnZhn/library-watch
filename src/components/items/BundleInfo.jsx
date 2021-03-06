import crGitRepositoryHref from './crGitRepositoryHref';
import crGitRepositoryCaption from './crGitRepositoryCaption';

import checkResponseJson from './checkResponseJson';
import CellValue from './CellValue';
import Link from './Link';

const S = {
  ML_8: {
    marginLeft: 8
  },
  MR_24: {
    marginRight: 24
  }
};

const C = {
  URI: 'https://bundlephobia.com/result?p='
};

const _crBundleHref = (name, version) => `${C.URI}${name}@${version}`;
const _toKbStr = sizeByte => (sizeByte/1024).toFixed(1);

const BundleInfo = ({ json }) => {
  const result = checkResponseJson(json);
  if (result !== true) {
    return result;
  }

  const {
    name, version, gzip, size, dependencyCount,
    description, repository
  } = json
  , gitHref = crGitRepositoryHref(repository)
  , gitCaption = crGitRepositoryCaption(gitHref)
  , bundleHref = _crBundleHref(name, version);

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
       <Link href={gitHref} caption={gitCaption} style={S.MR_24} />
       <Link href={bundleHref} caption="Bundelphobia Link" />
     </div>
    </>
  );
};

export default BundleInfo
