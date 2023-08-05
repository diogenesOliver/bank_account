import inquirer from 'inquirer'
import chalk from 'chalk'

import createAccount from '../functions/createAccount.js'
import exitAccount from '../functions/exitFunction.js'

const listOfOptions = ['Create Account', 'Check Balance', 'Deposit', 'To withdraw', 'Exit']

export default function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer',
        choices: listOfOptions
    }]).then(res => {
        const action = res.action

        if (action == 'Create Account') {
            createAccount()
        }else if(action == 'Deposit'){

        }else if(action == 'Check Balance'){

        }else if(action == 'To withdraw'){

        }else{
            exitAccount()
        }

    }).catch(e => { console.log(e) })
}