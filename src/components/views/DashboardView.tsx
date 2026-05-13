import { Users, CheckCircle2, AlertTriangle, Clock, TrendingUp, Wallet } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function DashboardView() {
  return (
    <div className="space-y-6 pb-20">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          label="إجمالي الطلاب" 
          value="5" 
          subtext="+5 هذا الشهر" 
          icon={Users} 
          iconColor="text-blue-500" 
          bgColor="bg-white"
        />
        <StatCard 
          label="مدفوع بالكامل" 
          value="2" 
          subtext="40% من الإجمالي" 
          icon={CheckCircle2} 
          iconColor="text-green-500"
          bgColor="bg-white"
        />
        <StatCard 
          label="مدفوعات متأخرة" 
          value="0" 
          subtext="يتطلب متابعة فورية" 
          icon={AlertTriangle} 
          iconColor="text-red-500"
          bgColor="bg-white"
        />
        <StatCard 
          label="مستحق قريباً" 
          value="2" 
          subtext="خلال 7 أيام" 
          icon={Clock} 
          iconColor="text-amber-500"
          bgColor="bg-white"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="text-blue-600">$</span>
              الإيرادات
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
               <span className="text-gray-500">المحصل</span>
               <span className="font-bold text-gray-900 font-mono tracking-tight text-lg">14,791 ج.م</span>
            </div>
            <div className="flex justify-between items-center text-sm">
               <span className="text-gray-500">المتوقع</span>
               <span className="font-bold text-gray-900 font-mono tracking-tight text-lg">24,850 ج.م</span>
            </div>
            <div className="flex justify-between items-center text-sm">
               <span className="text-gray-500">المتبقي</span>
               <span className="font-bold text-red-500 font-mono tracking-tight text-lg">10,059 ج.م</span>
            </div>
            <div className="pt-4 border-t border-gray-50">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-sm font-bold text-gray-700">معدل التحصيل</span>
                 <span className="text-sm font-bold text-blue-600">59.5%</span>
               </div>
               <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-900 rounded-full w-[59.5%]" />
               </div>
            </div>
          </div>
        </div>

        {/* Group Stats Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <TrendingUp className="text-blue-600" size={24} />
              إحصائيات المجموعات
            </h2>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-gray-700">E26 Group</span>
                <span className="text-gray-500 font-mono">0/2</span>
              </div>
              <div className="h-2 w-full bg-blue-50 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full w-[0%]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-gray-700">C26 Group</span>
                <span className="text-gray-500 font-mono">2/3</span>
              </div>
              <div className="h-2 w-full bg-blue-50 rounded-full overflow-hidden">
                <div className="h-full bg-gray-900 rounded-full w-[66%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Status Distribution */}
      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
        <div className="mb-8">
           <h2 className="text-2xl font-bold text-gray-900 mb-1">توزيع حالات الدفع</h2>
           <p className="text-sm text-gray-500 font-medium tracking-tight">نظرة عامة على حالة المدفوعات لجميع الطلاب</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
           <PaymentCaseCard label="مدفوع" value="2" color="bg-green-50 text-green-600" />
           <PaymentCaseCard label="في الانتظار" value="1" color="bg-blue-50 text-blue-600" />
           <PaymentCaseCard label="مستحق قريباً" value="2" color="bg-yellow-50 text-yellow-600" />
           <PaymentCaseCard label="متأخر" value="0" color="bg-red-50 text-red-600" />
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, subtext, icon: Icon, iconColor, bgColor }: any) {
  return (
    <div className={cn("p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between", bgColor)}>
      <div className="space-y-1">
        <p className="text-sm font-bold text-gray-900">{label}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        <p className="text-[10px] text-gray-400 font-medium">{subtext}</p>
      </div>
      <div className={cn("p-3 rounded-xl bg-gray-50", iconColor)}>
        <Icon size={24} />
      </div>
    </div>
  );
}

function PaymentCaseCard({ label, value, color }: any) {
  return (
    <div className={cn("p-8 rounded-xl text-center space-y-2", color)}>
       <span className="text-4xl font-bold block">{value}</span>
       <span className="text-sm font-bold">{label}</span>
    </div>
  );
}
