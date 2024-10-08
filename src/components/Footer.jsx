import { resourcesLinks, platformLinks, communityLinks } from "../constants"
const Footer = () => {
    return (
        <footer className="mt-5 border-t py-10 border-neutral-700">
            <h2 className="text-3xl sm:text-5xl text-blue-500 lg:text-6xl text-center my-5 lg:my-20">
                Contact
            </h2>
            <section className="mt-5 bg-neutral-800 p-8 rounded-lg">
                <p className="text-neutral-300 mb-4">
                    We'd love to hear from you! For inquiries, please reach out
                    to us at:{" "}
                    <span>
                        <a
                            href="mailto:sales@hesoid.com"
                            className="text-neutral-300 hover:text-white font-medium underline"
                        >
                            sales@hesoid.com
                        </a>
                    </span>
                </p>
            </section>
        </footer>
    )
}

export default Footer
