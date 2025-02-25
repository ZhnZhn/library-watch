import { crLinearScale } from "../charts/ChartConfigFactories";
import NpmDownloads from "../items/npm/NpmDownloads";

const _crElementPropsDf = () => ({
  type: "line",
  options: {
    ...crLinearScale("y")
  }
});

const fNpm = (
  transformDownloads,
  crElementProps=_crElementPropsDf
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
