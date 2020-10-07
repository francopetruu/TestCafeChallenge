import { Selector } from 'testcafe';

export default class getStartedPage {
    constructor () {
        this.activeTabTitle = Selector('h1');
        this.pageTitle = Selector("title");

    }

}