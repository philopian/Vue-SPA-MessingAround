console.log("....   hello.js")

$.get('hello.html', function(data) {
    console.log(data)

    // create compnents
    Vue.component('hello-component', {
      template: data
    })

    // create a root instance
    var app = new Vue({
        el: '#main'
    });
});
