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


// $.ajax('data/page-1.json', ajaxItem).then((data) => {
//   data.forEach(animal => {
//     let item = new Horns(animal);
//     item.renderClone();
//   });
// });

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



Horns.prototype.toHtml = function() {
  let template = $('#mustache-template').html();
  
  let html = Mustache.render(template, this);
  return html;
}


// $.ajax('data/page-2.json', ajaxItem).then((data) => {
// data.forEach(animal => {
//   let item = new Horns(animal);
//   item.renderClone2();
// });
// });



Horns.prototype.renderClone2=function(){
  let allOption=$('<option></option>').text(this.keyword);
  $('select').append(allOption);
let clone=$("#hornInfo2").clone();
$('main').append(clone);
clone.find("h2").text(this.title);
clone.find("img").attr("src",this.image_url);
clone.find("p").text(this.description);
clone.attr("class", this.keyword);
clone.attr("id", this.keyword);
clone.find("h3").text(this.horns);

}
$('.btn').on('click',function(){
 $('page1')==true;
  {
    $.ajax('data/page-1.json', ajaxItem).then((data) => {
      data.forEach(animal => {
        let item = new Horns(animal);
        item.renderClone();
      });
    });
  }

})

$('.btn').on('click',function(){
  $('page2')==true;
   {
    $.ajax('data/page-2.json', ajaxItem).then((data) => {
      data.forEach(animal => {
        let item = new Horns(animal);
        item.renderClone2();
      });
      });
   }
 
 
 
 })


// 'use strict';
// let allInfo = [];
// $(document).ready(function(){
//     // Constructor Building
//   function ZooGallery(animal) {
//       this.title = animal.title;
//     this.image_url = animal.image_url;
//     this.description = animal.description;
//     this.keyword = animal.keyword;
//     this.horns = animal.horns;
//     allInfo.push(this);
// }
// //===========================================
// ZooGallery.prototype.picViewer = function () {
//     let Options = $('<option></option>').text(this.keyword);
//     $('select').append(Options);
//     let Template = $('#myTemplate').html();
//     let htmlText = Mustache.render(Template, this);
//     $('#second-page').append(htmlText);
// };
// //============================================
// // ajax setup
// const ajaxSettings = {
//     method: 'get',
//     dataType: 'json'
// };
//   const pageView = (pageNum) => {
//       $.ajax(`data/page-${pageNum}.json`, ajaxSettings).then(data => {
//     data.forEach(myZoo => {
//       let pet = new ZooGallery(myZoo);
//       pet.picViewer();
//     });
//   });
//  };
//  pageView(1);
//  // keyword filter
//   $('select').on('change', function(){
//     let selected = this.value;
//     $('#second-page').hide();
//     $(`.${selected}`).show();
//   });
//  const changer = () =>{
//   $('.page1').on('click', function(){
//     $('#second-page').hide('');
//     $('#second-page').show('');
//     // $('#second-page').toggle('.ANM');
//     $('#second-page').html('');
//     pageView(1);
//   });
//   $('.page2').on('click', function(){
//     $('#second-page').hide("");
//     $('#second-page').show("");
//     $('#second-page').html("");
//     pageView(2);
//   });
//  }
//  changer();
// });