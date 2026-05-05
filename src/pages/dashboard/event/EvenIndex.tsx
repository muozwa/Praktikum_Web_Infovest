import { Link } from "react-router-dom";

const events = [
  { id: 1, name: "Tlakshow", category: "Tlakshow", date: "2026-01-10", status: "Aktif" },
  { id: 2, name: "Workshop React", category: "Workshop", date: "2026-02-15", status: "Nonaktif" },
  { id: 3, name: "Seminar", category: "Seminar", date: "2026-03-20", status: "Aktif" },
];

export default function EventIndex() {
  return (
    <div className="px-10 py-10 max-w-5xl mx-auto">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#7B1D3F]">
            Data Event
          </h1>
          <p className="text-sm text-gray-400">
            Kelola semua event
          </p>
        </div>

        <Link
          to="/dashboard/event/create"
          className="bg-[#7B1D3F] text-white px-4 py-2 rounded-lg shadow hover:bg-[#5a152e]"
        >
          Tambah Event
        </Link>
      </div>

      {/* KOTAK TABEL */}
      <div className="bg-white shadow-lg rounded-xl p-5">

        <table className="w-full text-sm">

          {/* HEADER TABEL */}
          <thead>
            <tr className="text-gray-400 text-xs">
              <th className="py-3 text-left">No</th>
              <th className="text-left">Nama Event</th>
              <th className="text-left">Kategori</th>
              <th className="text-left">Tanggal</th>
              <th className="text-left">Status</th>
              <th className="text-left">Aksi</th>
            </tr>
          </thead>

          {/* ISI */}
          <tbody>
            {events.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition">

                <td className="py-4 text-gray-400">
                  {index + 1}
                </td>

                <td className="font-medium text-[#1a0a10]">
                  {item.name}
                </td>

                <td>
                  <span className="bg-gray-100 px-3 py-1 rounded-md text-xs">
                    {item.category}
                  </span>
                </td>

                <td className="text-gray-500">
                  {new Date(item.date).toLocaleDateString("id-ID")}
                </td>

                <td>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      item.status === "Aktif"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-xs rounded-md bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-xs rounded-md bg-red-100 text-red-600 hover:bg-red-200">
                      Hapus
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

        {/* FOOTER */}
        <div className="mt-4 text-xs text-gray-400">
          Total: {events.length} event
        </div>

      </div>
    </div>
  );
}