import { bindTo } from "../uiApi";
import GitHubRecentTag from "../items/GitHubRecentTag";
import fnFetchJson from "../../network/fnFetchJson";
import onCatch from "../../network/fnCatch";

//uri, option, onCheckResponse, onFetch, onCompleted, onFailed, onCatch

const API_URL = "https://api.github.com";

const fGitHubRecentTag = ({
  option,
  json,
  parentProps,
  onCloseItem,
  onWatchItem
}) => {
  const {
    repo,
    requestType,
    key
  } = option
  , tagItem = json[0] || [{name: "empty"}]
  , _onClickDetail = bindTo(fnFetchJson, {
      uri: `${API_URL}/repos/${repo}/commits/${tagItem.commit.sha}`,
      onCatch
    });
  return (<GitHubRecentTag
    key={key}
    repo={repo}
    requestType={requestType}
    version={tagItem.name}
    caption={`${repo} ${tagItem.name}`}
    onClickDetail={_onClickDetail}
    onCloseItem={onCloseItem}
    onWatchItem={onWatchItem}
    {...parentProps}
  />);
};

export default fGitHubRecentTag
