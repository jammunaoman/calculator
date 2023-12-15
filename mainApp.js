var doOperation=(type)=>{
  var firstval=document.querySelector('#fval').value;   
  var secondval=document.querySelector('#sval').value;
  
 var result;
 switch(type){
    case 'add':
        result =closur.gs(firstval, secondval);
        break;
                                        
    case 'sub':
        result=closur.gm(firstval, secondval);
        break;

     case 'mul':
        result=closur.gmn(firstval, secondval);
            break;

     case 'div':
        result=closur.gd(firstval, secondval);
           break;
    };

    var msg='the ' + type + " of two number is " + result;
    document.querySelector('.rblock').innerText=msg;
};