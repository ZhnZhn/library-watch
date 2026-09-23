import { isFn } from '../utils/isTypeFn';

export const fGetRequestUrl = (
  hmRoutes,
  dfRoute
) => option => {
  const { requestType=dfRoute } = option
  , crRequestUrl = requestType && hmRoutes[requestType];
  return isFn(crRequestUrl)
    ? crRequestUrl(option)
    : void 0;
}

export const crErrMsg = (
  errCaption,
  message
) => ({
  errCaption,
  message
})

const _crKeyDf = ({
  repo,
  requestType
}) => `${repo}_${requestType}`;

export const crProviderApi = (
  getRequestUrl,
  checkResponse,
  crKey = _crKeyDf
) => ({
  getRequestUrl,
  crKey,
  checkResponse
})

export const addCrOptionFetchTo = (
  providerApi,
  crOptionFetch
) => {
  providerApi.crOptionFetch = crOptionFetch
  return providerApi;
}
