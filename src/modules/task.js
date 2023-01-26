import { isToday, isThisWeek, toDate, } from "date-fns";

class Task {
    constructor(title, date, priority, projectTitle, sortDate) {
        this.title = title,
        this.date = date,
        this.priority = priority
        this.projectTitle = projectTitle;
        this.sortDate = sortDate;
    }
}

export const taskStorage = (() => {

    let taskArray = [];
    let todayArray = [];
    let weekArray = [];

    return {
        taskArray,
        todayArray,
        weekArray,
    };

})();

export function createTask(projectTitle) {

    let date = document.getElementById("date").value

    const year = date.slice(0,4);
    const month = date.slice(5,7);
    const day = date.slice(8,10);

    let newMonth = month - 1

    let dateFormatted = `${month}/${day}/${year}`

    const sortDate = toDate(new Date(year, newMonth, day));

    const isDateToday = isToday(new Date(year, newMonth, day));

    const isDateThisWeek = isThisWeek(new Date(year, newMonth, day));

    const task = new Task(
        document.getElementById("title").value,
        dateFormatted,
        document.getElementById("priority-select").value,
        projectTitle,
        sortDate,
    );

    taskStorage.taskArray.push(task)
    
    if (isDateToday === true && isDateThisWeek === true) {
        taskStorage.todayArray.push(task);
        taskStorage.weekArray.push(task);
    } else if (isDateThisWeek === true) {
        taskStorage.weekArray.push(task);
    }
    
    return task

}