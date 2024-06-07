import crGitRepositoryHref from './crGitRepositoryHref';
import crGitRepositoryCaption from './crGitRepositoryCaption';

import checkResponseJson from './checkResponseJson';
import CellValue from '../CellValue';
import Link from '../../zhn/Link';
import { CL_SOURCE_LINK } from '../../styles/CL';

const S_ML_8 = { marginLeft: 8 }
, S_MR_24 = { marginRight: 24 }

, API_URL = 'https://bundlephobia.com/result?p='

, _crBundleHref = (
  name,
  version
) => `${API_URL}${name}@${version}`
, _toKbStr = sizeByte => (sizeByte/1024).toFixed(1);

const BundleInfo = ({
  json
}) => {
  const result = checkResponseJson(json);
  if (result !== true) {
    return result;
  }

  const {
    name,
    version,
    gzip,
    size,
    dependencyCount,
    description,
    repository
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
     <div style={S_ML_8}>
       {description}
     </div>
     <div style={S_ML_8}>
       <Link
          href={gitHref}
          className={CL_SOURCE_LINK}
          style={S_MR_24}
       >
         {gitCaption}
       </Link>
       <Link
          href={bundleHref}
          className={CL_SOURCE_LINK}
        >
          Bundelphobia Link
        </Link>
     </div>
    </>
  );
};

export default BundleInfo
