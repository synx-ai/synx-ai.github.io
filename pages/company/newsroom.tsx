import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <main className="dark bg-gray-700 relative h-screen">
      <Head>
        <title>Synx - Newsroom</title>
      </Head>
      <Header />

      <section className="bg-gray-700">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative pt-44 pb-12">
            <div className="sm:w-2/3 md:w-4/5 flex flex-col relative z-20">
              <h1 className="text-5xl sm:text-7xl font-black flex flex-col sm:leading-snug leading-snug text-white">
                Newsroom
              </h1>
              <span className="w-28 h-1.5 rounded-full synx-gradient mt-8"></span>
              <p className="pt-10 text-sm sm:text-2xl text-white"></p>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-gray-700">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative pb-32">
            <div className="sm:w-2/3 md:w-4/5 flex flex-col relative z-20">
              <h3 className="text-3xl sm:text-3xl font-black flex flex-col sm:leading-snug leading-snug text-white">
                Synx partnered with KIO Networks to enhance its ML for
                enterprise offer.
              </h3>
              <p className="pt-6 text-sm sm:text-lg text-white">
                <span className="text-gray-200 font-thin">
                  Mexico City, Aug 28, 2019 —{" "}
                </span>
                KIO Network, the leading data center company in LATAM and Synx,
                partnered to enhance the platform offer for enterpries. <br />
                <br />
                With this partnership, customers of both companies can easily
                integrate AI into their own infrastructure, allowing not only
                faster deployments but improved security.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="bg-gray-700">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative pb-32">
            <div className="sm:w-2/3 md:w-4/5 flex flex-col relative z-20">
              <h3 className="text-3xl sm:text-3xl font-black flex flex-col sm:leading-snug leading-snug text-white">
                Synx Secures Series Seed Financing.
              </h3>
              <p className="pt-6 text-sm sm:text-lg text-white">
                <span className="text-gray-200 font-thin">
                  Mexico City, November 30, 2018 —{" "}
                </span>
                Synx secures its Series Seed Round to improve internal tool that
                enables the company to provide machine learning services to
                large enterprises. The round is led by ID345, a fund focused on
                enable the next generation of Artificial Intelligence based
                businesses in LATAM. <br />
                <br />
                With this funding, Synx aims to develop a wider range of
                Business Analytics tools and data pipelines for its propertary
                platform, which has been already deployed succesfully in many
                companies around the world.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="bg-gray-700">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative pb-32">
            <div className="sm:w-2/3 md:w-4/5 flex flex-col relative z-20">
              <h3 className="text-3xl sm:text-3xl font-black flex flex-col sm:leading-snug leading-snug text-white">
                Synx won an innovation award from Etihad Airways.
              </h3>
              <p className="pt-6 text-sm sm:text-lg text-white">
                <span className="text-gray-200 font-thin">
                  Abu Dhabi, October 13, 2018 —{" "}
                </span>
                startAD, the accelerator and innovation hub by NYU Abu Dhabi,
                announced Synx as the recipient of an innovation award by both
                Etihad Aviation Group and UAE Exchange. <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
