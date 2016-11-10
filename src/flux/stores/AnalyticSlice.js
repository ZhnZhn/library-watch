
const _Logic = {
  sendItemEvent({ eventAction, eventLabel }){
    /* eslint-disable no-undef */
    if (window && window.ga && eventLabel){
      ga('send', {
        hitType : 'event',
        eventCategory : 'Item',
        eventAction : eventAction,
        eventLabel : eventLabel,
        eventValue : 1
      })
    }
    /* eslint-enable no-undef */
  }
};

const AnalyticSlice = {
  analyticSendEvent(option){
    _Logic.sendItemEvent(option);
  }
};

export default AnalyticSlice
