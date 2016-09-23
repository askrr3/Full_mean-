var person = {
  name : 'allen',
  var distance_travels = 0;

  
    say_name: function(){
      console.log(person.name) ;
    },

    say_something: function(name){
      console.log(name, 'says: I am cool') ;
    },

    walk: function(name){
      console.log(name, 'iswalking')
      person.distance_travels += 3 ;
    },

    run: function(name){
      console.log(name, 'is running')
      person.distance_travels += 10 ;
    },

    crawl: function(name){
      console.log(name, 'is crawling')
      person.distance_travels +=1 ;
    }

}
