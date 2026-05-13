import { Search, Plus, Edit, Trash2 } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function StudentsView() {
  const students = [
    { id: "STU000003", name: "ibrahem sameer", group: "C26 Group", plan: "دفعة واحدة", amount: "6,000 ج.م / 6,000 ج.م", status: "مدفوع", statusColor: "text-green-600 bg-green-50", regDate: "2026/04/29", dueDate: "-" },
    { id: "STU000002", name: "ali amar", group: "E26 Group", plan: "شهري", amount: "0 ج.م / 850 ج.م", status: "مستحق قريباً", statusColor: "text-amber-600 bg-amber-50", regDate: "2026/04/29", dueDate: "2026/04/29" },
    { id: "STU000001", name: "omar ahemd", group: "C26 Group", plan: "شهري", amount: "0 ج.م / 850 ج.م", status: "متأخر", statusColor: "text-red-600 bg-red-50", regDate: "2026/02/11", dueDate: "2026/02/11" },
  ];

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">قائمة الطلاب</h2>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-800 transition-colors">
          <Plus size={20} />
          <span>إضافة طالب جديد</span>
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="البحث بالاسم أو رقم الطالب..." 
            className="w-full pr-10 pl-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>
        <select className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
          <option>جميع المجموعات</option>
          <option>C26 Group</option>
          <option>E26 Group</option>
        </select>
        <select className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
          <option>جميع الحالات</option>
          <option>مدفوع</option>
          <option>متأخر</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 text-xs font-medium uppercase tracking-wider">
                <th className="px-6 py-4">رقم الطالب</th>
                <th className="px-6 py-4">الاسم</th>
                <th className="px-6 py-4">المجموعة</th>
                <th className="px-6 py-4">خطة الدفع</th>
                <th className="px-6 py-4">المبلغ المدفوع</th>
                <th className="px-6 py-4">حالة الدفع</th>
                <th className="px-6 py-4">تاريخ التسجيل</th>
                <th className="px-6 py-4">تاريخ الاستحقاق</th>
                <th className="px-6 py-4">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">{student.id}</td>
                  <td className="px-6 py-4 text-sm font-medium">{student.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.group}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.plan}</td>
                  <td className="px-6 py-4 text-sm font-mono">{student.amount}</td>
                  <td className="px-6 py-4">
                    <span className={cn("px-3 py-1 rounded-full text-xs font-medium", student.statusColor)}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 font-mono tracking-tighter">{student.regDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 font-mono tracking-tighter">{student.dueDate}</td>
                  <td className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 justify-end">
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        <Edit size={18} />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-gray-50 text-[10px] text-gray-400 border-t border-gray-100 space-y-1">
          <p>• استخدم الأسهم للتنقل بين الصفوف</p>
          <p>• اضغط Enter أو Space لتعديل الطالب المحدد</p>
          <p>• اضغط Escape لإلغاء التحديد</p>
        </div>
      </div>
    </div>
  );
}
