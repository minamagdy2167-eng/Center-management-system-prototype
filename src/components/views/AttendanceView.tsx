import { Calendar, Search, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function AttendanceView() {
  const attendance = [
    { id: "STU000003", name: "ibrahem sameer", group: "C26 Group", status: "حاضر", statusColor: "bg-green-100 text-green-700", total: 1, rate: "100.0%", last: "-" },
    { id: "STU000002", name: "ali amar", group: "E26 Group", status: "غائب", statusColor: "bg-red-100 text-red-700", total: 1, rate: "-", last: "-" },
    { id: "STU000001", name: "omar ahemd", group: "C26 Group", status: "غائب", statusColor: "bg-red-100 text-red-700", total: 78, rate: "-", last: "-" },
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-28">
           <span className="text-gray-500 text-sm font-medium">في المجموعة المحددة</span>
           <span className="text-3xl font-bold text-gray-800 self-end">3</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-28">
           <span className="text-gray-500 text-sm font-medium">حاضر</span>
           <span className="text-3xl font-bold text-green-600 self-end">1</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-28">
           <span className="text-gray-500 text-sm font-medium">غائب</span>
           <span className="text-3xl font-bold text-red-500 self-end">2</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-28">
           <span className="text-gray-500 text-sm font-medium">نسبة الحضور اليوم</span>
           <span className="text-3xl font-bold text-blue-600 self-end">33.3%</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold mb-6 text-right">فلاتر الحضور</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm text-gray-500">التاريخ</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="date" defaultValue="2026-04-29" className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-500">المجموعة</label>
            <select className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white">
              <option>جميع المجموعات</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-500">البحث</label>
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="البحث بالاسم أو الرقم..." 
                className="w-full pr-10 pl-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-lg font-bold">سجل الحضور - 2026/4/29</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 text-xs font-medium uppercase tracking-wider">
                <th className="px-6 py-4">رقم الطالب</th>
                <th className="px-6 py-4">الاسم</th>
                <th className="px-6 py-4">المجموعة</th>
                <th className="px-6 py-4 text-center">الحضور اليوم</th>
                <th className="px-6 py-4 text-center">إجمالي الحضور</th>
                <th className="px-6 py-4 text-center">معدل الحضور</th>
                <th className="px-6 py-4 text-center">آخر حضور</th>
                <th className="px-6 py-4 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {attendance.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">{row.id}</td>
                  <td className="px-6 py-4 text-sm font-medium">{row.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.group}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={cn("px-4 py-1 rounded-full text-xs font-bold", row.statusColor)}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-mono">{row.total}</td>
                  <td className="px-6 py-4 text-center text-sm font-mono">{row.rate}</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-400">{row.last}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className={cn(
                        "p-1 rounded bg-white shadow-sm border transition-all",
                        row.status === "حاضر" ? "text-green-600 border-green-200" : "text-gray-400 border-gray-100"
                      )}>
                        <CheckCircle2 size={20} />
                      </button>
                      <button className={cn(
                        "p-1 rounded bg-white shadow-sm border transition-all",
                        row.status === "غائب" ? "text-red-600 border-red-200" : "text-gray-400 border-gray-100"
                      )}>
                        <XCircle size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
