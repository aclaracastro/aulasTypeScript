enum TaskStatus {
    Pending = "Pendente",
    InProgress = "Em progresso",
    Completed = "Completo",
}

type Task = {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
};

function createTask(id: number, title: string, description: string): Task {
    return {
        id,
        title,
        description,
        status: TaskStatus.Pending, 
    };
}

function updateTaskStatus(task: Task, newStatus: TaskStatus): Task {
    return { ...task, status: newStatus };
}

function displayTask(task: Task): void {
    console.log(`Task #${task.id}`);
    console.log(`Title: ${task.title}`);
    console.log(`Description: ${task.description}`);
    console.log(`Status: ${task.status}`);
    console.log("--------------------------");
}

const task1 = createTask(1,"Titulo qlq", "Descricao qlq")
displayTask(task1)

const updatedTask1 = updateTaskStatus(task1, TaskStatus.InProgress);
displayTask(updatedTask1);

const completedTask1 = updateTaskStatus(updatedTask1, TaskStatus.Completed);
displayTask(completedTask1);