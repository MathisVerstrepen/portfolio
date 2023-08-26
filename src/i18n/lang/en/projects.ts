export const projects_perso_en = {
    "projects_perso.title": "Key personal projects",

    "projects_perso.list": [
        {
            title: "GameInBox",
            desc: "Public dashboard of a Minecraft server's statistics",
            img: [
                "gameinbox/gameinbox1.webp",
                "gameinbox/gameinbox2.webp",
                "gameinbox/gameinbox3.webp",
            ],
            tags: [
                "HTML",
                "CSS",
                "JavaScript",
                "Redis",
                "Node.js",
            ],
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/MathisVerstrepen/GameInBox-Website",
                    icon: "brand-github",
                },
            ],
        },
        {
            title: "Portfolio",
            desc: "Personal website",
            img: [
                "portfolio/portfolio1.webp",
                "portfolio/portfolio2.webp",
            ],
            tags: [
                "Astro",
                "TypeScript",
            ],
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/MathisVerstrepen/portfolio",
                    icon: "brand-github",
                },
            ],
        },
    ],
} as const;

export const school_projects_en = {
    "school_projects.title": "School projects",

    "school_projects.list": [
        {
            title: "Numerical linear algebra",
            desc: "Python program for solving a principal component analysis (PCA)",
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/MathisVerstrepen/Polytech-Lille---Projet-ALN-2023",
                    icon: "brand-github",
                },
            ],
        },
        {
            title: "Graph theory and combinatorial optimization",
            desc: "C program for solving an efficient task scheduling problem",
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/MathisVerstrepen/Polytech-Lille---Projet-GC-2023",
                    icon: "brand-github",
                },
            ],
        },
    ],
} as const;
