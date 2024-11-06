const {IncomingForm} = require('formidable')
const { readTasksFromFile, writeTasksToFile } = require("../utils/fileHandler")

const image = files.name(0)

exports.getTasks = (req,res) => {
    const tasks = readTasksFromFile();
    res.writeHead(200,{ 'content-type': 'application/json'})
    res.end(JSON.stringify(tasks))
}
exports.createTask = (req, res) => {

    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
        if(err){
            res.writeHead(400,{'content-type': 'application/json'});
            res.end(JSON.stringify({
                message: 'Error parsing form'
            }))
            return
        }
        const tasks = readTasksFromFile()
        const newTask ={
            id: Data.now(),
            title: fields.title,
            description: fields ?.description || '',
            status: fields ?.status || 'pending',
            image:image ? `/uploads/${files.image.newFilename}`:null

        }
        tasks.push(newTask);
        writeTasksToFile(tasks);

       

        if(files.image){
            copyfilesync(image.filepath, path.join(_dirname,'../uploads',files.image.newFilename));
            res.end(JSON.stringify(newTask))
        }
    })  
}
exports.updateTasks = (req,res) => {
    res.end(JSON.stringify({
        message: 'Not yet implemented'
    }))
}

exports.deleteTask = (req,res) => {
    res.end(JSON.stringify({
        message: 'Not yet implemented'
    }))
}
