
const _domParser = (DOMParser)
         ? new DOMParser()
         : {
             parseFromString: (input) => {
                return { documentElement : { textContent : input } };
              }
           }

const DomUtil = {

  htmlDecode(input=''){
     const doc = _domParser.parseFromString(input, "text/html");
     return doc.documentElement.textContent;
  }

};

export default DomUtil
