angular.module('app')
  .controller('AppCtrl', (itemsService) => {
    // itemsService.getAll((data) => {
    //   this.items = data;
    // });
    // this.random = Math.floor(Math.random() * database.length);
    // this.data = database;
    // use the quote method to render a message
    // then with that message use the search method to get a video from youtube
    // itemsService.quote((message) => {
    //   console.log(message);
    //   return message;
    // });
    this.items = itemsService.search((item) => {
      console.log(item.data.items[0].id.videoId);
      return item.data.items[0].id.videoId;
    });
  })
  .component('app', {
    database: '@',
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
