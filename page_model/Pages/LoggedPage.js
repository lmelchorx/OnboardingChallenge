import {Selector, t} from 'testcafe'

class loggedUserPage {
    constructor(){
        this.TaskButton = Selector('.plus_add_button')
        this.addTaskButton = Selector('.reactist_button--primary')
        this.taskNameField = Selector('.public-DraftStyleDefault-block')
        this.taskDescriptionField = Selector('.task_editor__description_field')
        this.taskTittle = Selector('div.markdown_content:nth-child(1)') 
    }

    async createTask(taskName, taskdescription){
        await t
        .click(this.addTaskButton)
        .typeText(this.taskNameField, taskName, {paste: true})
        .typeText(this.taskDescriptionField, taskdescription, {paste: true})
        .click(this.addTaskButton)
    }

    //You need to specify the number of tasks that you want to create
    async createMultipleTaks(numberOfItems, taskName, taskdescription){
        for (let i= 0;i < numberOfItems; i++)
        await t
        .click(this.addTaskButton)
        .typeText(this.taskNameField, taskName, {paste: true})
        .typeText(this.taskDescriptionField, taskdescription, {paste: true})
        .click(this.addTaskButton)
    }
}

export default new loggedUserPage