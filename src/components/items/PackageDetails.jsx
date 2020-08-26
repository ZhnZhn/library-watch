import React from 'react'

import CL from '../styles/CL'

const S = {
  ERR: {
    color: '#f44336',
    fontWeight: 'bold'
  },
  CELL: {
    display: 'inline-block',
    marginLeft: 8
  },
  CAPTION: {
    fontWeight: 600
  },
  VALUE: {
    textAlign: 'center'
  },
  REPO: {
    paddingTop: 4,
    paddingLeft: 8
  },
  REPO_LINK: {
    marginRight: 24
  }
};

const ErrMsg = ({ errMsg }) => (
  <div style={S.ERR}>{errMsg}</div>
);

const CellValue = ({ caption='', value='N/A' }) => (
  <div style={S.CELL}>
    <div style={S.CAPTION}>{caption}</div>
    <div style={S.VALUE}>{value}</div>
  </div>
);

const Link = ({ style, href, caption}) => href
 ? (<a target="_blank"
     className={CL.SOURCE_LINK}
     style={style}
     href={href}
    >{caption}</a>)
 : null;

const _crRepositoryCaption = href =>
  href.indexOf('https://github.com') !== -1
    ? 'GitHub Repository'
    : 'Repository';

const RowLinks = ({ repoHref, hpHref }) => {
 if (!repoHref && !hpHref) {
   return null;
 }
 return (
   <div style={S.REPO}>
     <Link
        style={S.REPO_LINK}
        href={repoHref}
        caption={_crRepositoryCaption(repoHref)}
     />
     <Link
        href={hpHref}
        caption="HomePage"
     />
   </div>
 );
}

const _trimTo5 = n => (''+n).substr(0, 5);
const _toYear = strDate => (''+strDate)
 .split('T')[0] || '';

const _crRepositoryHref = ({ type, url }) => type === 'git'
 ? url.replace('git+','').replace('.git', '').replace('git://','https://')
 : void 0;

const PackageDetails = ({ json }) => {
  const { errMsg, analyzedAt, collected, score } = json || {}

  if (errMsg) {
    return (<ErrMsg errMsg={errMsg} />);
  }

  const { github, metadata } = collected || {}
  , { starsCount, issues, homepage } = github || {}
  , { openCount } = issues || {}
  , { version, license, repository } = metadata || {}
  , { final } = score || {}
  , _repositoryHref = _crRepositoryHref(repository || {})
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
