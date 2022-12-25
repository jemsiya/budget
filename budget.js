
function budget(){

   // var valid = valid();

   // if(valid ==1){


    var total=0; 
    var savings=0;
    var amt = document.getElementById("amt").value;

    var fud = document.getElementById("fud").value;
    var uti = document.getElementById("uti").value;
    var insur = document.getElementById("insur").value;
    var insur = document.getElementById("insur").value;
    var rent = document.getElementById("rent").value;
    

    total = amt-fud-uti-insur-rent;
    savings= total*0.30;
    

    document.getElementById("result").innerHTML = 'Total Expence:'+total;
    document.getElementById("result_savings").innerHTML = 'You should have to save:'+savings;

   // }

   
} 

// function valid(){

//     var error =1;

//     var amt = document.getElementById("amt").value;
//     var fud = document.getElementById("fud").value;
//     var uti = document.getElementById("uti").value;
//     var insur = document.getElementById("insur").value;

//     if(amt == ''){
//        alert('Plese enter amount of salray');
//         error =0;

//     }else if(fud==''){
//         alert('Plese enter amount of fud');
//         error =0;
//     }else if(uti==''){
//         alert('Plese enter amount of uti');
//         error =0;
//     }else if(insur==''){
//         alert('Plese enter amount of indsur');
//         error =0;
        
//     } 

//     return error;

// }