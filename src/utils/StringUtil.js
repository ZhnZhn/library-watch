
const StringUtil = {

  setFirstToUpperCase(msg){
    if (!msg) {
      return msg;
    }
    
    return msg.charAt(0).toUpperCase() + msg.substring(1);
  }

};

export default StringUtil
