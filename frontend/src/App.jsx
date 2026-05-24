import Upload from "./components/Upload"

function App() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-slate-900">

      {/* NAVBAR */}

      <nav className="flex justify-between items-center px-10 py-6 bg-white/70 backdrop-blur-md border-b border-purple-200 shadow-sm">

        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            MedAI Pro
          </h1>

          <p className="text-slate-500 text-sm">
            AI Medical Report Analyzer
          </p>
        </div>

        <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-all duration-300 px-5 py-2 rounded-xl font-semibold text-white shadow-lg">
          Dashboard
        </button>

      </nav>

      {/* HERO */}

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="text-center mb-16">

          <h1 className="text-6xl font-bold mb-6 leading-tight text-slate-900">

            AI Powered <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Medical Analysis
            </span>

          </h1>

          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">

            Upload blood reports and get instant AI-generated
            medical insights with charts, summaries, OCR,
            abnormality detection, and chatbot support.

          </p>

        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}

          <div className="lg:col-span-2">

            <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-3xl p-8 shadow-2xl">

              <h2 className="text-3xl font-bold mb-6 text-purple-700">
                Upload Report
              </h2>

              <Upload />

            </div>

          </div>

          {/* RIGHT */}

          <div className="space-y-6">

            <div className="bg-white/80 backdrop-blur-lg border border-pink-200 p-6 rounded-3xl shadow-2xl">

              <h3 className="text-xl font-bold mb-4 text-pink-600">
                Features
              </h3>

              <div className="space-y-4">

                <div className="bg-pink-50 p-4 rounded-2xl">
                  <h4 className="font-semibold text-slate-900">
                    Smart Analysis
                  </h4>

                  <p className="text-slate-600 text-sm">
                    Detect abnormal parameters instantly.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-2xl">
                  <h4 className="font-semibold text-slate-900">
                    OCR + PDF Extraction
                  </h4>

                  <p className="text-slate-600 text-sm">
                    Supports scanned reports and PDFs.
                  </p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-2xl">
                  <h4 className="font-semibold text-slate-900">
                    AI Chatbot
                  </h4>

                  <p className="text-slate-600 text-sm">
                    Ask medical questions instantly.
                  </p>
                </div>

              </div>

            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-3xl shadow-2xl">

              <h3 className="text-2xl font-bold mb-3">
                Accuracy
              </h3>

              <p className="text-5xl font-bold">
                98.7%
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default App