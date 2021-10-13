import LoginPage from '../Pages/LoginPage'
import { CREDENTIALS, PAGELABELS, URL } from '../data/Constants'

fixture('Login Feature testing').page `${URL}`.beforeEach(async () => {
    await LoginPage.goToLoginPage();});

test('Users can login using valid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(LoginPage.pageTittle.exists).ok()
} )

test('Users cannot login using invalid credentials', async t => {
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.INVALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD)
        .click(LoginPage.submitButton)

    await t.expect(LoginPage.errorMessage.exists).ok()
    await t.expect(LoginPage.errorMessage.innerText).eql(PAGELABELS.LOGINERROR)
} )

test('Users cannot login using invalid password', async t => {
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD)
        .click(LoginPage.submitButton)

    await t.expect(LoginPage.errorMessage.exists).ok()
    await t.expect(LoginPage.errorMessage.innerText).eql(PAGELABELS.WRONGPASSERROR)
} )
