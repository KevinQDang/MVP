angular.module('app')
  .controller('AppCtrl', (itemsService) => {
    // itemsService.getAll((data) => {
    //   this.items = data;
    // });
    this.videoId = '';
  
    // itemsService.search('cat');
    this.videoId = itemsService.search('cat').then((data) => {
      console.log(data.data.items[0].id.videoId);
      return data.data.items[0].id.videoId;
      // this.videoId = data.data.items[0].id.videoId;
    });
    console.log(this.videoId);
  })
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
