import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/header'
import Footer from '../../components/footer'
import RatioImage from '../../components/ratio-image'

export default function Home() {
  return (
    <main className="dark bg-gray-700 relative h-screen">
      <Head>
        <title>Synx - About</title>
      </Head>
      <Header />

      <section className="bg-gray-700">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative pt-44 pb-12">
            <div className="sm:w-2/3 md:w-4/5 flex flex-col relative z-20">
              <h1 className="text-5xl sm:text-7xl font-black flex flex-col sm:leading-snug leading-snug text-white">
                We put the &quot;i&quot; in AI.
              </h1>
              <span className="w-28 h-1.5 rounded-full synx-gradient mt-8">
              </span>
              <p className="pt-10 text-sm sm:text-2xl text-white">
                Synx is a team of expert players with the mission of supporting companies to desing, launch and scale their AI, Machine Learning and Business Intelligence efforts. 
              </p>
            </div>
          </div>
        </div>

        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-0">
            <RatioImage src="/assets/header-team.jpg" ratio={(550 / 1320) * 100} className="w-full" />
          </div>
        </div>
      </section>


      <section className="bg-gray-700">
        <div className="flex relative items-center">
          <div className="container mx-auto px-6 flex relative py-8">
            <div className="sm:w-0 md:w-1/12"></div>
            <div className="sm:w-full md:w-2/6 flex flex-col relative z-20">
              <p className="pt-10 text-sm sm:text-2xl text-white">
                Founded in 2016, Synx has been helping industry leaders, enterprises and organizations to sucessfully launch and run Machine Learning projects, saving them time and resources.
              </p>
            </div>
          </div>
        </div>

        <div className="synx-line w-96 h-96">
          <Image src="/assets/synx-line-2.svg" layout="fill" objectFit="cover" alt="decoration" />
        </div>
        
        <div className="flex relative items-center">
          <div className="container mx-auto px-6 flex relative py-8">
            <div className="sm:w-0 md:w-6/12"></div>
            <div className="sm:w-full md:w-2/5 flex flex-col relative z-20">
              <p className="pt-10 text-sm sm:text-2xl text-white">
                We are a team of data scientists, engineers and dreamers in a journey to make the tools that will make the future posible.
              </p>
              <p className="pt-10 text-sm sm:text-2xl text-white">
                Our platforms, tools and methodologies are built by infrastructure data engineers and scientists with the enterprise in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-700 pb-6">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative pt-24 pb-6">
            <div className="sm:w-2/3 md:w-4/5 flex flex-col relative z-20">
              <h3 className="text-4xl sm:text-5xl font-black flex flex-col sm:leading-snug leading-snug text-white">
                An End-to-End solution.
              </h3>
              <p className="pt-10 text-sm sm:text-2xl text-white">
                From scoping and design, to development, model training, integration and DevOps. We deliver a complete end-to-end solutions for companies business analytics and data problems.
              </p>
            </div>
          </div>
        </div>

        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-0">
            <RatioImage src="/assets/end-to-end.png" ratio={(1820 / 2348) * 100} className="w-full px-16" />
          </div>
        </div>
      </section>

      <section className="bg-gray-700 pb-0">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative pt-24 pb-16">
            <div className="sm:w-2/3 md:w-4/5 flex flex-col relative z-20">
              <h3 className="text-4xl sm:text-5xl font-black flex flex-col sm:leading-snug leading-snug text-white">
                A culture that inspires us.
              </h3>
              <p className="pt-10 text-sm sm:text-2xl text-white">
                From scoping and design, to development, model training, integration and DevOps. We deliver a complete end-to-end solutions for companies business analytics and data problems.
              </p>
            </div>
          </div>
        </div>

        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-0">
            <div className="sm:w-full md:w-2/5 flex flex-col relative z-20 bg-gray-700 p-2">
              <RatioImage className="ratio-image" ratio={(533 / 800) * 100} src="/assets/env-1.jpg" />
            </div>
            <div className="sm:w-full md:w-2/5 flex flex-col relative z-20 bg-gray-700 p-2 ml-16">
              <RatioImage className="ratio-image" ratio={(533 / 800) * 100} src="/assets/env-2.jpg" />
            </div>
          </div>
        </div>

        <div className="flex relative z-20 items-center overflow-hidden md:-translate-y-20">
          <div className="container mx-auto px-6 flex relative py-0">
            <div className="sm:w-full md:w-2/5 flex flex-col relative z-20 bg-gray-700 p-2 md:ml-32 mg:-mt-24">
              <RatioImage className="ratio-image" ratio={(533 / 800) * 100} src="/assets/env-c-1.jpg" />
            </div>
            <div className="sm:w-full md:w-2/5 flex flex-col relative z-20 bg-gray-700 p-2 ml-16">
              <RatioImage className="ratio-image" ratio={(533 / 800) * 100} src="/assets/env-c-2.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-700 pb-4">
        <div className="flex relative items-center">
          <div className="container mx-auto px-6 flex relative pt-20 pb-6">
            <div className="sm:w-2/3 md:w-4/5 flex flex-col relative z-20">
              <h3 className="text-4xl sm:text-5xl font-black flex flex-col leading-none text-white">
                Investors that trust us.
              </h3>
              <p className="pt-10 text-sm sm:text-2xl text-white">
                Synx is a venture capital backed company. We are in great company of leading investors in High Tech, Infraestructure, Artificial Intelligence and Enterprise Platforms.
              </p>
            </div>
          </div>
        </div>

        <div className="flex relative items-center">
          <div className="container mx-auto px-6 flex relative pt-8">
            <div className="sm:w-full md:w-1/4 flex flex-col relative z-20">
              <a className="p-2" href="http://id345.tech/" target="_blank" rel="noreferrer">
                <RatioImage ratio={(233 / 310) * 100} alt="ID345" className="synx-border-gradient opacity-50 hover:opacity-100 transition-all duration-500" src="/assets/investors/id345.svg" />
              </a>
            </div>
            <div className="sm:w-full md:w-1/4 flex flex-col relative z-20 pt-24">
              <a className="p-2" href="https://www.crunchbase.com/organization/genesis-capital-venture" target="_blank" rel="noreferrer">
                <RatioImage ratio={(233 / 310) * 100} alt="Genesis Capital Ventures" className="synx-border-gradient opacity-50 hover:opacity-100 transition-all duration-500" src="/assets/investors/genesis-capital.svg" />
              </a>
            </div>
            <div className="sm:w-full md:w-1/4 flex flex-col relative z-20">
              <a className="p-2" href="https://hf.cx/" target="_blank" rel="noreferrer">
                <RatioImage ratio={(233 / 310) * 100} alt="Hackers &amp; Founders" className="synx-border-gradient opacity-50 hover:opacity-100 transition-all duration-500" src="/assets/investors/hf.svg" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex relative items-center">
          <div className="container mx-auto px-6 flex relative md:-translate-y-20">
            <div className="sm:w-full md:w-1/4 flex flex-col relative z-20">
              <a className="p-2" href="http://fwv.mx" target="_blank" rel="noreferrer">
                <RatioImage ratio={(233 / 310) * 100} alt="FWV" className="synx-border-gradient opacity-50 hover:opacity-100 transition-all duration-500" src="/assets/investors/fwv.svg" />
              </a>
            </div>
            <div className="sm:w-full md:w-1/4 flex flex-col relative z-20 pt-24">
              <a className="p-2" href="https://www.blueboxmx.com/" target="_blank" rel="noreferrer">
                <RatioImage ratio={(233 / 310) * 100} alt="BlueBox" className="synx-border-gradient opacity-50 hover:opacity-100 transition-all duration-500" src="/assets/investors/bluebox.svg" />
              </a>
            </div>
            <div className="sm:w-full md:w-1/4 flex flex-col relative z-20">
              <a className="p-2" href="https://www.angelventures.vc/avnetwork" target="_blank" rel="noreferrer">
                <RatioImage ratio={(233 / 310) * 100} alt="AVM" className="synx-border-gradient opacity-50 hover:opacity-100 transition-all duration-500" src="/assets/investors/angel-ventures.svg" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
