
export default ({
   uri, onCatch
 }) => {
  return Promise.resolve().then(() => {
       return fetch(uri);
    })
    .then((response) => {
      const { status, statusText } = response;
      if (status>=200 && status<=400){
        return response.json();
      } else if (status>400 && status<500){
         throw { errCaption : 'Request Error', message : `${status} : ${statusText}` }
      } else if (status>=500 && status<600){
         throw { errCaption : 'Response Error', message : `${status} : ${statusText}` }
      }
    })
    .then((json) => {
       return json;
    })
    .catch((error) => {
       onCatch({ error })
    })
}
