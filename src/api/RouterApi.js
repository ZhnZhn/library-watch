import CrateApi from './CrateApi';
import GitHubApi from './GitHubApi';
import NpmApi from './NpmApi';
import StackExchangeApi from './StackExchangeApi';
import StatcounterApi from './StatCounterApi';

const RouterApi = {
  CR: CrateApi,
  GH : GitHubApi,
  NPM : NpmApi,
  SE : StackExchangeApi,
  ST : StatcounterApi
};

export default RouterApi
