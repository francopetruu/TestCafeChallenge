import mainPage from '../../pages/page-object-Main';
import getStartedPage from '../../pages/page-object-GetStarted';
import { ClientFunction, t } from 'testcafe';

const MainPage = new mainPage();
const GetStartedPage = new getStartedPage();
const getURL = ClientFunction(() => window.location.href);



fixture `Testcase 1`
    .page (MainPage.mainURL)


test('Check white text', async t=> {
                
    let firstRowExpectedFeatureText = [MainPage.feature1, MainPage.feature2, MainPage.feature3];
    let secondRowExpectedFeatureText = [MainPage.feature4, MainPage.feature5, MainPage.feature6];
        for (let i=1; i<4; i++) {

            await t.expect(await (await MainPage.getFeature(1,i)).innerText).eql(firstRowExpectedFeatureText[i-1], "El texto de la feature es incorrecto");
        }

        for (let i=1; i<4; i++) {
           
            await t.expect(await (await MainPage.getFeature(2,i)).innerText).eql(secondRowExpectedFeatureText[i-1], "El texto de la feature es incorrecto");
        } 

    })

test('Getting started', async t=> {
    await t
        .click(MainPage.getStartedButton)
        .expect(getURL()).eql(GetStartedPage.getStartedURL)
        .expect(GetStartedPage.pageTitle.innerText).eql(GetStartedPage.pageTitleText)
        .expect(GetStartedPage.activeTabTitle.innerText).contains(GetStartedPage.activeTabInnerText)

})

