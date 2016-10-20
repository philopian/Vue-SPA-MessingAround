function initComponent(html, compmentName) {
  return new Promise(function(resolve, reject) {
    $.get(html, function(htmlData) {
      var component = Vue.component(compmentName, {
        template: htmlData,
        created: function() {}
      });
      resolve(component);
    });
  });
}

var app = {};
var components = {};
initComponent('hello.html', 'hello')
  .then(function(component) {
    components.hello = component;

    return initComponent('page2.html', 'page2')
  })
  .then(function(component) {
      components.page2 = component;
  })
  .then(function() {
    console.log("all the files were created");
    // Register all components
    // app = new Vue({
    //   el: '#main'
    // });

    // router
    var App = Vue.extend({})
    var router = new VueRouter({
      root: '/',
      hashbang: false,
      mode: 'html5',
      history: false,
      linkActiveClass: "active"
    });


    router.map({
      '/foo': {
        component: components.hello
      },
      '/bar': {
        component: components.page2
      }
    })



    router.start(App, '#app')
  });


//
// // Define some components
// var Foo = Vue.extend({
//   template: '<p>This is foo!</p>'
// })
//
// var Bar = Vue.extend({
//   template: '<p>This is bar!</p>'
// })
//
// var App = Vue.extend({})
// var router = new VueRouter({
//   root: '/',
//   hashbang: false,
//   mode: 'html5',
//   history: false,
//   linkActiveClass: "active"
// });
//
//
// router.map({
//   '/foo': {
//     component: Foo
//   },
//   '/bar': {
//     component: Bar
//   }
// })
//
//
//
// router.start(App, '#app')
//








//
// var App = Vue.extend({});
// var router = new VueRouter();
//
// var Home = Vue.extend({
//   template: 'Welcome to the <b>home page</b>!'
// });
// var People = Vue.extend({
//   template: 'Look at all the people who work here!'
// });
//
// router.map({
//   '/': {
//     component: Home
//   },
//   '/people': {
//     component: People
//   }
// });
//
// router.start(App, '#app');
