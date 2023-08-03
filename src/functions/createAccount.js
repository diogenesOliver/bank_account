import chalk from 'chalk'

import buildAccount from './buildAccount.js'

export default function createAccount(){
    console.log(chalk.bgGreen.black('Welcome to AccountBank'))
    console.log(chalk.green('Set optios to continue'))

    buildAccount()
}