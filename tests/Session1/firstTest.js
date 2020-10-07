import mainPage from '../../pages/page-object-Main';
import getStartedPage from '../../pages/page-object-GetStarted';
import { ClientFunction } from 'testcafe';

//import { Selector, t } from 'testcafe';
//import { ClientFunction} from 'testcafe';

//const feature1 = Selector('#main-form > div.features-section > div > div.features > div.row.row-1 > div:nth-child(1) > div > p');
//const feature2 = Selector('#main-form > div.features-section > div > div.features > div.row.row-1 > div:nth-child(2) > div > p');
//const feature3 = Selector('#main-form > div.features-section > div > div.features > div.row.row-1 > div:nth-child(3) > div > p');
//const feature4 = Selector('#main-form > div.features-section > div > div.features > div.row.row-2 > div:nth-child(1) > div > p');
//const feature5 = Selector('#main-form > div.features-section > div > div.features > div.row.row-2 > div:nth-child(2) > div > p');
//const feature6 = Selector('#main-form > div.features-section > div > div.features > div.row.row-2 > div:nth-child(3) > div > p');
//const getURL = ClientFunction(() => window.location.href);
//const activeTabTitle = Selector('body > div.page-content-wrapper > div.container > main > article > div > h1');
//const getStartedButton = Selector('#main-form > div.banner > div > div.banner-text > a > div');

const MainPage = new mainPage();
const GetStartedPage = new getStartedPage();
const getURL = ClientFunction(() => window.location.href);

fixture `Testcase 1`
    .page `https://devexpress.github.io/testcafe/`

test('Check white text', async t=> {
    await t
        .expect(MainPage.feature1.innerText).eql('Create stable tests\n(and no manual timeouts)')
        .expect(MainPage.feature2.innerText).eql('Write in latest JS\nor TypeScript')
        .expect(MainPage.feature3.innerText).eql('Detect JS errors\nin your code')
        .expect(MainPage.feature4.innerText).eql('Launch\nconcurrent tests')
        .expect(MainPage.feature5.innerText).eql('Build readable tests\nwith PageObject')
        .expect(MainPage.feature6.innerText).eql('Include tests in continuous\nintegration system');
})

test('Getting started', async t=> {
    await t
        .click(MainPage.getStartedButton)
        .expect(getURL()).eql('https://devexpress.github.io/testcafe/documentation/getting-started/')
        .expect(GetStartedPage.pageTitle.innerText).eql('Getting Started | TestCafe')
        .expect(GetStartedPage.activeTabTitle.innerText).contains('Getting Started')

})