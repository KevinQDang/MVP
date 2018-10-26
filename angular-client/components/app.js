angular.module('app')
  .controller('AppCtrl', function AppCtrl(itemsService) {
    // itemsService.getAll((data) => {
    //   this.items = data;
    // });
    // use the quote method to render a message
    // then with that message use the search method to get a video from youtube

    this.items = [];
    
    itemsService.quote().then((result) => {
      this.items.push(result);
      console.log(this.items, 'mess');
      // itemsService.search(this.items).then((data) => {
      //   this.newUrl = data;
      //   console.log(this.newUrl);
      // });
    });
  
    // itemsService.quote((data) => {
    //   console.log(data);
    //   this.items = data;
    // }).then((result) => {
    //   console.log(result, 'result');
    // }).then((resultDa) => {
    //   console.log(resultDa, '7');
    // });
    // need to use get and set 
    // ctrl.newUrl += itemsService.search((item) => {
    //   console.log(item.data.items[0].id.videoId);
    //   return item.data.items[0].id.videoId;
    // }, ctrl.items); s
    // itemsService.search(this.items);
    // console.log(this.items, 'hello');
    // console.log(itemsService.search(items).then((result) => {
    //   console.log(result);
    // }));
    // this.print = function print() {
    //   // itemsService.quote((message) => {
    //   //   ctrl.items = message;
    //   //   ctrl.newUrl += message.activty;
    //   //   console.log('newUrl', ctrl.newUrl);
    //   //   //= message.activity;
    //   //   console.log(message, 'mess');
    //   // });
    //   itemsService.quote().then((result) => {
    //     ctrl.newUrl += result.activty;
    //     console.log('newUrl', ctrl.newUrl);
    //     console.log('results', result);
    //   });
    // };
  })
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
