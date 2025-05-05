import { Check, X } from 'lucide-react';

const ComparisonTable = ({ title, columns = [], rows = [] }) => (
  <section className="max-w-6xl mx-auto px-4 pb-20">
    <div className="overflow-auto rounded-lg shadow">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th 
                key={i} 
                className={`text-left py-4 px-6 bg-white text-gray-800 font-semibold ${
                  i === 0 ? "w-1/4" : ""
                }`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {row.map((cell, j) => (
                <td key={j} className="py-4 px-6 border-t border-gray-200 text-gray-800">
                  {cell === true ? (
                    <Check className="text-green-600 h-5 w-5" />
                  ) : cell === false ? (
                    <X className="text-red-500 h-5 w-5" />
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="text-center text-gray-500 mt-4 text-sm">
      A detailed comparison of {title.toLowerCase()} features.
    </p>
  </section>
);

export default ComparisonTable;
