

const zhnSpy = {

  createValueSpy(){
     let calledCounter = 0;
     let calledWithValue = undefined;
     const fn = function(value){
        calledCounter += 1;
        calledWithValue = value;
     }

     fn.isCalledOnce = function(){
       return calledCounter === 1;
     }
     fn.isCalledWithValue = function(value){
       return calledWithValue === value;
     }

     return fn;
  }

}

export default zhnSpy
