import SourceBrowserDynamic from '../../components/browser-container/SourceBrowserDynamic';

const createBrowserDynamic = ({
  browserType,
  caption,
  sourceMenuUrl,
  rowClass
}) => (
  <SourceBrowserDynamic
    isInitShow={true}
    key={browserType}
    browserType={browserType}
    caption={caption}
    sourceMenuUrl={sourceMenuUrl}
    rowClass={rowClass}
 />
);

export default createBrowserDynamic
