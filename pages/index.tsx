import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

import RatioImage from "../components/ratio-image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="dark bg-gray-700 relative h-screen">
      <Head>
        <title>Synx</title>
      </Head>
      <Header />

      <section className="bg-gradient-to-r from-gray-700 to-gray-600">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative pt-44 pb-12">
            <div className="sm:w-2/3 md:w-4/5 flex flex-col relative z-20">
              <h1 className="text-5xl sm:text-7xl font-black flex flex-col sm:leading-snug leading-snug text-white">
                Simplifying AI adption for the Enterprise.
              </h1>
              <span className="w-28 h-1.5 rounded-full synx-gradient mt-8"></span>
              <p className="pt-10 text-sm sm:text-2xl text-gray-100">
                We help companies to design, plan, and launch their Business
                Analytics &amp; Machine Learning efforts, aligned with their
                strategy and technology, proving the tools and resources to
                drive digital transformation in their core competences.
              </p>
            </div>
          </div>
        </div>

        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-0">
            <RatioImage
              src="/assets/header-home.jpg"
              ratio={(550 / 1320) * 100}
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-700 to-gray-600">
        <div className="flex relative items-center">
          <div className="container mx-auto px-6 flex relative pt-32 pb-8">
            <div className="sm:w-2/3 md:w-4/5 flex flex-col relative z-20">
              <h2 className="text-5xl sm:text-7xl font-black flex flex-col sm:leading-snug leading-snug text-white">
                Run Machine Learning at Scale.
              </h2>
              <p className="pt-10 text-sm sm:text-2xl text-gray-100">
                Automate Data Science most time consuming processes, allowing
                Data Engineers and Data Scientists to train, deploy and run
                models at scale with low friction.
              </p>
            </div>
          </div>
        </div>

        <div className="flex relative items-center">
          <div className="container mx-auto px-6 flex relative -mt-12">
            <RatioImage
              className="invisible md:visible w-full"
              ratio={(348 / 1230) * 100}
              src="/assets/at-scale.svg"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-700 to-gray-600">
        <div className="flex relative items-center">
          <div className="container mx-auto px-6 flex relative pt-32 pb-12">
            <div className="sm:w-2/3 md:w-4/5 flex flex-col relative z-20">
              <h2 className="text-5xl sm:text-7xl font-black flex flex-col leading-none text-white">
                Deliver Value Faster.
              </h2>
              <p className="pt-10 text-sm sm:text-2xl text-gray-100">
                Accelerate time-to-market by leveraging our AI assisted Data
                Science infrastructure.
              </p>
            </div>
          </div>
        </div>

        <div className="flex relative items-center">
          <div className="container mx-auto px-6 flex relative py-8">
            <div className="sm:w-0 md:w-1/12"></div>
            <div className="sm:w-full md:w-2/5 flex flex-col relative z-20 pl-6 md:pl-0">
              <h4 className="synx-feature text-3xl sm:text-3xl font-black flex flex-row leading-none text-white">
                AI Assisted Machine Learning.
              </h4>
              <p className="pt-4 text-sm sm:text-2xl text-gray-100">
                An AI build from expert to run thousands of data science
                experiments and find the best model for your own data.
              </p>
            </div>
          </div>
        </div>

        <div className="synx-line w-96 h-96">
          <Image
            src="/assets/synx-line.svg"
            layout="fill"
            objectFit="cover"
            alt="decoration"
          />
        </div>

        <div className="flex relative items-center">
          <div className="container mx-auto px-6 flex relative py-8">
            <div className="sm:w-0 md:w-6/12"></div>
            <div className="sm:w-full md:w-2/5 flex flex-col relative z-20 pl-6 md:pl-0">
              <h4 className="synx-feature text-3xl sm:text-3xl font-black flex flex-row leading-none text-white">
                Feature Engineering.
              </h4>
              <p className="pt-4 text-sm sm:text-2xl text-gray-100">
                Our Data Exploration Toolkit enables people to interact and
                analyze data in a more efficient way.
              </p>
            </div>
          </div>
        </div>

        <div className="flex relative items-center">
          <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-full md:w-2/5 flex flex-col relative z-20 pl-6 md:pl-0">
              <h4 className="synx-feature text-3xl sm:text-3xl font-black flex flex-row leading-none text-white">
                Data Engineering.
              </h4>
              <p className="pt-4 text-sm sm:text-2xl text-gray-100">
                Collect, process and transform your data into powerful and
                structured information.
              </p>
            </div>
          </div>
        </div>

        <div className="flex relative items-center">
          <div className="container mx-auto px-6 flex relative py-8">
            <div className="sm:w-0 md:w-7/12"></div>
            <div className="sm:w-full md:w-2/5 flex flex-col relative z-20 pl-6 md:pl-0">
              <h4 className="synx-feature text-3xl sm:text-3xl font-black flex flex-row leading-none text-white">
                Deploy Anywhere.
              </h4>
              <p className="pt-4 text-sm sm:text-2xl text-gray-100">
                You can adapt your models to any infrastructure, and run it
                either on the cloud, or as an on-premise appliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-700 to-gray-600">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-32">
            <div className="bg-gray-500 rounded-2xl shadow-xl p-12">
              <div className="w-full flex flex-col relative z-20">
                <p className="text-3xl md:text-5xl font-black flex flex-col leading-snug text-white">
                  We are a team of data scientists, engineers and dreamers in a
                  journey to make the tools that will make the future possible.
                </p>
                <p className="pt-9">
                  <Link href="/company/about">
                    <a className="link-fx-1 text-gray-200 text-sm hover:text-white h-8">
                      <span>Learn more about us</span>
                      <svg className="icon h-8 mt-3" viewBox="0 0 32 32" aria-hidden="true">
                        <g fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="16" cy="16" r="15.5" />
                          <line x1="10" y1="18" x2="16" y2="12" />
                          <line x1="16" y1="12" x2="22" y2="18" />
                        </g>
                      </svg>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
