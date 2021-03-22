'use struct';
let arr=[];
function Horns(animal){
    this.title=animal.title;
    this.image_url=animal.image_url;
    this.description=animal.description;
    this.keyword=animal.keyword;
    this.horns=animal.horns;
    arr.push(this);

}

const ajaxItem={
    method: "get",
  dataType: "json",
};

// $.ajax('data/page-1.json', ajaxItem).then(data =>{
//     data.forEach(element => {
//        let newAnimal = new Horns(element.animal);
//       Horns.arr.push(new Horns(animal));
//        newAnimal.renderClone();
//     });
    
// })
// }
$.ajax("data/page-1.json", ajaxItem).then((data) => {
    data.forEach((animal) => {
      let arr = new Horns(animal);
  
      // dogObject.renderManually();
      arr.renderClone();
    });
  });


Horns.prototype.render= function(){
    $("main").append(`
    <section id="hornInfo">
    <h2>${this.title}</h2>
    <img src="${this.image_url}" alt="">
    <p>${this.description}</p>
    // <h3>${this.horns}</h3>
    </section>
    
    `)
};

Horns.prototype.renderClone=function(){
let clone=$("#hornInfo").clone();
clone.find("h2").text(this.title);
clone.find("img").attr("src",this.image_url);
clone.find("p").text(this.description);
clone.find("h3").text(this.horns);
containerPerson.removeId('hornInfo');
containerPerson.attr("class", this.keyword);
}


