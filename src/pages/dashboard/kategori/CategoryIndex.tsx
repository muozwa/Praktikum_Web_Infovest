import { Link } from "react-router-dom";

type Category = {
  id: number;
  name: string;
  status: "Aktif" | "Nonaktif";
};

const categories: Category[] = [
  { id: 1, name: "Seminar", status: "Aktif" },
  { id: 2, name: "Workshop", status: "Aktif" },
  { id: 3, name: "Talkshow", status: "Nonaktif" },
];

function StatusBadge({ status }: { status: Category["status"] }) {
  return (
    <span
      className={`text-xs px-3 py-1 rounded-full font-semibold ${
        status === "Aktif"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-600"
      }`}
    >
      {status}
    </span>
  );
}

export default function CategoryIndex() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#7B1D3F]">
            Data Kategori
          </h1>
          <p className="text-sm text-gray-500">
            Kelola kategori event kamu
          </p>
        </div>

        <Link
          to="/dashboard/category/create"
          className="bg-[#7B1D3F] text-white px-5 py-2 rounded-xl shadow-md hover:bg-[#5a152e] transition"
        >
          + Tambah
        </Link>
      </div>

      {/* LAYOUT GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* LIST */}
        <div className="md:col-span-2 space-y-4">
          {categories.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex justify-between items-center hover:scale-[1.01] transition"
            >
              {/* LEFT */}
              <div>
                <h2 className="font-semibold text-lg text-[#1a0a10]">
                  {item.name}
                </h2>
                <div className="mt-1">
                  <StatusBadge status={item.status} />
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-sm rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition">
                  Edit
                </button>
                <button className="px-3 py-1.5 text-sm rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition">
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SIDE INFO */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 h-fit">
          <h3 className="font-semibold text-[#7B1D3F] mb-3">
            Ringkasan
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Total Kategori</span>
              <span className="font-bold">{categories.length}</span>
            </div>

            <div className="flex justify-between">
              <span>Aktif</span>
              <span className="text-green-600 font-semibold">
                {categories.filter(c => c.status === "Aktif").length}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Nonaktif</span>
              <span className="text-red-600 font-semibold">
                {categories.filter(c => c.status === "Nonaktif").length}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}