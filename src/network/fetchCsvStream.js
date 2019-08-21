import csv from 'papaparse';


const fetchCsvStream = ({
  uri,
  option, onFetch, onCompleted,
  onCatch, onFailed,
  _crErr,
  _nowTime, _doneOk, _doneFailure
}) => fetch(uri)
    .then(response => {
      if (response.body) {
        const _reader = response.body.getReader();
        return _reader.read();
      } else {
         throw _crErr(response);
      }
    })
    .then(result => {
      const _str = String.fromCharCode(...result.value);
      return csv.parse(_str, { header: true });
    })
    .then(json => {
      onFetch({ json, option, onCompleted });
      _doneOk(_nowTime)
    })
    .catch(error => {
      onCatch({ error, option, onFailed })
     _doneFailure(_nowTime)
   });

export default fetchCsvStream
