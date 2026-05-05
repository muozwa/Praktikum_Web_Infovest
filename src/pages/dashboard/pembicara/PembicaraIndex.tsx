import { Link } from "react-router-dom";

const speakers = [
  { id: 1, name: "Dery Agung Triyadi", job: "Aws Indonesia", email: "DeryAgung@mail.com" },
  { id: 2, name: "Danang Avan M", job: "UI/UX Designer", email: "danang@mail.com" },
  { id: 3, name: "Sowam Habibi", job: "Google Indonesia", email: "SowanH@gmail.com "},
  { id: 4, name: "Lhuqita Fazry", job: "Mobile Development", email: "Lhuqita@gmail.com "},
  { id: 5, name: "M. Dendi Purwanto", job: "Artificial Intelligence", email: "MDendi.P.@gmail.com "},
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="w-9 h-9 rounded-full bg-[#7B1D3F] text-white text-xs font-bold flex items-center justify-center">
      {initials}
    </div>
  );
}

export default function PembicaraIndex() {
  return (
    <div className="px-10 py-10 max-w-5xl mx-auto">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#7B1D3F]">
            Pembicara
          </h1>
          <p className="text-sm text-gray-400">
            Kelola pembicara event
          </p>
        </div>

        <Link
          to="/dashboard/pembicara/create"
          className="bg-[#7B1D3F] text-white px-4 py-2 rounded-lg shadow hover:bg-[#5a152e]"
        >
          Tambah
        </Link>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-lg p-4">

        <table className="w-full text-sm">

          <thead>
            <tr className="text-gray-400 text-xs uppercase">
              <th className="px-4 py-3 text-left">No</th>
              <th className="px-4 py-3 text-left">Nama</th>
              <th className="px-4 py-3 text-left">Pekerjaan</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {speakers.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">

                <td className="px-4 py-4 text-gray-400">
                  {index + 1}
                </td>

                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar name={item.name} />
                    <span className="font-semibold text-[#1a0a10]">
                      {item.name}
                    </span>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-md text-xs">
                    {item.job}
                  </span>
                </td>

                <td className="px-4 py-4 text-gray-500">
                  {item.email}
                </td>

                <td className="px-4 py-4">
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
          Total: {speakers.length} pembicara
        </div>

      </div>
    </div>
  );
}