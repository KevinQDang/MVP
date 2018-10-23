angular.module('app')
  .component('list', {
    bindings: {
      items: '<',
    },
    controller() {
      this.handleClick = () => {
        // the handle click adds another video with a quote.
        console.log('clicked');
      };
    },
    templateUrl: '/templates/list.html',
  });
