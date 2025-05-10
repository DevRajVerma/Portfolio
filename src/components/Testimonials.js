const testimonials = [
  {
    text: "Dev Raj transformed our project with his MERN expertise. His problem-solving skills and attention to detail delivered exceptional results that exceeded our expectations.",
    name: "Ankush Mehra",
    imgSrc: "Testimonials/Ankush.jpeg",
    position: "CEO at Company",
  },
  {
    text: "Impressed by Dev Raj's quick learning and high-quality code during his internship. His contributions were invaluable to our projects.",
    name: "Kuldeep Kumar",
    imgSrc: "Testimonials/Kuldeep.jpeg",
    position: "Manager at Business",
  },
  {
    text: "Dev Raj's full stack skills brought our vision to life with a stunning web application. His MERN expertise and dedication were evident in the final product.",
    name: "Keshav Goel",
    imgSrc: "Testimonials/Keshav.jpeg",
    position: "Director at Organization",
  },
  {
    text: "A top-tier developer with strong frontend and backend knowledge. Dev Raj solved complex problems efficiently on our MERN project, making a huge difference.",
    name: "Ankit Kumar",
    imgSrc: "Testimonials/BadaAnkit.png",
    position: "Founder at Startup",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Testimonials</h2>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Hear what my clients have to say about my work and services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-green-400/20 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="mb-4">
                <svg
                  className="w-10 h-10 text-green-500 mb-2"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 8c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4v-6.42c-.326.083-.659.147-1 .17V22c0 1.65-1.35 3-3 3H10c-1.65 0-3-1.35-3-3V12c0-1.65 1.35-3 3-3h6.58c-.023.341-.087.674-.17 1H10zm12-8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
                </svg>
              </div>

              <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.text}"</p>

              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-400">
                  <img
                    src={testimonial.imgSrc || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-green-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
