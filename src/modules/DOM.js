import projectPopUp from "./DOM-Functions";


function listeners() {

    const createProjectBtn = document.getElementById("add-project-container");

    createProjectBtn.addEventListener("click", (e) => {
        projectPopUp();
    })

    const cancelBtn = document.getElementById("cancel");

    cancelBtn.addEventListener("click", (e) => {
        const projectToggle = document.querySelector("#create-project-container")
        projectToggle.style.display = "none";
    })


    return {
        createProjectBtn: createProjectBtn,
        cancelBtn: cancelBtn,
    }
}

export default listeners