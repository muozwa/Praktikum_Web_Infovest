import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  category: string;
  date: string;
  status: string;
};

export default function EventCreate() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Event berhasil dibuat");

    navigate("/dashboard/event");
  };

  return (
    <div className="px-10 py-10 max-w-3xl mx-auto">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#7B1D3F]">
          Tambah Event
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Tambahkan event baru ke dalam sistem
        </p>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-md p-6">

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Nama */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Nama Event
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Contoh: Seminar AI"
              className="w-full mt-1 px-4 py-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            />
          </div>

          {/* Kategori */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Kategori
            </label>
            <input
              type="text"
              {...register("category")}
              placeholder="Seminar / Workshop"
              className="w-full mt-1 px-4 py-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            />
          </div>

          {/* Tanggal */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Tanggal
            </label>
            <input
              type="date"
              {...register("date")}
              className="w-full mt-1 px-4 py-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            />
          </div>

          {/* Status */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Status
            </label>
            <select
              {...register("status")}
              className="w-full mt-1 px-4 py-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#7B1D3F]"
            >
              <option value="">Pilih status</option>
              <option value="Aktif">Aktif</option>
              <option value="Nonaktif">Nonaktif</option>
            </select>
          </div>

          {/* BUTTON */}
          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={() => navigate("/dashboard/event")}
              className="px-4 py-2 rounded-xl border text-gray-500 hover:bg-gray-100"
            >
              Batal
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#7B1D3F] text-white hover:bg-[#5a152e]"
            >
              Simpan
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}