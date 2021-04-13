import crGitRepositoryHref from './crGitRepositoryHref';
import crGitRepositoryCaption from './crGitRepositoryCaption';

import checkResponseJson from './checkResponseJson';
import CellValue from './CellValue';
import Link from './Link';

const S = {
  REPO: {
    paddingTop: 4,
    paddingLeft: 8
  },
  REPO_LINK: {
    marginRight: 24
  }
};

const RowLinks = ({ repoHref, hpHref }) => {
 if (!repoHref && !hpHref) {
   return null;
 }
 return (
   <div style={S.REPO}>
     <Link
        style={S.REPO_LINK}
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

const _isStr = str => typeof str === 'string';
const _isNumber = n => typeof n === 'number';
const _trimTo5 = n => _isNumber(n)
  ? (''+n).substring(0, 5)
  : '';
const _toYear = strDate => _isStr(strDate)
  ? strDate.split('T')[0]
  : '';

const _crRepositoryHref = ({ type, url }) => type === 'git'
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
}

export default PackageDetails
