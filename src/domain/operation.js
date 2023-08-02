import inquirer from 'inquirer'
import createAccount from '../functions/createAccount.js'

const listOfOptions = ['Create Account', 'Check Balance', 'Deposit', 'To withdraw', 'Exit']

export default function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer',
        choices: listOfOptions
    }]).then(res => {
        const action = res.action

        if (action == 'Create Account')
            createAccount()

    }).catch(e => { console.log(e) })
}