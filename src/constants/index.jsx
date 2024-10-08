import { Code, PlugZap } from "lucide-react"
import { ShieldHalf } from "lucide-react"
import { Cpu } from "lucide-react"
import { GlobeLock } from "lucide-react"
import { AppWindow } from "lucide-react"
import { Workflow } from "lucide-react"

import user1 from "../assets/profile-pictures/user1.jpg"
import user2 from "../assets/profile-pictures/user2.jpg"
import user3 from "../assets/profile-pictures/user3.jpg"
import user4 from "../assets/profile-pictures/user4.jpg"
import user5 from "../assets/profile-pictures/user5.jpg"
import user6 from "../assets/profile-pictures/user6.jpg"

export const navItems = [
    { label: "Our Services", href: "#" },
    { label: "Expertise", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "Vision & Misson", href: "#" },
    { label: "About us", href: "#" },
]

export const testimonials = [
    {
        user: "Hari Doe",
        company: "Stellar Solutions",
        image: user1,
        text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
    },
    {
        user: "Jane Smith",
        company: "blue Horizon Technologies",
        image: user2,
        text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
    },
    {
        user: "David Johnson",
        company: "Quantum Innovations",
        image: user3,
        text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    },
    {
        user: "Ronee Brown",
        company: "Fusion Dynamics",
        image: user4,
        text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
    },
    {
        user: "Michael Wilson",
        company: "Visionary Creations",
        image: user5,
        text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
    },
    {
        user: "Emily Davis",
        company: "Synergy Systems",
        image: user6,
        text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
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

export const checklistItems = [
    {
        title: "Code merge made easy",
        description:
            "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
        title: "Review code without worry",
        description:
            "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
        title: "AI Assistance to reduce time",
        description:
            "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
        title: "Share work in minutes",
        description:
            "Track the performance of your VR apps and gain insights into user behavior.",
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
