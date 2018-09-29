class GraphicPageHeaderCtrl {
    constructor() {
        'ngInject';

        console.log('gph: ', this.name);
    }
}

let GraphicPageHeader =  {
    bindings: {
        name: '='
    },
    controller: GraphicPageHeaderCtrl,
    templateUrl: 'components/graphic-page-header.html'
};

export default GraphicPageHeader;
