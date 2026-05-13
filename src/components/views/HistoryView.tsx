import { History, UserPlus, LogIn, CreditCard } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function HistoryView() {
  const events = [
    { id: 1, action: "تسجيل حضور", user: "ibrahem sameer", time: "10:30 AM", date: "اليوم", type: "attendance", icon: LogIn },
    { id: 2, action: "إضافة طالب جديد", user: "ali amar", time: "09:15 AM", date: "اليوم", type: "student", icon: UserPlus },
    { id: 3, action: "عملية دفع", user: "omar ahemd", time: "Yesterday", date: "منذ يوم", type: "payment", icon: CreditCard },
  ];

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
          <History size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">سجل العمليات</h2>
          <p className="text-sm text-gray-500">تتبع جميع التغييرات والنشاطات التي تتم في النظام</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute right-6 top-0 bottom-0 w-px bg-gray-200"></div>
        <div className="space-y-8 relative">
          {events.map((event) => (
            <div key={event.id} className="flex items-start gap-4">
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center relative z-10 border-4 border-gray-50",
                event.type === "attendance" ? "bg-green-100 text-green-600" :
                event.type === "student" ? "bg-blue-100 text-blue-600" :
                "bg-purple-100 text-purple-600"
              )}>
                <event.icon size={20} />
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-gray-900">{event.action}</h3>
                  <span className="text-xs text-gray-400 font-mono">{event.time}</span>
                </div>
                <p className="text-sm text-gray-500">تم بواسطة: <span className="font-medium text-gray-700">{event.user}</span></p>
                <p className="text-xs text-gray-400 mt-2">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
