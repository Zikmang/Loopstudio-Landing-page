const Content = ({ image, header, content }) => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-32">
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-center">

        {/* Image */}
        <div>
          <img
            src={image}
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content Card */}
        <div
          className="
            bg-white
            p-8 md:p-12 lg:p-16
            md:absolute
            md:right-10
            md:top-8/12
            md:-translate-y-1/2
            md:w-[55%]
            shadow-lg
          "
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-wide">
            {header}
          </h2>

          <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed">
            {content}
          </p>
        </div>

      </div>
    </section>
  )
}

export default Content
