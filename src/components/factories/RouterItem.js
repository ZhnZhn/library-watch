import fItemTest from './fItemTest';
import fGitHubRecentRelease from './fGitHubRecentRelease';
import fGitHubRecentTag from './fGitHubRecentTag';
import fGitHubSearchInfo from './fGitHubSearchInfo';
import fGitHubCommits from './fGitHubCommits';
import fGitHubIssues from './fGitHubIssues';

import fNpmRecentDownloads from './fNpmRecentDownloads';
import fNpmDownloads from './fNpmDownloads';
import fNpmTopVersions from './fNpmTopVersions';

import fStackTaggedQuestions from './fStackTaggedQuestions';

import fStatcounter from './fStatcounter';

const RouterItem = {
  DEFAULT : fItemTest,
  GH_RELEASE_RECENT : fGitHubRecentRelease,
  GH_TAGS : fGitHubRecentTag,
  GH_SEARCH_INFO : fGitHubSearchInfo,
  GH_COMMITS : fGitHubCommits,
  GH_ISSUES : fGitHubIssues,
  GH_PULL_REQUESTS : fGitHubIssues,

  NPM_DOWNLOADS_RECENT_MONTH : fNpmRecentDownloads,
  NPM_DOWNLOADS : fNpmDownloads,
  NPM_TOP_VERSIONS : fNpmTopVersions,

  SE_QUESTIONS : fStackTaggedQuestions,
  SE_SEARCH_QUESTIONS : fStackTaggedQuestions,

  ST_OSVERSION : fStatcounter
};

export default RouterItem
