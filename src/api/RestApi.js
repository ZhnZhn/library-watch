import RouterApi from './RouterApi';

const RestApi = {
   getApi: option => RouterApi[option.requestType.split('_')[0]],

   getRequestUrl: option => RestApi
     .getApi(option)
     .getRequestUrl(option),

   getOnCheckResponse: option => RestApi
     .getApi(option)
     .checkResponse,

   crKey: option => RestApi
     .getApi(option)
     .crKey(option)
};

export default RestApi
