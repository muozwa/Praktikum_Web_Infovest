type Stat = {
  title: string;
  value: number;
};

type EventItem = {
  name: string;
  date: string;
};

type SpeakerItem = {
  name: string;
  job: string;
};

const stats: Stat[] = [
  { title: "Kategori", value: 10 },
  { title: "Event", value: 25 },
  { title: "Pembicara", value: 8 },
  { title: "Event Aktif", value: 5 },
];

const events: EventItem[] = [
  { name: "Seminar", date: "10 Jan 2026" },
  { name: "Workshop", date: "15 Feb 2026" },
  { name: "Talkshow", date: "20 Mar 2026" },
];

const speakers: SpeakerItem[] = [
  { name: "Dery Agung Triyadi", job: "Aws Indonesia" },
  { name: "Sowam Habibi", job: "Google Indonesia" },
  { name: "Lhuqita Fazry", job: "Mobile Development" },
];

export default function Dashboard() {
  return (
    <div className="p-6 max-w-6xl mx-auto">

      {/* Header */}
      <h1 className="text-2xl font-bold mb-1 text-[#7B1D3F] tracking-tight">
        Dashboard
      </h1>
      <p className="mb-6 text-gray-600">
        Selamat datang, berikut ringkasan data hari ini.
      </p>

      {/* Statistik */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <p className="text-sm text-gray-500 mb-1">
              {item.title}
            </p>
            <p className="text-2xl font-bold text-[#7B1D3F]">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* BAWAH */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* EVENT */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="font-semibold mb-4 text-[#7B1D3F] text-lg">
            Event Terbaru
          </h2>

          <ul className="space-y-3">
            {events.map((item) => (
              <li
                key={item.name}
                className="border-b pb-3 last:border-none"
              >
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-400 text-sm">
                  {item.date}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* PEMBICARA */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="font-semibold mb-4 text-[#7B1D3F] text-lg">
            Pembicara Terbaru
          </h2>

          <ul className="space-y-3">
            {speakers.map((item) => (
              <li
                key={item.name}
                className="border-b pb-3 last:border-none"
              >
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-400 text-sm">
                  {item.job}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}