
import GitHubApi from './GitHubApi';
import NpmApi from './NpmApi';
import StackExchangeApi from './StackExchangeApi';

const RouterApi = {
  GH : GitHubApi,
  NPM : NpmApi,
  SE : StackExchangeApi
}

export default RouterApi
