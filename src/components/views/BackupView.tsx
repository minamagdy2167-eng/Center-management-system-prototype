import { Database, Download, FileText, Lock, Upload, Eye, AlertCircle } from "lucide-react";

export default function BackupView() {
  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <Database size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">النسخ الاحتياطي والاستعادة</h2>
            <p className="text-sm text-gray-500">إنشاء واستعادة نسخ احتياطية لقاعدة البيانات مع دعم التشفير بكلمة مرور</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Create Backup */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Download size={20} className="text-blue-600" />
              إنشاء نسخة احتياطية
            </h3>
          </div>

          <div className="space-y-2">
             <label className="text-sm font-bold text-gray-700">مسار حفظ الملف</label>
             <div className="flex gap-2">
               <div className="flex-1 relative">
                 <input 
                   disabled
                   type="text" 
                   value="مثال: C:\backups\backup.cmsbackup" 
                   className="w-full p-3 border border-gray-100 rounded-xl bg-gray-50 text-gray-400 text-sm font-mono"
                 />
               </div>
               <button className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-100">
                 <FileText size={20} />
               </button>
             </div>
             <p className="text-[10px] text-gray-400">حدد المسار الكامل أو اضغط الزر لإنشاء اسم تلقائي</p>
          </div>

          <div className="bg-gray-50/50 p-4 rounded-xl border border-dashed border-gray-200 flex items-center justify-between group cursor-pointer hover:border-blue-400 transition-all">
             <div className="flex items-center gap-2">
                <Lock size={18} className="text-gray-400 group-hover:text-blue-500" />
                <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600">تشفير النسخة الاحتياطية</span>
             </div>
             <div className="w-10 h-6 bg-gray-200 rounded-full p-1 flex items-center justify-start">
               <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
             </div>
          </div>
          <p className="text-[10px] text-gray-400 -mt-4 mr-10 leading-relaxed">حماية بكلمة مرور باستخدام AES-256</p>

          <button className="w-full bg-gray-500 text-white p-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-600 transition-all shadow-lg shadow-gray-200">
            <Download size={20} />
            إنشاء نسخة احتياطية
          </button>
        </div>

        {/* Restore Backup */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
           <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Upload size={20} className="text-blue-600" />
              استعادة من نسخة احتياطية
            </h3>
          </div>

          <div className="space-y-2">
             <label className="text-sm font-bold text-gray-700">مسار ملف النسخة الاحتياطية</label>
             <input 
               disabled
               type="text" 
               value="مثال: C:\backups\backup.cmsbackup" 
               className="w-full p-3 border border-gray-100 rounded-xl bg-gray-50 text-gray-400 text-sm font-mono"
             />
          </div>

          <div className="space-y-2">
             <label className="text-sm font-bold text-gray-700">كلمة المرور (إذا كانت النسخة مشفرة)</label>
             <div className="relative">
               <input 
                 type="password" 
                 placeholder="اتركه فارغاً إذا لم تكن مشفرة" 
                 className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
               />
               <Eye size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
             </div>
          </div>

          <button className="w-full bg-gray-500 text-white p-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-600 transition-all shadow-lg shadow-gray-200">
            <Upload size={20} />
            استعادة من النسخة الاحتياطية
          </button>
          
          <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl flex gap-3">
             <AlertCircle className="text-orange-600 shrink-0 mt-0.5" size={20} />
             <div className="space-y-1">
               <span className="text-xs font-bold text-orange-800">تنبيه مهم:</span>
               <p className="text-[10px] text-orange-700 leading-relaxed">ستؤدي الاستعادة إلى استبدال جميع البيانات الحالية بالبيانات من النسخة الاحتياطية. يُنصح بإنشاء نسخة احتياطية قبل الاستعادة.</p>
             </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm border-t-4 border-t-blue-500">
         <div className="flex items-center justify-between">
           <h3 className="font-bold flex items-center gap-2">
              <FileText size={20} className="text-blue-600" />
              التحقق من نسخة احتياطية
           </h3>
         </div>
      </div>
    </div>
  );
}
