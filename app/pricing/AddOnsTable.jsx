const AddOnsTable = ({ title = "Add-Ons", addons = [] }) => (
  <section className="max-w-6xl mx-auto px-4 pb-20">
    <h2 className="text-2xl font-bold mb-6 text-center text-[var(--primary-colour)]">{title}</h2>
    <div className="overflow-auto rounded-lg shadow">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left py-4 px-6 bg-white text-gray-800 font-semibold w-1/4">Add-On</th>
            <th className="text-left py-4 px-6 bg-white text-gray-800 font-semibold w-1/4">Price</th>
            <th className="text-left py-4 px-6 bg-white text-gray-800 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {addons.map((item, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="py-4 px-6 border-t border-gray-200 text-gray-800 font-medium">{item.name}</td>
              <td className="py-4 px-6 border-t border-gray-200 text-gray-800">{item.price}</td>
              <td className="py-4 px-6 border-t border-gray-200 text-gray-800">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
)

export default AddOnsTable
