const sliderApp = new Vue({
  el: '#root',
  data: {
   img: ["images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpg"],
   currentIndex: 0,
  },

  methods: {
    prev: function() {
      if (this.currentIndex === 0) {
        this.currentIndex = img.length - 1;
      } else {
         this.currentIndex--;
      }
    },

    next: function() {
       if (this.currentIndex === img.length - 1) {
          this.currentIndex = 0;
       } else {
          this.currentIndex++;
       }
    },
  },

});
