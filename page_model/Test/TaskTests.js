import LoginPage from '../Pages/LoginPage'
import UserPage from '../Pages/UserPage'
import LoggedPage from '../Pages/LoggedPage'
import { CREDENTIALS, USERINFO, PAGELABELS, URL } from '../data/Constants'

fixture('Tasks Testing').page `${URL}`.beforeEach(async () => {await LoginPage.goToLoginPage();});

test('Users can create a task', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(LoginPage.pageTittle.exists).ok()
    await LoggedPage.createTask(PAGELABELS.TASKNAME, PAGELABELS.TASKCONTENT)
    await t.expect(LoggedPage.taskTittle.innerText).eql(PAGELABELS.TASKNAME)
} )

test('Users can create multiple tasks', async t=>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(UserPage.pageTittle.exists).ok()
    await LoggedPage.addItemToCart(1)
    await LoggedPage.goToShoppingCart()
    await t.expect(LoggedPage.itemLabel.exists).ok()
})


