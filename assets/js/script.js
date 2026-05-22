const PROJECT_DATA = [
    {
        id: "dento-xray-analysis",
        title: "Dental X-ray Analysis AI",
        description: "Automating dental X-ray analysis using computer vision. Scripts classify dental conditions to help improve diagnostic workflows.",
        tags: ["Computer Vision", "Python", "Dental AI"],
        image: "./assets/img/x-ray.png",
        link: "https://github.com/httplava/Dental-X-ray-Analysis",
        linkText: "View Project →"
    },
    {
        id: "thermo-intensifier",
        title: "Thermo-Intensifier",
        description: "Original device model for a dental handpiece temperature control system, with automated thermal monitoring and cooling management.",
        tags: ["Embedded Design", "Device Model", "Automation"],
        image: "./assets/img/thermo-intensifier.jpeg",
        link: "./assets/doc/THERMO INTENSIFIER.pdf",
        linkText: "View Research →"
    },
    {
        id: "actinidin-endodontic",
        title: "Actinidin Bio-Irrigant Research",
        description: "Original research on antimicrobial bio-irrigants for root canal treatment, demonstrating efficacy against Enterococcus faecalis.",
        tags: ["Dental Research", "Endodontics", "Bio-Irrigant"],
        image: "./assets/img/actinidin.png",
        link: "./assets/doc/Actinidin Endodontic.pdf",
        linkText: "View Research →"
    }
];
function renderFeaturedProjects(){const gridContainer=document.getElementById('dynamic-projects-grid');if(!gridContainer){console.error("Error: Could not find element with id 'dynamic-projects-grid' in HTML.");return;}gridContainer.innerHTML='';PROJECT_DATA.forEach(project=>{const tagsHTML=project.tags.map(tag=>`<span>${tag}</span>`).join('');const cardHTML=`
            <div class="project-card">
                <div class="project-img-placeholder" style="background-image: url('${project.image}'); background-size: cover; background-position: center;"></div>
                <div class="project-info">
                    <div class="tags">${tagsHTML}</div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" class="project-link">${project.linkText}</a>
                </div>
            </div>
        `;gridContainer.insertAdjacentHTML('beforeend',cardHTML);});}
window.addEventListener('DOMContentLoaded',()=>{renderFeaturedProjects();});