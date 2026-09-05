// Hardcoded data to avoid local file fetch restrictions in the browser
const projects = [
    {
        title: "FPGA NES Emulator",
        description: "A custom hardware implementation of an NES emulator targeting an FPGA board. This project handles low-level system logic, memory mapping, and rendering video output directly over DVI/HDMI.",
        images: [
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
        ],
        tools: ["SystemVerilog", "FPGA", "C++", "Hardware Design"],
        githubUrl: "https://github.com/yourusername/fpga-nes"
    },
    {
        title: "1S Mini Brushless Drone",
        description: "Designed and programmed a custom 2.5-inch mini brushless drone. The project involved tuning 7500kv motors, implementing custom flight controller firmware, and fine-tuning PID loops for stable flight.",
        images: [
            "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80"
        ],
        tools: ["C", "FreeRTOS", "Altium", "Embedded Systems"],
        githubUrl: "https://github.com/yourusername/mini-drone"
    },
    {
        title: "Switching Power Inverter",
        description: "Built a DIY power inverter utilizing salvaged power components and a Raspberry Pi Pico. The system actively manages efficient DC-to-AC conversion cycles using custom control loops.",
        images: [
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
        ],
        tools: ["Raspberry Pi Pico", "Power Electronics", "C"],
        githubUrl: "https://github.com/yourusername/power-inverter"
    }
];

function renderProjects() {
    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = ""; 

    projects.forEach((project, index) => {
        const section = document.createElement("div");
        section.classList.add("project-feature");
        
        // Alternate layout: odd index = reverse layout
        if (index % 2 !== 0) {
            section.classList.add("reverse");
        }

        const toolsHtml = project.tools
            .map(tool => `<span class="tool-tag">${tool}</span>`)
            .join("");

        const imagesHtml = project.images
            .map(imgSrc => `<img src="${imgSrc}" alt="${project.title} screenshot">`)
            .join("");

        section.innerHTML = `
            <div class="feature-images">
                ${imagesHtml}
            </div>
            <div class="feature-content">
                <h3 class="feature-title">${project.title}</h3>
                <p class="feature-description">${project.description}</p>
                <div class="project-tools">
                    ${toolsHtml}
                </div>
                <a href="${project.githubUrl}" target="_blank" class="github-btn">View Technical Details on GitHub</a>
            </div>
        `;

        projectsContainer.appendChild(section);
    });
}

document.addEventListener("DOMContentLoaded", renderProjects);