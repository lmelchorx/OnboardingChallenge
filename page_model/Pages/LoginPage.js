import { Selector, t } from 'testcafe'

class LoginPage {
    constructor() {
        this.usernameField = Selector('#email')
        this.passwordField = Selector ('#password')
        this.loginButton = Selector ('._3XsmI > li:nth-child(1) > a:nth-child(1)')
        this.submitButton = Selector('.submit_btn')
        this.errorMessage = Selector ('.error_msg > span:nth-child(2)')
        this.pageTittle = Selector('.view_header__content > h1:nth-child(1) > span:nth-child(1)')
    }

    async goToLoginPage(){
        await t.click(this.loginButton)
    }

    async submitLoginForm(username, password){

        await t.typeText(this.usernameField, username, {paste: true})
        await t.typeText(this.passwordField, password, {paste: true})
        await t.click(this.submitButton)
        
    }
}

export default new LoginPage()