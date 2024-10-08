import { Code, PlugZap } from "lucide-react"
import { ShieldHalf } from "lucide-react"
import { Cpu } from "lucide-react"
import { GlobeLock } from "lucide-react"
import { AppWindow } from "lucide-react"
import { Workflow } from "lucide-react"
import stanislav from "../assets/profile-pictures/stanislav.jpg"

export const navItems = [
    { label: "Our Services", href: "#" },
    { label: "Expertise", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "Vision & Misson", href: "#" },
    { label: "About us", href: "#" },
]

export const testimonials = [
    {
        user: "Stanislav Skakun",
        company: "Founder, Biodata",
        image: stanislav,
        text: `Hesoid delivered exceptional service, consistently meeting deadlines while providing innovative solutions to our most complex business challenges. Their team's professionalism and expertise 
        have been instrumental in the success of our projects.`,
    },
]

export const expertise = [
    {
        icon: <Code />,
        text: "Large-scale product codebases",
        description:
            "We have extensive experience handling complex, large-scale product codebases efficiently",
    },
    {
        icon: <GlobeLock />,
        text: "High-security web applications",
        description:
            "Our team specializes in building highly secure web applications, with strong authentication and authorization measures",
    },
    {
        icon: <ShieldHalf />,
        text: "Developing secure, compliant applications",
        description:
            "We build applications with top-tier security while adhering to HIPAA compliance standards.",
    },
    {
        icon: <Cpu />,
        text: "Full-stack deployment",
        description: `Our team can deploy full-stack applications—Frontend (React) and Backend (Spring Boot,Django, Node.js)—on major cloud platforms like AWS, Azure, and GCP, 
        while maintaining consistent CI/CD pipelines and also with docker containers. `,
    },
    {
        icon: <AppWindow />,
        text: "Healthcare and E-commerce",
        description:
            "We have proven expertise in developing both healthcare and E-commerce applications.",
    },
    {
        icon: <Workflow />,
        text: "Agile Development Methodology",
        description:
            "We excel in utilizing Agile development methodologies, ensuring adaptability and continuous delivery through regular sprints and client feedback.",
    },
]

export const servicesItems = [
    {
        title: "Web Development",
        description:
            "Our web development expertise spans frontend, backend, UI/UX, database management, DevOps, and cloud solutions, enabling us to deliver fast, secure, and scalable applications from start to finish.",
    },
    {
        title: "AI/ML",
        description: `We develop custom AI/ML solutions that automate tasks, forecast trends, analyze data, and enhance communication, with expertise in fine-tuning models like Llama and seamless 
            integration with existing systems to boost efficiency and decision-making.`,
    },
    {
        title: "Cyber Security",
        description: `We offer a comprehensive range of cybersecurity solutions designed to protect your business, detect potential threats, and ensure fast recovery in case of any incidents.`,
    },
    {
        title: "Testing",
        description: `We prioritize quality through a blend of automated and manual testing, using JMeter for API load testing, Selenium for browser automation, and thorough manual testing to ensure every product meets the highest standards.`,
    },
]

export const pricingOptions = [
    {
        title: "Free",
        price: "$0",
        features: [
            "Private board sharing",
            "5 Gb Storage",
            "Web Analytics",
            "Private Mode",
        ],
    },
    {
        title: "Pro",
        price: "$10",
        features: [
            "Private board sharing",
            "10 Gb Storage",
            "Web Analytics (Advance)",
            "Private Mode",
        ],
    },
    {
        title: "Enterprise",
        price: "$200",
        features: [
            "Private board sharing",
            "Unlimited Storage",
            "High Performance Network",
            "Private Mode",
        ],
    },
]

export const resourcesLinks = [
    { href: "#", text: "Getting Started" },
    { href: "#", text: "Documentation" },
    { href: "#", text: "Tutorials" },
    { href: "#", text: "API Reference" },
    { href: "#", text: "Community Forums" },
]

export const platformLinks = [
    { href: "#", text: "Features" },
    { href: "#", text: "Supported Devices" },
    { href: "#", text: "System Requirements" },
    { href: "#", text: "Downloads" },
    { href: "#", text: "Release Notes" },
]

export const communityLinks = [
    { href: "#", text: "Events" },
    { href: "#", text: "Meetups" },
    { href: "#", text: "Conferences" },
    { href: "#", text: "Hackathons" },
    { href: "#", text: "Jobs" },
]
