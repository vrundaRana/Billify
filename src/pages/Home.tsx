import { Crown, FileText, ShieldCheck, Zap } from "lucide-react";


const Home = () => {
  return (
    <main className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 font-['DynaPuff']">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent mb-6">
          Billify: Receipts Made Effortless
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          Create professional-looking receipts in seconds. No design skills needed. Just register your business, choose a template, and print.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/register"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Start for Free
          </a>
          <a
            href="/features"
            className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            View Features
          </a>
        </div>
      </section>

      {/* Feature Section */}
      {/* Feature Section */}

      <section className="py-20 px-0 mt-20 bg-[#D5C7A3]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
            <FileText size={40} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Templates</h3>
            <p className="text-gray-600">
              Pick from professionally designed templates tailored to your business type.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
            <ShieldCheck size={40} className="mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">
              Your data is encrypted and stored safely — always under your control.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
            <Zap size={40} className="mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant PDF Download</h3>
            <p className="text-gray-600">
              Generate and download PDF receipts instantly with one click.
            </p>
          </div>
        </div>
      </section>



      {/* Why Billify? */}
      <section className="text-center mt-16 py-10 m-4">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mb-8 shadow-sm">
          <h2 className="font-semibold text-slate-900 uppercase">
            Why Billify ?
          </h2>
        </div>
        <h1 className="font-bold text-gray-800 mb-16 text-4xl md:text-5xl">
          Reasons to Choose Billify
        </h1>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="w-full h-64 [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] cursor-pointer">
              {/* Front Side */}
              <div className="absolute w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6">
                <Crown size={48} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Most Affordable</h3>
                <p className="text-sm opacity-90">Best pricing in market</p>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6">
                <h3 className="text-lg font-bold mb-3">Starting at $0</h3>
                <p className="text-sm text-center">Free tier with 50 receipts/month. Premium plans start at just $5/month with unlimited receipts.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full h-64 [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] cursor-pointer">
              {/* Front Side */}
              <div className="absolute w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6">
                <Zap size={48} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                <p className="text-sm opacity-90">Generate receipts instantly</p>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6">
                <h3 className="text-lg font-bold mb-3">Under 3 Seconds</h3>
                <p className="text-sm text-center">Our optimized system generates professional PDF receipts in under 3 seconds. No waiting, no delays.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full h-64 [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] cursor-pointer">
              {/* Front Side */}
              <div className="absolute w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6">
                <ShieldCheck size={48} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">100% Secure</h3>
                <p className="text-sm opacity-90">Bank-level encryption</p>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-red-600 to-pink-600 text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6">
                <h3 className="text-lg font-bold mb-3">SSL + AES-256</h3>
                <p className="text-sm text-center">Your data is protected with military-grade encryption. We never store sensitive payment information.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24 py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses already using Billify to create professional receipts effortlessly.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="/register"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-lg"
            >
              Get Started Free
            </a>
            <a
              href="/features"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-10 py-4 rounded-lg transition-all text-lg"
            >
              Learn More
            </a>
          </div>
          <p className="mt-8 text-sm opacity-75">
            No credit card required • 50 free receipts • Cancel anytime
          </p>
        </div>
      </section>
    </main>

  );
};

export default Home;
