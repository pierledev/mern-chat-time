import { Link } from "react-router-dom";
import { Container } from "../components/shared";
import {
  faqs,
  features,
  Ava1,
  Ava2,
  Ava3,
  Ava4,
  Ava5,
  Ava6,
  testimoniesList1,
  testimoniesList2,
  testimoniesList3,
} from "../data";

import DecorationMap from "../assets/decoration-map.png";

const Home = () => {
  return (
    <main className="pt-20 text-center">
      {/* HERO */}
      <section>
        <Container className="relative z-10 grid min-h-[530px] max-w-[480px] content-center justify-items-center gap-5 md:min-h-[580px] md:max-w-[780px]">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <div className="relative">
              <img src={Ava1} alt="" className="h-10 w-10 md:h-14 md:w-14" />
              <span className="absolute right-0 top-0 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
              </span>
            </div>
            <img src={Ava2} alt="" className="h-10 w-10 md:h-14 md:w-14" />
            <img src={Ava3} alt="" className="h-10 w-10 md:h-14 md:w-14" />
            <img src={Ava4} alt="" className="h-10 w-10 md:h-14 md:w-14" />
            <img src={Ava5} alt="" className="h-10 w-10 md:h-14 md:w-14" />
            <img src={Ava6} alt="" className="h-10 w-10 md:h-14 md:w-14" />
          </div>
          <h1 className="text-[38px] font-medium leading-[1.2] text-white md:text-7xl md:leading-[1.1]">
            Connect Globally, Discover New Friends!
          </h1>
          <p className="text-lg md:text-2xl">
            Chat, share, and bond with strangers from around&nbsp;the&nbsp;world
          </p>
          <Link
            to="/sign-up"
            className="btn mt-3 rounded-full bg-sky-700 text-lg text-white md:btn-lg hover:bg-sky-500 md:mt-8"
          >
            Sign Up For Free
          </Link>
        </Container>
        <img
          src={DecorationMap}
          alt=""
          className="absolute -bottom-24 left-1/2 mx-auto w-full max-w-[1400px] -translate-x-1/2 opacity-70 md:-bottom-[300px] md:opacity-50"
        />
      </section>

      {/* ABOUT */}
      <section className="py-8 md:py-14 xl:py-16">
        <Container className="max-w-[650px] md:max-w-[640px] xl:max-w-[740px]">
          <p className="text-2xl md:text-3xl xl:text-4xl">
            Here, in <span className="font-medium text-white">Chat Time</span>,
            you can chat with new people from all over the world. It&apos;s a
            fun and easy way to{" "}
            <span className="text-white">make friends and share stories</span>.
            Just click and start chatting. It&apos;s that simple. Let&apos;s
            make connections and have fun.
          </p>
        </Container>
      </section>

      {/* FEATURES */}
      <section className="py-14 md:py-20">
        <Container className="grid max-w-[440px] gap-8 md:gap-16">
          <h2 className="text-2xl font-medium text-white md:text-4xl">
            Features We Offer
          </h2>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <li
                key={feature.id}
                className="grid select-none justify-items-center gap-2 rounded-3xl border-2 border-base-200 bg-base-200 p-5 shadow-sm transition-all duration-300 ease-in-out hover:border-sky-400 xl:p-6"
              >
                <span className="mb-2 text-4xl">{feature.icon}</span>
                <h3 className="text-lg font-medium text-white xl:text-xl">
                  {feature.heading}
                </h3>
                <p className="xl:text-lg">{feature.subheading}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* TESTIMONIES */}
      <section className="py-12 md:py-20">
        <Container className="grid gap-8 md:gap-16">
          <h2 className="text-2xl font-medium text-white md:text-4xl">
            What Our Users Say
          </h2>
          <div className="grid gap-4">
            <div className="carousel gap-2 rounded-box lg:gap-4">
              {testimoniesList1.map((testimony) => (
                <blockquote
                  key={testimony.id}
                  className="carousel-item grid w-9/12 gap-4 rounded-2xl bg-white p-4 text-left text-base-300 lg:w-6/12 xl:w-3/12"
                >
                  <p>&quot;{testimony.review}&quot;</p>
                  <footer className="flex items-center gap-3">
                    <img
                      src={testimony.avatar}
                      alt={testimony.name}
                      className="h-10 w-10"
                    />
                    <div>
                      <p className="font-medium">{testimony.name}</p>
                      <p className="text-sm">{testimony.country}</p>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
            <div className="carousel carousel-center gap-2 rounded-box lg:gap-4">
              {testimoniesList2.map((testimony) => (
                <blockquote
                  key={testimony.id}
                  className="carousel-item grid w-7/12 gap-4 rounded-2xl bg-white p-4 text-left text-base-300 lg:w-4/12 xl:w-4/12"
                >
                  <p>&quot;{testimony.review}&quot;</p>
                  <footer className="flex items-center gap-3">
                    <img
                      src={testimony.avatar}
                      alt={testimony.name}
                      className="h-10 w-10"
                    />
                    <div>
                      <p className="font-medium">{testimony.name}</p>
                      <p className="text-sm">{testimony.country}</p>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
            <div className="carousel gap-2 rounded-box lg:gap-4">
              {testimoniesList3.map((testimony) => (
                <blockquote
                  key={testimony.id}
                  className="carousel-item grid w-8/12 gap-4 rounded-2xl bg-white p-4 text-left text-base-300 lg:w-3/12 xl:w-5/12"
                >
                  <p>&quot;{testimony.review}&quot;</p>
                  <footer className="flex items-center gap-3">
                    <img
                      src={testimony.avatar}
                      alt={testimony.name}
                      className="h-10 w-10"
                    />
                    <div>
                      <p className="font-medium">{testimony.name}</p>
                      <p className="text-sm">{testimony.country}</p>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20">
        <Container className="grid justify-items-center gap-8 md:gap-16">
          <h2 className="text-2xl font-medium text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="grid max-w-[720px] gap-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="collapse collapse-arrow bg-base-200 text-left"
              >
                <input id={faq.id} type="radio" name="my-accordion-2" />
                <label
                  htmlFor={faq.id}
                  className="collapse-title text-xl font-medium"
                >
                  <h3 className="text-lg font-medium text-white">
                    {faq.question}
                  </h3>
                </label>
                <div className="collapse-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;
