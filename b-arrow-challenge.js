const tasks = {
    tasks: [{
        text: 'Grocery Shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter(task => task.completed === false ? task : '')
    }
}

console.log(tasks.getTasksToDo())