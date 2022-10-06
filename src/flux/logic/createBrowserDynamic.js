import SourceBrowserDynamic from '../../components/browser-container/SourceBrowserDynamic';

const createBrowserDynamic = ({
  browserType,
  store,
  caption,
  sourceMenuUrl,
  rowClass
}) => (
  <SourceBrowserDynamic
    isInitShow={true}
    key={browserType}
    browserType={browserType}
    store={store}
    caption={caption}
    sourceMenuUrl={sourceMenuUrl}
    rowClass={rowClass}
 />
);

export default createBrowserDynamic
