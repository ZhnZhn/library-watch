import {
  isNumber,
  isStr
} from '../../../utils/isTypeFn';

import crGitRepositoryHref from './crGitRepositoryHref';
import crGitRepositoryCaption from './crGitRepositoryCaption';

import checkResponseJson from './checkResponseJson';
import CellValue from '../CellValue';
import { SourceLink } from '../../zhn/Link';

const S_REPO = { padding: '4px 0 0 8px' }
, S_REPO_LINK = { marginRight: 24 };

const RowLinks = ({
  repoHref,
  hpHref
}) => !repoHref && !hpHref
? null
: (
   <div style={S_REPO}>
     <SourceLink       
        style={S_REPO_LINK}
        href={repoHref}
     >
      {crGitRepositoryCaption(repoHref)}
     </SourceLink>
     <SourceLink      
        href={hpHref}
     >
      Home Page
     </SourceLink>
   </div>
 );


const _trimTo5 = n => isNumber(n)
    ? (''+n).substring(0, 5)
    : ''
, _toYear = strDate => isStr(strDate)
    ? strDate.split('T')[0]
    : ''
, _crRepositoryHref = ({
  type,
  url
}) => type === 'git'
   ? crGitRepositoryHref(url)
   : void 0;

const PackageDetails = ({ json }) => {
  const result = checkResponseJson(json);
  if (result !== true) {
    return result;
  }

  const {
    analyzedAt,
    collected,
    score
  } = json
  , {
    github,
    metadata
  } = collected || {}
  , {
    starsCount,
    issues,
    homepage
  } = github || {}
  , { openCount } = issues || {}
  , {
    version,
    license,
    repository
  } = metadata || {}
  , { final } = score || {}
  , _repositoryHref = _crRepositoryHref(repository || {});

  return (
    <>
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
      <RowLinks
        repoHref={_repositoryHref}
        hpHref={homepage}
      />
    </>
  );
};

export default PackageDetails
