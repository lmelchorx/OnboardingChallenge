import LoginPage from '../Pages/LoginPage'
import LoggedPage from '../Pages/LoggedPage'
import { CREDENTIALS, PAGELABELS, URL } from '../data/Constants'

fixture('Tasks Testing').page `${URL}`.beforeEach(async () => {await LoginPage.goToLoginPage();});

test('Users can create a task', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(LoginPage.pageTittle.exists).ok()
    await LoggedPage.createTask(PAGELABELS.TASKNAME, PAGELABELS.TASKCONTENT)
    await t.expect(LoggedPage.taskTittle.innerText).eql(PAGELABELS.TASKNAME)
} )

test('Users can create multiple tasks', async t=>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(LoginPage.pageTittle.exists).ok()
    await LoggedPage.createMultipleTaks(6, PAGELABELS.TASKNAME_RANDOM, PAGELABELS.TASKCONTENT)
    await t.expect(LoggedPage.itemLabel.exists).ok()
})


