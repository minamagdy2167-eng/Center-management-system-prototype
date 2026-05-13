/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  QrCode, 
  Wallet, 
  AlertCircle, 
  Clock, 
  FileText, 
  Database, 
  Settings,
  ChevronRight,
  ChevronLeft,
  Search,
  Bell,
  LogOut,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  CheckCircle2,
  XCircle,
  Download,
  Upload,
  Lock,
  Unlock,
  Eye,
  Printer,
  History
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

// --- Types ---

type View = "dashboard" | "students" | "attendance" | "qrcodes" | "payments" | "alerts" | "history" | "reports" | "backup" | "settings";

interface NavItem {
  id: View;
  label: string;
  icon: any;
}

const navItems: NavItem[] = [
  { id: "dashboard", label: "الرئيسية", icon: LayoutDashboard },
  { id: "students", label: "الطلاب", icon: Users },
  { id: "attendance", label: "الحضور", icon: Calendar },
  { id: "qrcodes", label: "رموز QR", icon: QrCode },
  { id: "payments", label: "المدفوعات", icon: Wallet },
  { id: "alerts", label: "التنبيهات", icon: AlertCircle },
  { id: "history", label: "السجل", icon: Clock },
  { id: "reports", label: "التقارير", icon: FileText },
  { id: "backup", label: "النسخ الاحتياطي", icon: Database },
  { id: "settings", label: "الإعدادات", icon: Settings },
];

