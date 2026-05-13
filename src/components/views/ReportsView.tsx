import { FileText, Calendar, Download, Users, QrCode } from "lucide-react";
import { ReportAction, StatCard } from "../common";

export default function ReportsView() {
  return (
    <div className="space-y-6 pb-20">
      {/* Export Reports Card */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <FileText size={24} className="text-blue-600" />
          <h2 className="text-lg font-bold">تصدير التقارير</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ReportAction icon={Calendar} label="تقرير الحضور" />
          <ReportAction icon={Download} label="ملخص المدفوعات" />
          <ReportAction icon={Users} label="قائمة الطلاب" />
          <ReportAction icon={QrCode} label="رموز QR" />
        </div>

        <div className="mt-6 text-sm text-gray-500 space-y-1 bg-gray-50 p-4 rounded-xl border border-dashed border-gray-300">
          <p>• جميع الملفات المصدرة بصيغة CSV مع دعم النصوص العربية</p>
          <p>• يتم حفظ الملفات في مجلد التحميلات الافتراضي</p>
          <p>• أسماء الملفات تتضمن التاريخ الحالي</p>
        </div>
      </div>

      {/* Stats Card */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">إحصائيات التصدير</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="إجمالي الطلاب" value="3" color="text-blue-600" />
          <StatCard label="طلاب مدفوعين" value="1" color="text-green-600" />
          <StatCard label="مدفوعات متأخرة" value="1" color="text-red-500" />
          <StatCard label="المجموعات" value="2" color="text-purple-600" />
        </div>
      </div>
    </div>
  );
}
