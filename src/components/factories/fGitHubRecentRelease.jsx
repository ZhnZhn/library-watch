import GitHubRecentRelease from "../items/GitHubRecentRelease";
import formatStrDate from "../../utils/formatStrDate";

const fGitHubRecentRelease = ({
  option,
  json,
  parentProps,
  onCloseItem,
  onWatchItem
}) => {
  const _version = json.tag_name || json.name || "empty"
  , _published_at = formatStrDate(json.published_at, "empty");
  return (<GitHubRecentRelease
    key={option.key}
    repo={option.repo}
    requestType={option.requestType}
    html_url={json.html_url}
    caption={`${option.repo} ${_version} ${_published_at}`}
    version={_version}
    published_at={_published_at}
    onCloseItem={onCloseItem}
    onWatchItem={onWatchItem}
    {...parentProps}
  />);
};

export default fGitHubRecentRelease
