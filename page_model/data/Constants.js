import dotenv from 'dotenv'
import { uniqueIdentifier } from './tools';
dotenv.config()


export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        USERNAME:'invalid_user',
        PASSWORD:'invalid_password'
    }
}

export const PAGELABELS = {
    WRONGPASSERROR: 'Wrong email or password.',
    LOGINERROR: 'Invalid email address.',
    USERINFOERROR:'Error: First Name is required',
    CHECKOUTLABEL: 'Checkout: Overview',
    TASKNAME: 'Test Task 1',
    TASKNAMEB: 'TTest Task 1',
    TASKCONTENT: 'This is a test',
    TASKNAME_RANDOM:`Test task${uniqueIdentifier()}`,

}

export const URL = process.env.URL;