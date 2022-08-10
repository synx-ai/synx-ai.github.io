import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <main className="dark bg-gray-700 relative h-screen">
      <Head>
        <title>Synx - DeepLab</title>
      </Head>
      <Header />

      <section className="bg-gray-700">
        <div className="flex relative z-20 items-center pb-8">
          <div className="container mx-auto px-6 flex relative pt-44 pb-12">
            <div className="w-full md:w-4/5 flex flex-col relative z-20">
              <h1 className="text-5xl sm:text-7xl font-black flex flex-col sm:leading-snug leading-snug text-white">
                DeepLab
              </h1>
              <span className="w-28 h-1.5 rounded-full bg-white mt-8"></span>
              <p className="pt-10 text-sm sm:text-2xl text-white">
                Automate your Neural Networks training for Deep Learning.
                Pre-process High Dimensional data with autoenconders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
