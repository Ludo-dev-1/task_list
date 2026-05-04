const tasksOfTheDay = [
    { title: 'Faire les courses', done: false },
    { title: 'Nettoyer la maison', done: true },
    { title: 'Planter le jardin', done: false }
];

const addTask = (taskList, newTask) => {
    return [...taskList, newTask]
}

const newTaskOfDay = addTask(tasksOfTheDay,
    { title: "test", done: false }
)


console.log(newTaskOfDay);

const removeTask = (taskList, title) => {
   return taskList.filter(task => task.title !== title)

}

console.log(removeTask(tasksOfTheDay,"Nettoyer la maison"));






