import { Selector } from 'testcafe' ; 

export default class mainPage {
    constructor () {
        this.getStartedButton = Selector('#main-form > div.banner > div > div.banner-text > a > div');
        this.mainURL = `https://devexpress.github.io/testcafe/`;
        this.feature1 = 'Create stable tests\n(and no manual timeouts)';
        this.feature2 = 'Write in latest JS\nor TypeScript';
        this.feature3 = 'Detect JS errors\nin your code';
        this.feature4 = 'Launch\nconcurrent tests';
        this.feature5 = 'Build readable tests\nwith PageObject';
        this.feature6 = 'Include tests in continuous\nintegration system';
      
        
}

    async getFeature(row, column) {

        return Selector('#main-form > div.features-section > div > div.features > div.row.row-'+row+' > div:nth-child('+column+') > div > p');
    }


}





