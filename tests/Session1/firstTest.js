import { Selector, t } from 'testcafe';
import { ClientFunction} from 'testcafe';

const feature1 = Selector('#main-form > div.features-section > div > div.features > div.row.row-1 > div:nth-child(1) > div > p');
const feature2 = Selector('#main-form > div.features-section > div > div.features > div.row.row-1 > div:nth-child(2) > div > p');
const feature3 = Selector('#main-form > div.features-section > div > div.features > div.row.row-1 > div:nth-child(3) > div > p');
const feature4 = Selector('#main-form > div.features-section > div > div.features > div.row.row-2 > div:nth-child(1) > div > p');
const feature5 = Selector('#main-form > div.features-section > div > div.features > div.row.row-2 > div:nth-child(2) > div > p');
const feature6 = Selector('#main-form > div.features-section > div > div.features > div.row.row-2 > div:nth-child(3) > div > p');
const getURL = ClientFunction(() => window.location.href);
const navBar1 = Selector('body > div.page-content-wrapper > div.doc-top-nav > div > div > div.doc-top-nav-tab.active > a');
const navBar2 = Selector('body > div.page-content-wrapper > div.doc-top-nav > div > div > div:nth-child(2) > a');
const navBar3 = Selector('body > div.page-content-wrapper > div.doc-top-nav > div > div > div:nth-child(3) > a');
const navBar4 = Selector('body > div.page-content-wrapper > div.doc-top-nav > div > div > div:nth-child(4) > a');
const navBar5 = Selector('body > div.page-content-wrapper > div.doc-top-nav > div > div > div:nth-child(5) > a');
const navBar6 = Selector('body > div.page-content-wrapper > div.doc-top-nav > div > div > div:nth-child(6) > a');
const activeTabTitle = Selector('body > div.page-content-wrapper > div.container > main > article > div > h1');



fixture `Testcase 1`
    .page `https://devexpress.github.io/testcafe/`

test('Check white text', async t=> {
    await t
        .expect(feature1.innerText).eql('Create stable tests\n(and no manual timeouts)')
        .expect(feature2.innerText).eql('Write in latest JS\nor TypeScript')
        .expect(feature3.innerText).eql('Detect JS errors\nin your code')
        .expect(feature4.innerText).eql('Launch\nconcurrent tests')
        .expect(feature5.innerText).eql('Build readable tests\nwith PageObject')
        .expect(feature6.innerText).eql('Include tests in continuous\nintegration system');
})

test('Getting started', async t=> {
    await t
        .click('#main-form > div.banner > div > div.banner-text > a > div')
        .expect(getURL()).eql('https://devexpress.github.io/testcafe/documentation/getting-started/')
        .expect(Selector("title").innerText).eql('Getting Started | TestCafe')
        .expect(activeTabTitle.innerText).contains('Getting Started')
        .expect(navBar1.getAttribute('href')).contains('/testcafe/documentation/getting-started/')
        .expect(navBar2.getAttribute('href')).contains('/testcafe/documentation/guides/')
        .expect(navBar3.getAttribute('href')).contains('/testcafe/documentation/reference/')
        .expect(navBar4.getAttribute('href')).contains('/testcafe/documentation/recipes/')
        .expect(navBar5.getAttribute('href')).contains('/testcafe/documentation/how-it-works/')
        .expect(navBar6.getAttribute('href')).contains('/testcafe/documentation/examples/');


})