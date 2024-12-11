import NpmDownloads from "../items/npm/NpmDownloads";

const FN_NOOP = () => ({})
, fNpm = (
  transformDownloads,
  crElementProps=FN_NOOP
) => (
  options
) => {
  const {
    option,
    json,
    parentProps,
    onMoveToTop,
    onCloseItem
  } = options;
  return (<NpmDownloads
     key={option.key}
     packageName={json.package}
     caption={json.package}
     packageLink={option.packageLink}
     requestType={option.requestType}

     //sumDownloads={sumDownloads}
     //fromDate={fromDate}
     //toDate={toDate}
     //labels={labels}
     //data={data}
     {...transformDownloads(json.downloads)}

     onMoveToTop={onMoveToTop}
     onCloseItem={onCloseItem}
     {...crElementProps(options)}
     {...parentProps}
  />);
};

export default fNpm
