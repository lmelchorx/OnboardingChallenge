import {Selector, t} from 'testcafe'

class loggedUserPage {
    constructor(){
        this.CreateTaskButton = Selector('.reactist_button--primary')
        this.addTaskButton = Selector('.plus_add_button')
        this.taskNameField = Selector('.public-DraftStyleDefault-block')
        this.taskDescriptionField = Selector('.task_editor__description_field')
        this.taskTittle = Selector('div.markdown_content:nth-child(1)') 
        this.taskList = Selector('.list_holder')    
    }

    async createTask(taskName, taskdescription){
        await t
        .click(this.addTaskButton)
        .typeText(this.taskNameField, taskName, {paste: true})
        .typeText(this.taskDescriptionField, taskdescription, {paste: true})
        .click(this.CreateTaskButton)
    }

    //You need to specify the number of tasks that you want to create
    async createMultipleTaks(numberOfItems, taskName, taskdescription){
        for (let i= 0;i < numberOfItems; i++)
        await t
        .click(this.addTaskButton)
        .typeText(this.taskNameField, taskName, {paste: true})
        .typeText(this.taskDescriptionField, taskdescription, {paste: true})
        .click(this.CreateTaskButton)
    }

    async CreatedTaskList(numberOfItems){
        await t
        for (let i = 0; i < numberOfItems; i++) {
            const myCheckoutArray = []
            myCheckoutArray.push(await this.taskList.child('.list_holder > ul:nth-child(1)').child('').nth(i).innerText);
            console.log (myCheckoutArray)
        }
    }
}

export default new loggedUserPage