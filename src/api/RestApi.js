import RouterApi from './RouterApi';

const RestApi = {
   getApi: option => RouterApi[option.requestType.split('_')[0]],

   crKey: option => RestApi
     .getApi(option)
     .crKey(option)
};

export default RestApi
