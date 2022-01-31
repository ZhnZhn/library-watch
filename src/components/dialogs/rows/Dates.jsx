import { Component } from 'react';
import InputDate from '../../zhn-atoms/InputDate';
import styles from '../../styles/DialogStyles'
import Caption from './Caption'

const ERROR_FORMAT = "YYYY-MM-DD format must be"
    , FROM_DATE = "From Date"
    , TO_DATE = "To Date"
    , ERROR_FROM_NEAR_TO = "From Date is near that To Date";

class Dates extends Component {
  /*
  static propTypes = {
    isShowLabels: PropTypes.bool,
    initFromDate: PropTypes.string,
    initToDate: PropTypes.string,
    onTestDate: PropTypes.func,
    msgOnNotValidFormat: PropTypes.func
  }
  */
  static defaultProps = {
    isShowLabels: true,
    msgOnNotValidFormat: item => `${item} is not in valid format`
  }

  _refFromDate = c => this.fromDate = c
  _refToDate = c => this.toDate = c

  render(){
    const {
      isShowLabels,
      initFromDate,
      initToDate,
      onTestDate
    } = this.props;
    return (
        <div>
          <div style={styles.rowDiv}>
            <Caption
              is={isShowLabels}
              style={styles.labelSpan}
              caption="From Date"
            />
            <InputDate
               ref={this._refFromDate}
               initValue={initFromDate}
               errorMsg={ERROR_FORMAT}
               onTest={onTestDate}
            />
         </div>
         <div style={styles.rowDiv}>
           <Caption
              is={isShowLabels}
              style={styles.labelSpan}
              caption="To Date"
            />
            <InputDate
                 ref={this._refToDate}
                 initValue={initToDate}
                 errorMsg={ERROR_FORMAT}
                 onTest={onTestDate}
            />
         </div>
       </div>
    );
  }

  getValues(){
    return {
      fromDate: this.fromDate.getValue(),
      toDate: this.toDate.getValue()
    };
  }

  setValues(fromDate, toDate){
     this.fromDate.setValue(fromDate)
     this.toDate.setValue(toDate)
  }

  getValidation(){
    const { msgOnNotValidFormat } = this.props
        ,  datesMsg = [];
    if (!this.fromDate.isValid()) { datesMsg.push(msgOnNotValidFormat(FROM_DATE)) }
    if (!this.toDate.isValid())   { datesMsg.push(msgOnNotValidFormat(TO_DATE)) }

    if (this.fromDate.getValue().trim() > this.toDate.getValue().trim() ) {
      datesMsg.push(ERROR_FROM_NEAR_TO)
    }

    if (datesMsg.length>0){
      return { isValid: false, datesMsg };
    }
    return { isValid : true };
  }

  focusInput(){
    this.fromDate.focusInput()
  }

  focusNotValidInput(){
    if (!this.fromDate.isValid()){
       this.fromDate.focusInput()
       return true;
    }
    if (!this.toDate.isValid()){
      this.toDate.focusInput()
      return true;
    }
    return false;
  }
}

export default Dates
