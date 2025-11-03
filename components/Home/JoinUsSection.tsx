function JoinUsSection() {
  return (
    <section
      className="font-urbanist text-white w-full py-16 lg:py-24 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/join-us-bg.png')" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-semibold text-3xl sm:text-4xl lg:text-5xl ">
        Join 5,000+ <span className="italic">tradespeople</span> using Fixxa
      </p>
      <p className="text-xl mt-4">Start saving 10+ hours a month on admin work</p>
      </div>
    </section>
  );
}

export default JoinUsSection;
