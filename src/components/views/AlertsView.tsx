import { AlertCircle, Clock, Bell } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function AlertsView() {
  const alerts = [
    { id: 1, title: "دفعة متأخرة", student: "omar ahemd", date: "منذ ساعتين", type: "error", icon: AlertCircle },
    { id: 2, title: "استحقاق قريب", student: "ali amar", date: "غداً", type: "warning", icon: Clock },
    { id: 3, title: "غياب متكرر", student: "ibrahem sameer", date: "منذ يومين", type: "info", icon: Bell },
  ];

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">التنبيهات</h2>
        <button className="text-sm text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl font-bold transition-all">تحديد الكل كقروء</button>
      </div>

      <div className="grid gap-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between group hover:border-blue-200 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className={cn(
                "p-3 rounded-xl",
                alert.type === "error" ? "bg-red-50 text-red-600" :
                alert.type === "warning" ? "bg-amber-50 text-amber-600" :
                "bg-blue-50 text-blue-600"
              )}>
                <alert.icon size={24} />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-gray-900">{alert.title}</h3>
                <p className="text-sm text-gray-500">الطالب: {alert.student}</p>
              </div>
            </div>
            <div className="text-left">
              <span className="text-xs text-gray-400 font-medium">{alert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