export default function App() {
  const [activeView, setActiveView] = useState<View>("dashboard");
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const CurrentView = () => {
    switch (activeView) {
      case "dashboard": return <DashboardView />;
      case "students": return <StudentsView />;
      case "attendance": return <AttendanceView />;
      case "qrcodes": return <QRCodesView />;
      case "payments": return <PaymentsView />;
      case "backup": return <BackupView />;
      default: return <PlaceholderView title={navItems.find(n => n.id === activeView)?.label || ""} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 border-none">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-white border-l border-gray-200 transition-all duration-300 flex flex-col items-center py-4",
          sidebarExpanded ? "w-64" : "w-16"
        )}
      >
        <div className="mb-8 p-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-200">
          <QrCode size={24} />
        </div>

        <nav className="flex-1 w-full px-2 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={cn(
                "w-full flex items-center p-3 rounded-xl transition-all group",
                activeView === item.id 
                  ? "bg-blue-50 text-blue-600" 
                  : "text-gray-500 hover:bg-gray-100"
              )}
            >
              <item.icon size={22} className={cn("min-w-[22px]", activeView === item.id ? "text-blue-600" : "group-hover:text-gray-900")} />
              {sidebarExpanded && (
                <span className="mr-3 font-medium text-sm whitespace-nowrap">{item.label}</span>
              )}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
          className="mt-auto mb-4 p-2 rounded-full hover:bg-gray-100 text-gray-400"
        >
          {sidebarExpanded ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-gray-800">نظام إدارة الطلاب</h1>
            <div className="bg-gray-100 p-1 rounded-lg">
              <LayoutDashboard size={20} className="text-gray-500" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
            </button>
            <div className="h-8 w-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
              م
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <CurrentView />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

// --- View Components ---

function DashboardView() {
  return (
    <div className="space-y-6">
      {/* Export Reports Card */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <FileText size={24} className="text-blue-600" />
          <h2 className="text-lg font-bold">تصدير التقارير</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

function StudentsView() {
  const students = [
    { id: "STU000003", name: "ibrahem sameer", group: "C26 Group", plan: "دفعة واحدة", amount: "6,000 ج.م / 6,000 ج.م", status: "مدفوع", statusColor: "text-green-600 bg-green-50", regDate: "2026/04/29", dueDate: "-" },
    { id: "STU000002", name: "ali amar", group: "E26 Group", plan: "شهري", amount: "0 ج.م / 850 ج.م", status: "مستحق قريباً", statusColor: "text-amber-600 bg-amber-50", regDate: "2026/04/29", dueDate: "2026/04/29" },
    { id: "STU000001", name: "omar ahemd", group: "C26 Group", plan: "شهري", amount: "0 ج.م / 850 ج.م", status: "متأخر", statusColor: "text-red-600 bg-red-50", regDate: "2026/02/11", dueDate: "2026/02/11" },
  ];

  return (
    <div className="space-y-6">
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
        <table className="w-full text-right">
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
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
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
        <div className="p-4 bg-gray-50 text-[10px] text-gray-400 border-t border-gray-100 space-y-1">
          <p>• استخدم الأسهم للتنقل بين الصفوف</p>
          <p>• اضغط Enter أو Space لتعديل الطالب المحدد</p>
          <p>• اضغط Escape لإلغاء التحديد</p>
        </div>
      </div>
    </div>
  );
}

function AttendanceView() {
  const attendance = [
    { id: "STU000003", name: "ibrahem sameer", group: "C26 Group", status: "حاضر", statusColor: "bg-green-100 text-green-700", total: 1, rate: "100.0%", last: "-" },
    { id: "STU000002", name: "ali amar", group: "E26 Group", status: "غائب", statusColor: "bg-red-100 text-red-700", total: 1, rate: "-", last: "-" },
    { id: "STU000001", name: "omar ahemd", group: "C26 Group", status: "غائب", statusColor: "bg-red-100 text-red-700", total: 78, rate: "-", last: "-" },
  ];

  return (
    <div className="space-y-6">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-28">
           <span className="text-gray-500 text-sm font-medium">في المجموعة المحددة</span>
           <span className="text-3xl font-bold text-gray-800 self-end">3</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-28">
           <span className="text-gray-500 text-sm font-medium">من 3 طلاب</span>
           <span className="text-3xl font-bold text-green-600 self-end">1</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-28">
           <span className="text-gray-500 text-sm font-medium">من 3 طلاب</span>
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
        <table className="w-full text-right">
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
  );
}

function QRCodesView() {
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
    <div className="space-y-6">
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

function PaymentsView() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-500 uppercase">0/1</span>
              <span className="text-sm font-medium text-gray-400">C26 Group</span>
            </div>
            <div className="w-64 h-1 bg-gray-100 rounded-full">
              <div className="w-0 h-full bg-blue-600 rounded-full"></div>
            </div>
          </div>
          <div className="text-right space-y-1">
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
             <div className="mt-2 text-xl font-bold text-gray-800">0%</div>
             <div className="text-[10px] text-gray-400 uppercase tracking-tighter">معدل التحصيل</div>
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

function BackupView() {
  return (
    <div className="space-y-6">
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
                   value="مثال: C:\backups\backup.smsbackup" 
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
               value="مثال: C:\backups\backup.smsbackup" 
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

function PlaceholderView({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-gray-400 space-y-4">
      <div className="p-6 bg-gray-100 rounded-full">
        <LayoutDashboard size={48} />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>هذه الصفحة قيد التطوير حالياً في هذا النموذج الأولي</p>
    </div>
  );
}

// --- Helper Components ---

function NavButton({ icon: Icon, label, active, onClick, expanded }: { icon: any, label: string, active: boolean, onClick: () => void, expanded: boolean }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center p-3 rounded-xl transition-all group",
        active ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:bg-gray-100"
      )}
    >
      <Icon size={22} className={cn("shrink-0", active ? "text-blue-600" : "group-hover:text-gray-900")} />
      {expanded && <span className="mr-3 font-medium text-sm">{label}</span>}
    </button>
  );
}

function StatCard({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="bg-gray-50 p-4 rounded-xl flex flex-col items-center justify-center text-center gap-1 hover:bg-gray-100 transition-colors cursor-default">
      <span className={cn("text-3xl font-bold", color)}>{value}</span>
      <span className="text-xs text-gray-500 font-medium">{label}</span>
    </div>
  );
}

function ReportAction({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <button className="flex flex-col items-center justify-center p-8 bg-white border border-gray-100 rounded-xl hover:shadow-md hover:border-blue-200 transition-all group gap-3">
      <div className="p-3 bg-gray-50 text-gray-400 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
        <Icon size={24} />
      </div>
      <span className="text-sm font-bold text-gray-700">{label}</span>
    </button>
  );
}

function StatusOverviewCard({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className={cn("p-6 rounded-xl text-center space-y-1 hover:brightness-95 transition-all cursor-default", color)}>
      <span className="text-3xl font-bold block">{value}</span>
      <span className="text-sm font-bold">{label}</span>
    </div>
  );
}
