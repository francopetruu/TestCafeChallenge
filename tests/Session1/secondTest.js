import mainPage from '../../pages/page-object-Main';
import getStartedPage from '../../pages/page-object-GetStarted';

import { Selector, t } from 'testcafe';
import { ClientFunction} from 'testcafe';

const getURL = ClientFunction(() => window.location.href);

function returnNavBar(index) {return Selector('body > div.page-content-wrapper > div.doc-top-nav > div > div > div:nth-child('+ index +') > a'); }

const MainPage = new mainPage();
const GetStartedPage = new getStartedPage();

fixture `Testcase 2`
    .page `https://devexpress.github.io/testcafe/`

test('Check Getting Started in TestCase 2', async t=> {
    await t
        .click(MainPage.getStartedButton);

        await t
        .expect(getURL()).eql('https://devexpress.github.io/testcafe/documentation/getting-started/');

    for (let i=1; i<7; i++) {

        await t.click(returnNavBar(i));
        let navBarName = await returnNavBar(i).innerText;
        await t.expect(GetStartedPage.activeTabTitle.withText(navBarName).exists).ok('El h1 debe tener el mismo texto que la navBar');
    }

})
