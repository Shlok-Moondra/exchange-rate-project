const BASE_URL="https://latest.currency-api.pages.dev/v1/currencies/eur.json";

const dropdowns=document.querySelectorAll(".dropdown select");

for(let select of dropdowns){
    for(code in countryList){
    let newOption=document.createElement("option");
    newOption.innerText=code;
    newOption.value=code;
    if(select.name==="FROM" && code==="USD"){
        newOption.selected="selected";
    }else if(select.name==="TO" && code==="INR"){
        newOption.selected="selected";
    }
    select.append(newOption);

}
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });


}
const updateFlag=(element)=>{
 let code=element.value;
 let countryCode=countryList[code];
 let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
 let img=element.parentElement.querySelector("img");
 img.src=newSrc;
}

btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount select");
    let amtval=amount.value;
    if(amtval==="" || amtval<1){
        amtval=1 ;
        amount.value="1";
    }



});