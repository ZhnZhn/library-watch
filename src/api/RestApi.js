

import RouterApi from './RouterApi';

const RestApi = {
   getApi(option){
     const { requestType } = option
         , id = requestType.split('_')[0]
     return RouterApi[id];
   },

   getRequestUrl(option){
     const api = RestApi.getApi(option);
     return api.getRequestUrl(option);
   },

   getOnCheckResponse(option){
     const api = RestApi.getApi(option);
     return api.getOnCheckResponse();
   },

   crKey(option){
     const api = RestApi.getApi(option);
     return api.crKey(option);
   },

   checkResponse(){
     return true;
   }
};

export default RestApi
