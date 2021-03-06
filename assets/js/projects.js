project = document.getElementById('project');
async function getProjects() {
    const data = await fetch('../assets/projects.json');
    const obj = await data.json()
    for (let i = 0; i < obj.length; i++) {
        const element = obj[i];
        project.innerHTML += `
        <table>
            <tbody>
                <tr>
                    <td class="project-image">
                    <img alt="Project Image" src="${element.image}" id="projectImage"/>
                    </td>
                    <td class="project-details">
                        <a class="project-link" href="${element.link}" target="_blank">
                            <p>${element.description}</p>
                        </a>
                        <div class="project-tags">
                            <p class="project-language">
                            ${element.tag}
                            </p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>        
    `
    }
}
getProjects();