
import GitHubApi from './GitHubApi';
import NpmApi from './NpmApi';
import StackExchangeApi from './StackExchangeApi';
import StatCounterApi from './StatCounterApi';

const RouterApi = {
  GH : GitHubApi,
  NPM : NpmApi,
  SE : StackExchangeApi,
  ST : StatCounterApi
};

export default RouterApi
