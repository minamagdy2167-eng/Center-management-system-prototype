import { Users, Printer, QrCode } from "lucide-react";
import { StatCard } from "../common";

export default function QRCodesView() {
  const groups = [
    { name: "C26 Group", students: 2, members: [
      { name: "ibrahem sameer", id: "STU000003" },
      { name: "omar ahemd", id: "STU000001" }
    ]},
    { name: "E26 Group", students: 1, members: [
      { name: "ali amar", id: "STU000002" }
    ]}
  ];

  return (
    <div className="space-y-6 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="إجمالي الطلاب" value="3" color="text-green-600" />
        <StatCard label="المجموعات المعروضة" value="2" color="text-purple-600" />
        <StatCard label="إجمالي المجموعات" value="2" color="text-blue-600" />
      </div>

      {groups.map((group, idx) => (
        <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Users size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{group.name}</h3>
                <p className="text-xs text-gray-500">طالب {group.students}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-sm text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg flex items-center gap-2 transition-all">
                <Printer size={16} />
                <span>تصدير PDF</span>
              </button>
              <button className="text-sm text-gray-500 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-all">إخفاء</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {group.members.map((member, mIdx) => (
              <div key={mIdx} className="border border-gray-100 rounded-xl p-4 flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-32 h-32 bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-gray-300">
                  <QrCode size={80} className="text-gray-800" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-sm text-gray-800">{member.name}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">الرقم التعريفي: {member.id}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">المجموعة: {group.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
