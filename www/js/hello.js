console.log("....   hello.js")

// $.get('hello.html', function(data) {
//   console.log(data)
//
//   // create compnents
//   Vue.component('hello-component', {
//     // template: data,
//     template: '<p>sdfsdfsd</p>',
//     // methods: {},
    // render: function() {
    //         console.log("......hello.js RENDER method")
    // }
//   })
//
//   // create a root instance
//   var app = new Vue({
//     el: '#main'
//   });
// });


// $(document).on('click', '#btn-append-to-component', appendToComponent)
//
// function appendToComponent(){
//   console.log("......")
//   $("#hello-view p ").append('<p> (... with to compoment with timeout)</p>')
// }

$(document).on('click', '#btn-append-to-component', appendToComponent)

function appendToComponent(){
  console.log("......")
  $("#hello-view p ").empty().append('<p> (... with to compoment with timeout)</p>')
}

//
// $.get('hello.html', function(data) {
//     Vue.component('hello-component', {
//       template: data,
//       created: function(){
//           // add some JS code here
//           console.log("......CREATED")
//
//
//
//
//
//
//           // $("#hello-view").css({
//           //   "color": "red"
//           // });
//           //
//           // $("#hello-view p ").append('(Appened with to compoment with timeout)')
//           //
//           // setTimeout(function(){
//           //     $("#hello-view p ").append('<p> (Appened with to compoment with timeout)</p>')
//           // }, 2000)
//           //
//           //
//           // $("body").append('<br /><p> APPEND!!!!!!!!!!!!!</p>')
//           //
//           //
//           //  $("p").append("<br /><b>Appended text</b>");
//           //
//           // // $(document).append('<p> appened</p>')
//           //
//           // $(document).on('click', "#hello-view", function(){
//           //   console.log(">>>>>CLICK  ")
//           // })
//
//
//
//
//
//       }
//   });
//
// });
