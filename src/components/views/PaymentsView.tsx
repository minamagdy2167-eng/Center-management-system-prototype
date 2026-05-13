import { QrCode, Search } from "lucide-react";
import { StatusOverviewCard } from "../common";

export default function PaymentsView() {
  return (
    <div className="space-y-6 pb-20">
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="space-y-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-500 uppercase">0/1</span>
              <span className="text-sm font-medium text-gray-400">C26 Group</span>
            </div>
            <div className="w-full md:w-64 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="w-0 h-full bg-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="text-right space-y-2 w-full md:w-auto">
             <div className="flex items-center justify-end gap-4">
               <span className="text-sm text-gray-500">المحصل</span>
               <span className="text-sm font-bold text-green-600">0 ج.م</span>
             </div>
             <div className="flex items-center justify-end gap-4">
               <span className="text-sm text-gray-500">المتوقع</span>
               <span className="text-sm font-bold text-blue-600">850 ج.م</span>
             </div>
             <div className="flex items-center justify-end gap-4">
               <span className="text-sm text-gray-500">المتبقي</span>
               <span className="text-sm font-bold text-red-500">850 ج.م</span>
             </div>
             <div className="mt-4">
                <div className="text-3xl font-bold text-gray-800">0%</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-tighter">معدل التحصيل</div>
             </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold mb-2">توزيع حالات الدفع</h3>
        <p className="text-sm text-gray-500 mb-6 font-medium">نظرة عامة على حالة المدفوعات لجميع الطلاب</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatusOverviewCard label="مدفوع" value="0" color="bg-green-50 text-green-600" />
          <StatusOverviewCard label="غير مستحق" value="0" color="bg-blue-50 text-blue-600" />
          <StatusOverviewCard label="مستحق قريباً" value="0" color="bg-amber-50 text-amber-600" />
          <StatusOverviewCard label="متأخر" value="1" color="bg-red-50 text-red-500" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <QrCode size={24} className="text-blue-600" />
          <h3 className="text-xl font-bold">مسح رمز QR للحضور</h3>
        </div>
        <div className="relative mb-6">
          <input 
            type="text" 
            placeholder="امسح رمز QR أو أدخل رقم الطالب..." 
            className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-right pr-4 pl-12"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
        </div>
        <ul className="text-xs text-gray-500 space-y-2 bg-gray-50 p-4 rounded-xl border border-dashed border-gray-300">
           <li>• امسح رمز QR الخاص بالطالب أو أدخل رقم الطالب يدوياً</li>
           <li>• اضغط Enter لتسجيل الحضور</li>
           <li>• اضغط Escape لمسح النص المدخل</li>
           <li>• سيتم عرض حالة الدفع بعد المسح</li>
        </ul>
      </div>
    </div>
  );
}
