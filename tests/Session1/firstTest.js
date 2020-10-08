import mainPage from '../../pages/page-object-Main';
import getStartedPage from '../../pages/page-object-GetStarted';
import { ClientFunction } from 'testcafe';


const MainPage = new mainPage();
const GetStartedPage = new getStartedPage();
const getURL = ClientFunction(() => window.location.href);

fixture `Testcase 1`
    .page (MainPage.mainURL)

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