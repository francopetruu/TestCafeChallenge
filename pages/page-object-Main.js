import { Selector, t } from 'testcafe' ; 
import { ClientFunction } from 'testcafe';

export default class mainPage {
    constructor () {
        this.getStartedButton = Selector('#main-form > div.banner > div > div.banner-text > a > div');
        this.feature1 = Selector('#main-form > div.features-section > div > div.features > div.row.row-1 > div:nth-child(1) > div > p');
        this.feature2 = Selector('#main-form > div.features-section > div > div.features > div.row.row-1 > div:nth-child(2) > div > p');
        this.feature3 = Selector('#main-form > div.features-section > div > div.features > div.row.row-1 > div:nth-child(3) > div > p');
        this.feature4 = Selector('#main-form > div.features-section > div > div.features > div.row.row-2 > div:nth-child(1) > div > p');
        this.feature5 = Selector('#main-form > div.features-section > div > div.features > div.row.row-2 > div:nth-child(2) > div > p');
        this.feature6 = Selector('#main-form > div.features-section > div > div.features > div.row.row-2 > div:nth-child(3) > div > p');
        this.mainURL = `https://devexpress.github.io/testcafe/`
        
}

}



