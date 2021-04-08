function carousel() {

   new Vue({

      el: '#box',

      data: {

         'visible': 0,
         'images': [

            "img/img1.jpg",
            "img/img2.jpg",
            "img/img3.jpg",
            "img/img4.jpg",
            "img/img5.jpg",
            "img/img6.jpg"

         ]

      },
      methods: {

         prevImg: function () {

           this.visible--;
         if(this.visible < 0 ){
            this.visible = this.images.length -1
         }

         },

         nextImg: function () {
            this.visible ++
            if(this.visible >= this.images.length){
               this.visible = 0
            }

         }
      },
      mounted: function() {

         setInterval(() =>{

            this.nextImg();               
         }, 3000);
      },

   });
}




function init() {

   carousel();


}


$(init)