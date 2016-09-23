
// yellow red and black
function personConstructor(name, cohort, belt){
  this.name = name
  this.cohort = cohort
  this.belt = belt

  this.levelUp = function(){
    if (this.belt == 'yellow'){
      this.belt = 'red'
      return this.belt;
    }
    else if (this.belt == 'red'){
      this.belt = 'black'
      return this.belt;
    }
    else{
      console.log('youre the master');
    }
  }
}

var allen = new personConstructor('allen', 'one', 'yellow');
console.log(allen.belt);
allen.levelUp();
console.log(allen.belt);
allen.levelUp();
console.log(allen.belt);





// console.log(person.crawl('lee'))


// var allen = personconstructor('Allen')

// allen ={
//   name:'Allen',
//
// }
