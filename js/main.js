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

            let count = this.visible;
            let limitCount = (this.images.length - 1);

            if (count == limitCount) {
               count = 0;
            } else {
               count--;
            }


         },

         nextImg: function () {
            let count = this.visible;
            let limitCount = (this.images.length - 1);

            if (count == limitCount) {
               count = 0;
            } else {
               count++;
            }


         }
      }

   });
}




function init() {

   carousel();


}


$(init)