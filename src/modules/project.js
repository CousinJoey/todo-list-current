
class Project {
    constructor(title) {
        this.title = title;
        this.array = [];
    };
}

export const projectStorage = (() => {

    let projectArray = [];

    return {
        projectArray
    };

})();

export function createProject() {

    const project = new Project(document.getElementById("project-input").value);

    projectStorage.projectArray.push(project);

}








