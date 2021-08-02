

function unShow(){
  var showElements = document.querySelectorAll('.show')
  showElements.forEach(element =>{element.classList.remove('show')})

}

function myFunction(id){
  var x = document.getElementById(id);
  
  switch (id) {
      case id="Backgrounds":
        
        unShow();  // this will unshow all buttons
        x.classList.add('show');// to eliminate repetition you can use the x instead of document.getElementById(id);
        break;
      case id="Ears":
        unShow();
         x.classList.add('show');
        break;
      case id="Hair":
        unShow();
         x.classList.add('show');
        break;
      case id="Eyes":
        unShow();
         x.classList.add('show');
        break;
      case id="Mouth":
        unShow();
         x.classList.add('show');
        break;
      case id="Legs":
        unShow();
         x.classList.add('show');
        break;
      case  id="Neck":
        unShow();
         x.classList.add('show');
        break;
      case  id="Accessories":
        unShow();
         x.classList.add('show');
        }
        
     }

     function showImg( id ) {
      // hide previously shown image
      for ( i = 1; i < 18; i++) {
          var obj = document.getElementById( "picture" + i );
          if (obj != null)
              obj.className = 'hide1';
      }
      var obj = document.getElementById( "picture" + id );      
      if (obj != null)
          obj.className = 'show1';
    }