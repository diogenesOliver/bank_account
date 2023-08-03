import chalk from 'chalk'
import fs from 'fs'
import inquirer from "inquirer"

import operation from '../domain/operation.js'

export default function buidlAccount(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Write a name from your account'
        }
    ]).then(res => {
        const accountName = res['accountName']        

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }else if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('This account name already exist'))
            buidlAccount()
            return
        }else{
            fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', err => {
                console.log(err)
            })

            console.log(chalk.green('Succes to create account'))
            operation()
        }
            
    }).catch(e => { console.log(e) })
}