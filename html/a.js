/**
 * 도시 선택
 * @param {*} None
 */
 function selectCity()
 {  
     var eleCity = document.getElementById("myCity");
     var optionsList = eleCity.options;
     var selValue;
     var selText;
     for(ii=0; ii < optionsList.length; ii++) {
         var opt = optionsList[ii];       
         if(opt.selected == true) {
             selValue = opt.value;
             selText = opt.text;
             break;
         }
     }
     var eleResult = document.getElementById("city");
     eleResult.innerText = selText;
 }

 /**
 * 도시 선택(2)
 * @param {*} None
 */
  function selectCity2()
  {
    
      var eleCity = document.getElementById("myCity");
      var selValue;
      var selText;
  
      selValue = eleCity.options[eleCity.selectedIndex].value;
      selText = eleCity.options[eleCity.selectedIndex].text;
  
      var eleResult = document.getElementById("city");
      eleResult.innerText = selText;
  
  }
 
 

