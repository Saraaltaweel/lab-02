'use strict';
function Horns(animal){
    this.title=animal.title;
    this.image_url=animal.image_url;
    this.description=animal.description;
    this.keyword=animal.keyword;
    this.horns=animal.horns;
   

}


const ajaxItem={
    method: 'get',
  dataType: 'json'
};


$.ajax('data/page-1.json', ajaxItem).then((data) => {
  data.forEach(animal => {
    let item = new Horns(animal);
    item.renderClone();
  });
});

Horns.prototype.renderClone=function(){
  let allOption=$('<option></option>').text(this.keyword);
  $('select').append(allOption);
let clone=$("#hornInfo").clone();
$('main').append(clone);
clone.find("h2").text(this.title);
clone.find("img").attr("src",this.image_url);
clone.find("p").text(this.description);
clone.attr("class", this.keyword);
clone.attr("id", this.keyword);
clone.find("h3").text(this.horns);

}

$(document).ready(function(){

  $('select').click('click',function(){
    let selectItem = this.value;
    $('section').hide();
    $(`.${selectItem}`).show();
  });
});
