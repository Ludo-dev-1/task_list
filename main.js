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

// appel de la fonction pour ajouter une nouvelle tâche:
const newTaskOfDay = addTask(tasksOfTheDay,
    { title: "test", done: false }
)

console.log(newTaskOfDay);


// fonction pour supprimer une tache dans une liste : 
const removeTask = (taskList, title) => {
    return taskList.filter(task => task.title !== title)

}

console.log(removeTask(tasksOfTheDay, "Nettoyer la maison"));

// fonction pour inversé l'état d'une tâche :
const toggleTaskStatus = (task) => {
    for (const tasks of task) {
        // je vérifie que je récupère bien l'état de chaque tâche
        console.log(tasks.done);
        // j'inverse l'état à faux si c'est initialement à true et inversement
        tasks.done ? tasks.done = false : tasks.done = true;
    }
    // je retourne le tableau des taches avec les états inversés
    return console.log(task);
}

toggleTaskStatus(tasksOfTheDay)


// fonction pour montrer une liste de taches, une liste de tâches effectuées ou un liste de tâches non effectué :
const showTaskStatus= (taskList, status)=> {

    return console.log(taskList, status == false ? taskList.filter(status => status.done !== false) : taskList.filter(status => status.done !== true));

}

showTaskStatus(tasksOfTheDay, true);