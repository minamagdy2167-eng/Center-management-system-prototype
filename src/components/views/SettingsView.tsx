import { Settings, Bell, Lock, User, Globe, Moon } from "lucide-react";

export default function SettingsView() {
  const sections = [
    { title: "الحساب", icon: User, items: ["تعديل الملف الشخصي", "تغيير البريد الإلكتروني"] },
    { title: "الأمان", icon: Lock, items: ["تغيير كلمة المرور", "تحقق بخطوتين"] },
    { title: "التنبيهات", icon: Bell, items: ["تنبيهات المدفوعات", "تنبيهات الغياب"] },
    { title: "النظام", icon: Globe, items: ["اللغة (العربية)", "المظهر (فاتح / داكن)"] },
  ];

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
          <Settings size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">الإعدادات</h2>
          <p className="text-sm text-gray-500">تخصيص تفضيلات النظام وإدارة الحساب</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-50 text-gray-400 rounded-lg">
                <section.icon size={20} />
              </div>
              <h3 className="font-bold text-gray-900">{section.title}</h3>
            </div>
            <div className="space-y-1">
              {section.items.map((item, iIdx) => (
                <button key={iIdx} className="w-full text-right p-3 rounded-xl hover:bg-gray-50 text-sm font-medium text-gray-600 transition-all flex items-center justify-between group">
                  <span>{item}</span>
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <span className="text-[10px] text-gray-400">{'<'}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
