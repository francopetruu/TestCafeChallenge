import { Selector } from 'testcafe';

export default class getStartedPage {
    constructor () {
        this.activeTabTitle = Selector('h1');
        this.pageTitle = Selector("title");
        this.getStartedURL = `https://devexpress.github.io/testcafe/documentation/getting-started/`;
    }

    returnNavBar(index) {
        return Selector('body > div.page-content-wrapper > div.doc-top-nav > div > div > div:nth-child('+ index +') > a');

    }

}