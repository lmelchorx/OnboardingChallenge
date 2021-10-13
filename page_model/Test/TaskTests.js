import LoginPage from '../Pages/LoginPage'
import LoggedPage from '../Pages/LoggedPage'
import { CREDENTIALS, PAGELABELS, URL } from '../data/Constants'

fixture('Tasks Testing').page `${URL}`.beforeEach(async () => {await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)});

test('Users can create a task', async t => {
    await LoggedPage.createTask(PAGELABELS.TASKNAME, PAGELABELS.TASKCONTENT)
    await t.expect(LoggedPage.taskTittle.innerText).eql(PAGELABELS.TASKNAMEB)
} )

test('Users can create multiple tasks', async t => {
    await LoggedPage.addTask();
    await LoggedPage.createMultipleTaks(10, PAGELABELS.TASKNAME_RANDOM, PAGELABELS.TASKCONTENT)
})


