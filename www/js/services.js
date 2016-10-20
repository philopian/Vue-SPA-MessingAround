// function getHelloHtml() {
//   return new Promise(function(resolve, reject) {
//     $.get('hello.html', function(html) {
//       Vue.component('hello-component', {
//         template: html,
//         created: function() {
//         }
//       });
//       resolve();
//     });
//   });
// }
//
// function getPage2Html() {
//   return new Promise(function(resolve, reject) {
//     $.get('page2.html', function(html) {
//       Vue.component('page2-component', {
//         template: html,
//         created: function() {
//         }
//       });
//       resolve();
//     });
//   });
// }


function initComponent(html,compmentName){
  return new Promise(function(resolve, reject) {
    $.get(html, function(htmlData) {
      Vue.component(compmentName, {
        template: htmlData,
        created: function() {
        }
      });
      resolve();
    });
  });
}





var app = {};
initComponent('hello.html' , 'hello-component')
  .then(function() {
    return initComponent('page2.html' , 'page2-component')
  })
  .then(function() {})
  .then(function() {
    console.log("all the files were created");
    app = new Vue({
      el: '#main'
    });
  });
