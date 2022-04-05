import {
  useState,
  useCallback
} from '../../uiApi';

import useButtonLoad from './useButtonLoad';

import loadNpms from './loadNpms';
import loadBundle from './loadBundle';

import CL from '../../styles/CL';
import A from '../../zhn-atoms/A';
import PackageDetails from './PackageDetails';
import BundleInfo from './BundleInfo';

const BASE_NODEICO = "https://nodei.co/npm/"
, SUFFIX_NODEICO = ".png?downloads=true&downloadRank=true&stars=true"

, S_ML_8 = { marginLeft: 8 }
, S_ML_16 = { marginLeft: 16 }
, S_MB_16 = { marginBottom: 16 }
, S_MT_16 = { marginTop: 16 }
, S_BTN_DOWN_UP = {
  marginLeft: 16,
  padding: '4 0'
};

const NpmPackageInfo = ({
  isButtons,
  packageName,
  packageLink
}) => {
  const [{
    isLoadNodeIco,
    isShowNodeIco
  },
    setNodeIco
  ] = useState({
    isLoadNodeIco: false,
    isShowNodeIco: false
  })
  , [
    npmsJson,
    isLoadingNpms,
    isShowNmps,
    _hClickNpms
  ] = useButtonLoad(packageName, loadNpms)
  , [
    bundleJson,
    isLoadingBundle,
    isShowBundle,
    _hClickBundle
  ] = useButtonLoad(packageName, loadBundle)

  , _hClickNodeIco = useCallback(() => {
     setNodeIco(prevState => ({
       isLoadNodeIco: true,
       isShowNodeIco: !prevState.isShowNodeIco
     }))
  }, [])
  , _infoStyle = isButtons
        ? {...S_ML_8, ...S_MT_16}
        : S_ML_8;

  return (
    <>
     <A.ShowHide isShow={isButtons}>
      <div style={S_ML_16}>
        <a
           target="_blank"
           className={CL.SOURCE_LINK}
           href={packageLink}
        >
           NPM Link
        </a>
        <A.ButtonDownUp
          style={S_BTN_DOWN_UP}
          isUp={isShowNodeIco}
          caption="NodeICO"
          title="Package badge from Nodei.co"
          onClick={_hClickNodeIco}
        />
        <A.ButtonDownUp
          style={S_BTN_DOWN_UP}
          isUp={isShowNmps}
          isLoading={isLoadingNpms}
          caption="NPMS.IO"
          title="Click to load package info from npms.io"
          onClick={_hClickNpms}
        />
        <A.ButtonDownUp
          style={S_BTN_DOWN_UP}
          isUp={isShowBundle}
          isLoading={isLoadingBundle}
          caption="Bundlephobia.com"
          title="Click to load package info from bundlephobia.com"
          onClick={_hClickBundle}
        />
      </div>
     </A.ShowHide>

     <div style={_infoStyle}>
       <A.ShowHide isShow={isShowNodeIco} style={S_MB_16}>
         {
           isLoadNodeIco && <A.LinkImg
             href={packageLink}
             imgClass="node-ico"
             imgSrc={`${BASE_NODEICO}${packageName}${SUFFIX_NODEICO}`}
           />
         }
       </A.ShowHide>
       <A.ShowHide isShow={isShowNmps} style={S_MB_16}>
         <PackageDetails json={npmsJson} />
       </A.ShowHide>
       <A.ShowHide isShow={isShowBundle} style={S_MB_16}>
          <BundleInfo json={bundleJson} />
       </A.ShowHide>
     </div>
    </>
  );
};

export default NpmPackageInfo
