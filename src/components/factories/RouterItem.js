
import fItemTest from './fItemTest';
import fGitHubRecentRelease from './fGitHubRecentRelease';
import fGitHubRecentTag from './fGitHubRecentTag';
import fGitHubSearchInfo from './fGitHubSearchInfo';
import fGitHubCommits from './fGitHubCommits';
import fGitHubIssues from './fGitHubIssues';

import fNpmRecentMonthDownload from './fNpmRecentMonthDownload';

const RouterItem = {
  DEFAULT : fItemTest,
  GH_RELEASE_RECENT : fGitHubRecentRelease,
  GH_TAGS : fGitHubRecentTag,
  GH_SEARCH_INFO : fGitHubSearchInfo,
  GH_COMMITS : fGitHubCommits,
  GH_ISSUES : fGitHubIssues,
  GH_PULL_REQUESTS : fGitHubIssues,

  NPM_RECENT_MONTH : fNpmRecentMonthDownload
};

export default RouterItem
