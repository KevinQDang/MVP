angular.module('app')
  .component('list', {
    bindings: {
      items: '<',
    },
    controller(itemsService) {
      
      this.handleClick = () => {
        // the handle click adds another video with a quote.
        console.log('clicked');
        
        itemsService.quote().then((data) => {
          this.items.push(data);
          itemsService.search(data).then((info) => {
            this.newUrl = info;
            console.log(this.newUrl);
          });
        });
      };
    },
    templateUrl: '/templates/list.html',
  });
