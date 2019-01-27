export interface PortfolioItem {
    image: string,
    title: string,
    description: string,
    github: string,
    demo: string,
    showDescription: boolean,
    demoUsers: DemoUser[]
}

interface DemoUser {
    user: string,
    password: string
}
