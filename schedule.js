const fs = require('fs')

const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}

const file_path = './data/schedule.json'
const data = `[
    {"senin": "undefined"},
    {"selasa": "undefined"},
    {"rabu": "undefined"},
    {"kamis": "undefined"},
    {"jumat": "undefined"},
    {"sabtu": "undefined"},
    {"minggu": "undefined"}
]`
if(!fs.existsSync(file_path)){
    fs.writeFileSync(file_path, data, 'utf-8')
}

const save_schedule = (schedule) => {
    if(Object.values(schedule).join() !== ""){
        
        const schedules = JSON.parse(fs.readFileSync('./data/schedule.json', 'utf-8'))
        const day = Object.keys(schedule).join("")

        schedules.forEach((sch, i) => {
            if(Object.keys(sch).join() == Object.keys(schedule).join()){
                schedules[i][day] = Object.values(schedule).join()
            }  

            fs.writeFileSync('./data/schedule.json', JSON.stringify(schedules), 'utf-8')

        })

    }
}

const show_schedules = () => {
    const schedules = JSON.parse(fs.readFileSync('./data/schedule.json', 'utf-8'))
    schedules.forEach((sch, i) => {
        if(Object.values(sch).join() !== 'undefined'){
            console.log(`${Object.keys(sch).join()}: ${Object.values(sch).join()}`)
        }
    })
}

const remove_schedule = (day) => {
    const schedules = JSON.parse(fs.readFileSync('./data/schedule.json', 'utf-8'))
    schedules.forEach((sch, i) => {
        if(Object.keys(sch).join() == day){
            schedules[i][day] = "undefined"
        }
    })

    fs.writeFileSync('./data/schedule.json', JSON.stringify(schedules), 'utf-8')
}

module.exports = {save_schedule, show_schedules, remove_schedule}