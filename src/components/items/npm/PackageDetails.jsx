import crGitRepositoryHref from './crGitRepositoryHref';
import crGitRepositoryCaption from './crGitRepositoryCaption';

import checkResponseJson from './checkResponseJson';
import CellValue from '../CellValue';
import Link from '../Link';

const S_REPO = { padding: '4px 0 0 8px' }
, S_REPO_LINK = { marginRight: 24 };

const RowLinks = ({
  repoHref,
  hpHref
}) => {
 if (!repoHref && !hpHref) {
   return null;
 }
 return (
   <div style={S_REPO}>
     <Link
        style={S_REPO_LINK}
        href={repoHref}
        caption={crGitRepositoryCaption(repoHref)}
     />
     <Link
        href={hpHref}
        caption="HomePage"
     />
   </div>
 );
}

const _isStr = str => typeof str === 'string'
, _isNumber = n => typeof n === 'number'
, _trimTo5 = n => _isNumber(n)
    ? (''+n).substring(0, 5)
    : ''
, _toYear = strDate => _isStr(strDate)
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

  const { analyzedAt, collected, score } = json
  , { github, metadata } = collected || {}
  , { starsCount, issues, homepage } = github || {}
  , { openCount } = issues || {}
  , { version, license, repository } = metadata || {}
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
