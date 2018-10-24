angular.module('app')
  .controller('AppCtrl', function AppCtrl(itemsService) {
    // itemsService.getAll((data) => {
    //   this.items = data;
    // });
    // use the quote method to render a message
    // then with that message use the search method to get a video from youtube
    const ctrl = this;
    ctrl.newUrl = 'https://www.youtube.com/embed/';
    itemsService.quote().then((result) => {
      ctrl.items = result;

      console.log(ctrl.items, 'mess');
    });
    
    // need to use get and set 
    ctrl.newUrl += itemsService.search((item) => {
      console.log(item.data.items[0].id.videoId);
      return item.data.items[0].id.videoId;
    }, ctrl.items);

    this.print = function print() {
      // itemsService.quote((message) => {
      //   ctrl.items = message;
      //   ctrl.newUrl += message.activty;
      //   console.log('newUrl', ctrl.newUrl);
      //   //= message.activity;
      //   console.log(message, 'mess');
      // });
      itemsService.quote().then((result) => {
        ctrl.newUrl += result.activty;
        console.log('newUrl', ctrl.newUrl);
        console.log('results', result);
      });
    };
  })
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
