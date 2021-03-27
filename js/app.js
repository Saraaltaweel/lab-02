'use strict';

let keyArr = [];
let uniqueArray=[];
function Horns(animal){
    this.title=animal.title;
    this.image_url=animal.image_url;
    this.description=animal.description;
    this.keyword=animal.keyword;
    this.horns=animal.horns;
   

}
Horns.prototype.dropList = function(){
  keyArr.push(this.keyword);
  uniqueArray = [...new Set(keyArr)];
  console.log(uniqueArray);
  
};

const ajaxItem={
    method: 'get',
  dataType: 'json'
};


$.ajax('data/page-1.json', ajaxItem).then((data) => {
  data.forEach(animal => {
    let item = new Horns(animal);
    
    item.renderClone();
    item.dropList();

    
  });
  uniqueArray.forEach(element =>{
    $('select').append(`<option value="${element}">${element}</option>`);
  })

});
 

Horns.prototype.renderClone=function(){
  // uniqueArray.forEach(element =>{
  //   $('select').append(`<option value="${element}">${element}</option>`);
  // })
  // let allOption=$('<option></option>').text(uniqueArray);
  // $('select').append(allOption);
let clone=$("#hornInfo").clone();

clone.find("h2").text(this.title);
clone.find("img").attr("src",this.image_url);
clone.find("p").text(this.description);
clone.attr("class", this.keyword);
clone.attr("id", this.keyword);
clone.find("h3").text(this.horns);
$('main').append(clone);
}
  // )}

$(document).ready(function(){

  $('select').click('change',function(){
    let selectItem = this.value;
    $('section').hide();
    $(`.${selectItem}`).show();
  });
});
