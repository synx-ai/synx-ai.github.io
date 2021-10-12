import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/header'
import Footer from '../../components/footer'
import RatioImage from '../../components/ratio-image'

export default function Home() {
  return (
    <main className="dark bg-gray-700 relative h-screen">
      <Head>
        <title>Synx - Galois</title>
      </Head>
      <Header />

      <section className="bg-gray-700">
        <div className="flex relative z-20 items-center pb-8">
          <div className="container mx-auto px-6 flex relative pt-44 pb-12">
            <div className="w-full md:w-4/5 flex flex-col relative z-20">
              <h1 className="text-5xl sm:text-7xl font-black flex flex-col sm:leading-snug leading-snug text-white">
                Galois AI Platform
              </h1>
              <span className="w-28 h-1.5 rounded-full bg-white mt-8">
              </span>
              <p className="pt-10 text-sm sm:text-2xl text-white">
                We built an enterprise grade platform for Machine Learnin so you don&apos;t have to.
                Our vision is to help them to achieve business goals with the help of AI to get better performance and reducing time to market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-700">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto flex flew-row relative">
            <div className="px-2 flex flex-col relative w-1/3 sm:w-2/12">
              <RatioImage src="/assets/galois/models.png" className="self-center w-full" ratio={(1184 / 1464) * 100} />
            </div>
            <div className="px-2 flex flex-col relative py-2 w-full sm:w-8/12">
              <h3 className="text-xl sm:text-2xl font-black sm:leading-snug leading-snug text-white">
                Use your own models, not pre-trained ones.
              </h3>
              <p className="text-lg pt-3">
                Models should always fit customers processes, business needs and goals, making them not only unique but a core competitive advantage assets.
              </p>
            </div>
          </div>
        </div>

        <div className="flex relative z-20 items-center overflow-hidden py-16">
          <div className="container mx-auto flex flew-row relative">
            <div className="hidden sm:flex sm:w-1/12"></div>
            <div className="px-2 flex flex-col relative w-1/3 sm:w-2/12">
              <RatioImage src="/assets/galois/infrastructure.png" className="self-center w-full" ratio={(1184 / 1464) * 100} />
            </div>
            <div className="px-2 flex flex-col relative py-2 w-full sm:w-8/12">
              <h3 className="text-xl sm:text-2xl font-black sm:leading-snug leading-snug text-white">
                Runs on Cloud or On-Premise. Ready to Scale.
              </h3>
              <p className="text-lg pt-3">
                Leverage your existent infrastructure for deployment, or install it on a secure and fully managed cloud.
              </p>
            </div>
          </div>
        </div>

        <div className="flex relative z-20 items-center overflow-hidden pb-16">
          <div className="container mx-auto flex flew-row relative">
            <div className="hidden sm:flex sm:w-2/12"></div>
            <div className="px-2 flex flex-col relative w-1/3 sm:w-2/12">
              <RatioImage src="/assets/galois/scale.png" className=" self-center w-full" ratio={(1184 / 1464) * 100} />
            </div>
            <div className="px-2 flex flex-col relative py-2 w-full sm:w-8/12">
              <h3 className="text-xl sm:text-2xl font-black sm:leading-snug leading-snug text-white">
                Reduce headcount, time and computing power.
              </h3>
              <p className="text-lg pt-3">
                Synx provides an optimized platform that reduces the amount of people needed for each problem up to 80%.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-700 pb-6">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative pt-12 pb-6">
            <div className="w-full flex flex-col relative z-20">
              <h1 className="text-4xl sm:text-5xl font-black flex flex-col sm:leading-snug leading-snug text-white">
                Plug &amp; Play Machine Learning.
              </h1>
              <p className="py-10 text-sm sm:text-2xl text-white">
                Our architecture works as a ready appliance that integrates with customers infrastructure, reducing the need of DevOps and Data Engineerings.
              </p>
            </div>
          </div>
        </div>

        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-0">
            <RatioImage src="/assets/galois/overview.png" className="p-16 w-full" ratio={(1458 / 2330) * 100} />
          </div>
        </div>
      </section>

      <section className="bg-gray-700 pb-6">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative pt-12 pb-6">
            <div className="w-full flex flex-col relative z-20">
              <h1 className="text-4xl sm:text-5xl font-black flex flex-col sm:leading-snug leading-snug text-white">
                Multiple Data Sourcing Support.
              </h1>
              <p className="py-10 text-sm sm:text-2xl text-white">
                It doesn&apos;t matter where your data comes from or how is stored, securely read it from multiple sources.
              </p>
            </div>
          </div>
        </div>

        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-0">
            <RatioImage src="/assets/galois/data-sourcing.png" className="px-0 w-full" ratio={(1496 / 3352) * 100} />
          </div>
        </div>
      </section>

      <section className="bg-gray-700 pb-6">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative pt-12 pb-6">
            <div className="w-full flex flex-col relative z-20">
              <h1 className="text-4xl sm:text-5xl font-black flex flex-col sm:leading-snug leading-snug text-white">
                ETL &amp; Data Pipelines.
              </h1>
              <p className="py-10 text-sm sm:text-2xl text-white">
                Add more value to you data by performing better data analysis, exploration and explotation.
              </p>
            </div>
          </div>
        </div>

        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-0">
            <RatioImage src="/assets/galois/etl-pipelines.png" className="px-0 w-full" ratio={(1318 / 3494) * 100} />
          </div>
        </div>
      </section>

      <section className="bg-gray-700 pb-6">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative pt-12 pb-6">
            <div className="w-full flex flex-col relative z-20">
              <h1 className="text-4xl sm:text-5xl font-black flex flex-col sm:leading-snug leading-snug text-white">
                Integrate by using a modern stack.
              </h1>
              <p className="py-10 text-sm sm:text-2xl text-white">
                Galois uses a proven set of standard technologies to enable integrations. It was designed with complieance and secutiry in mind.
              </p>
            </div>
          </div>
        </div>

        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-0">
            <RatioImage src="/assets/galois/easy-to-integrate.png" className="px-0 w-full" ratio={(1270 / 3480) * 100} />
          </div>
        </div>
      </section>

      <section className="bg-gray-700">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-24">
            <div className="bg-gray-500 w-full flex flex-col rounded-2xl shadow-xl p-12">
              <div className=" relative z-20">
                <p className="synx-cta-h text-3xl md:text-5xl font-black flex flex-col md:leading-snug">
                  Request a demo today and start your AI journey with us.
                </p>
                <p className="pt-9">
                  <a className="text-sm text-gray-200 border-b hover:text-white" href="/company/contact">
                    Contact us &gt;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
