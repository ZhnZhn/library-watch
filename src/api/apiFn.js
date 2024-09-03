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
