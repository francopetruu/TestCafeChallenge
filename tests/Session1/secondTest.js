import mainPage from '../../pages/page-object-Main';
import getStartedPage from '../../pages/page-object-GetStarted';
import { ClientFunction} from 'testcafe';

const getURL = ClientFunction(() => window.location.href);
const MainPage = new mainPage();
const GetStartedPage = new getStartedPage();

fixture `Testcase 2`
    .page (MainPage.mainURL)

test('Check Getting Started in TestCase 2', async t=> {
    await t
        .click(MainPage.getStartedButton);
        await t
        .expect(getURL()).eql(GetStartedPage.getStartedURL);

    for (let i=1; i<7; i++) {

        await t.click(GetStartedPage.returnNavBar(i));
        let navBarName = await GetStartedPage.returnNavBar(i).innerText;
        await t.expect(GetStartedPage.activeTabTitle.withText(navBarName).exists).ok('El h1 debe tener el mismo texto que la navBar');
    }

})
