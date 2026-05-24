import Upload from "../components/Upload"
import Flowchart from "../components/flowchart"

function Dashboard() {

  return (

    <div className="space-y-8">

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          Upload Report
        </h2>

        <Upload />

      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          Analytics
        </h2>

        <Flowchart />

      </div>

    </div>

  )
}

export default Dashboard