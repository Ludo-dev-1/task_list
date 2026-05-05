// liste de "taskOfDay" initialisée :
const tasksOfTheDay = [
    { title: 'Faire les courses', done: false },
    { title: 'Nettoyer la maison', done: true },
    { title: 'Planter le jardin', done: false }
];


// fonction pour ajouter une tâche : 
const addTask = (taskList, newTask) => {
    return [...taskList, newTask]
}

console.log(addTask(tasksOfTheDay, { title: "J'ai ajouté une tâche", done: true }));


// fonction pour supprimer une tâche dans une liste : 
const removeTask = (taskList, title) => {
    return taskList.filter(task => task.title !== title)

}

console.log(removeTask(tasksOfTheDay, "Nettoyer la maison"));

// fonction pour inversé l'état d'une tâche :
const toggleTaskStatus = (task) => {
    /*     for (const tasks of task) {
            // je vérifie que je récupère bien l'état de chaque tâche
            console.log(tasks.done);
            // j'inverse l'état à faux si c'est initialement à true et inversement
        } */
    task.done ? task.done = false : task.done = true;
    // je retourne le tableau des taches avec les états inversés
    return console.log(task);
}

toggleTaskStatus(tasksOfTheDay[1])


// fonction pour montrer une liste de taches, une liste de tâches effectuées ou un liste de tâches non effectué :
const showTaskStatus = (taskList, status) => {

    if (status === "ALL") {
        console.log(taskList)

    } else if (status === "DONE") {
        console.log(taskList.filter(task => task.done === true))

    } else if (status === "TODO") {
        console.log(taskList.filter(task => task.done === false))
    }
}



showTaskStatus(tasksOfTheDay,"ALL");
showTaskStatus(tasksOfTheDay,"DONE");
showTaskStatus(tasksOfTheDay,"TODO");
