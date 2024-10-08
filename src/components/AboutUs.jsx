export function AboutUs() {
    return (
        <div className="mt-10 border-t py-10 border-neutral-700" id="aboutus">
            <h2 className="text-3xl sm:text-5xl text-blue-500 lg:text-6xl text-center my-5 lg:my-20">
                About Us
            </h2>
            <section className="mt-5 bg-neutral-800 p-8 rounded-lg">
                <p className="text-neutral-300 mb-6">
                    We’re a team of 12 engineers with diverse skills across
                    various fields, and we’ve been working together for over
                    four years. Officially, our company has been around for more
                    than a year now, but we’ve already proven our capabilities
                    by successfully managing a healthcare product for a client
                    in Russia.
                </p>
                <p className="text-neutral-300 mb-6">
                    We’ve been delivering services for over a year, and we take
                    pride in our ability to provide real value and build strong,
                    lasting partnerships with our client. Since we operate in a
                    decentralized model, we scale our team up or down as needed,
                    allowing us to optimize resources and reduce project costs.
                </p>

                {/* Subheading for Contact */}
                <h3
                    className="text-xl sm:text-2xl text-blue-500 mt-10 mb-4"
                    id="contact"
                >
                    Contact
                </h3>
                <p className="text-neutral-300 mb-4">
                    We'd love to hear from you! For inquiries, please reach out
                    to us at:{" "}
                    <a
                        href="mailto:sales@hesoid.com"
                        className="text-blue-500 hover:text-white font-medium underline"
                    >
                        sales@hesoid.com
                    </a>
                </p>
            </section>
        </div>
    )
}
