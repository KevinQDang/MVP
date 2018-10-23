angular.module('app')
  .controller('AppCtrl', (itemsService) => {
    // itemsService.getAll((data) => {
    //   this.items = data;
    // });
    this.videoId = '';
    // this.random = Math.floor(Math.random() * database.length);
    this.data = database;
    // itemsService.search('cat');
    this.items = itemsService.search((item) => {
      console.log(item.data.items[0].id.videoId);
      return item.data.items[0].id.videoId;
    });
    // itemsService.quote((show) => {
    //   console.log(show);
    //   return show;
    // });
    // console.log(data.data.items[0].id.videoId);
    // return data.data.items[0].id.videoId;
    // this.videoId = data.data.items[0].id.videoId;

    console.log(this.videoId);
  })
  .component('app', {
    database: '@',
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
