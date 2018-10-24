angular.module('app')
  .controller('AppCtrl', function AppCtrl(itemsService) {
    // itemsService.getAll((data) => {
    //   this.items = data;
    // });
    // this.random = Math.floor(Math.random() * database.length);
    // this.data = database;
    // use the quote method to render a message
    // then with that message use the search method to get a video from youtube
    const ctrl = this;
    itemsService.quote((message) => {
      ctrl.items = message;
      //= message.activity;
      console.log(message, 'mess');
    });

    // itemsService.search((item) => {
    //   console.log(item.data.items[0].id.videoId);
    //   return item.data.items[0].id.videoId;
    // });
  })
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
