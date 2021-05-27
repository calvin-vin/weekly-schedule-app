const yargs = require('yargs')
const chalk = require('chalk')
const {save_schedule, show_schedules, remove_schedule} = require('./schedule');

yargs.command({
    command: 'remove',
    describe: 'Menghapus jadwal berdasarkan hari',
    builder: {
        day: {
            describe: 'Hari dari jadwal yang akan dihapus',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        remove_schedule(argv.day)
        console.log(chalk.bgRed.white.bold(`Jadwal hari ${argv.day} berhasil dihapus`))
    }
})

yargs.command({
    command: 'list',
    describe: 'Menampilan jadwal mingguan',
    handler(){
        console.log(chalk.bgBlue.white.bold('Jadwal Mingguan'))
        show_schedules();
    }
})

yargs.command({
    command: 'add',
    describe: 'Menambahkan jadwal',
    builder: {
        senin: {
            describe: 'Jadwal hari senin',
            demandOption: false,
            type: 'string'
        },
        selasa: {
            describe: 'Jadwal hari selasa',
            demandOption: false,
            type: 'string'
        },
        rabu: {
            describe: 'Jadwal hari rabu',
            demandOption: false,
            type: 'string'
        },
        kamis: {
            describe: 'Jadwal hari kamis',
            demandOption: false,
            type: 'string'
        },
        jumat: {
            describe: 'Jadwal hari jumat',
            demandOption: false,
            type: 'string'
        },
        sabtu: {
            describe: 'Jadwal hari sabtu',
            demandOption: false,
            type: 'string'
        },
        minggu: {
            describe: 'Jadwal hari minggu',
            demandOption: false,
            type: 'string'
        }
    },
    handler(argv){
        save_schedule({senin: argv.senin})
        save_schedule({selasa: argv.selasa})
        save_schedule({rabu: argv.rabu})
        save_schedule({kamis: argv.kamis})
        save_schedule({jumat: argv.jumat})
        save_schedule({sabtu: argv.sabtu})
        save_schedule({minggu: argv.minggu})
        console.log(chalk.bgGreen.black.bold('Jadwal mingguan sudah diubah'))
    }

})

yargs.parse()