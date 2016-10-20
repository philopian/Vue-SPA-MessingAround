// return new Promise(function(resolve, reject) {
//     $.get(BASE_URL + "D.ashx?api=projects", function(data, status) {
//       if (status == "success") {
//         resolve(data);
//       } else {
//         reject();
//       }
//     });
//   });
//


function getHelloHtml() {
  return new Promise(function(resolve, reject) {
    $.get('hello.html', function(data) {
      // Vue.component('hello-component', {
      //   template: data,
      //   created: function() {
      //     console.log("...........CREATED....hello.html");
      //     resolve();
      //   }
      // });
      resolve(data);
    });
  });
}

function getPage2Html() {
  return new Promise(function(resolve, reject) {
    $.get('page2.html', function(data) {
      // Vue.component('page2-component', {
      //   template: data,
      //   created: function() {
      //     console.log("...........CREATED....page2.html");
      resolve(data);
      //   }
      // });
    });
  });
}

var app = {};
getHelloHtml()
  .then(function(html) {
    Vue.component('hello-component', {
      template: html,
      created: function() {
        console.log("...........CREATED....html.html");
      }
    });
    console.log("...then1");
    return getPage2Html();
  })
  .then(function(html) {
    console.log("...then2");
    Vue.component('page2-component', {
      template: html,
      created: function() {
        console.log("...........CREATED....html.html");
      }
    });
  })
  .then(function() {
    console.log("all the files were created");
    app = new Vue({
      el: '#main'
    });
  })

//
// $.get('hello.html', function(data) {
//   Vue.component('hello-component', {
//     template: data,
//     created: function() {
//       // add some JS code here
//       console.log("......CREATED....hello.html")
//     }
//   });
// });


// Promise.all([getHelloHtml(),getPage2Html()]).then(function() {
//   console.log("all the files were created");
//   // var app = new Vue({
//   //   el: '#main'
//   // });
// });
