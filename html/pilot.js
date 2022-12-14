/**
 * 도시 선택
 * @param {*} None

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

 * 도시 선택(2)
 * @param {*} None
 
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
*/

/**
 * 선택한 도시 가져오기.
 * @param {*} None
 */
 function getSelectedCity()
 {

    var eleCity = document.getElementById("myCity");
     var selValue;
     var selText;
 
     selValue = eleCity.options[eleCity.selectedIndex].value;
     selText = eleCity.options[eleCity.selectedIndex].text;
 
    return selText;

 }

 /**
 * 현재일자 가져오기. [yyyy.mm.dd hh:mm:ss]
 * @param {*} None
 */
   
  function getDisplayDate()
  {
    try {
      var d = new Date();
      var year = d.getFullYear();
      var mm = ((d.getMonth()+1) > 9) ? d.getMonth()+1 : "0" + d.getMonth()+1; 
      var dd = (d.getDate() > 9) ? d.getDate() : "0" + d.getDate();

      var hh = (d.getHours() > 9) ? d.getHours() : "0" + d.getHours();
      var mi = (d.getMinutes() > 9) ? d.getMinutes() : "0" + d.getMinutes();
      var sec = (d.getSeconds() > 9) ? d.getSeconds() : "0" + d.getSeconds();

      var retDate = year + "." + mm + "." + dd + " " + hh + ":" + mi + ":" + sec;
    } catch(e) {
      console.log(e);
    }
    return retDate;
  }

/**
 * 선택결과 출력하기
 * @param {*} None
 */
function display()
{
   var d = getDisplayDate();
   var content = document.getElementById("content");
   var html = "<p>출력일시 : " + d + "</p>";
   html += "<p>선택한 도시 : " + getSelectedCity() + "</p>";
   content.innerHTML = html;
}
/**
 * 출력 지우기
 * @param {*} None
 */
function erase()
{
    var content = document.getElementById("content");
    content.innerHTML = "";
}
