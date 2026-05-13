/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
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
  Bell,
  Search,
  History as HistoryIcon
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";
import { View, NavItem } from "./types";

// Views
import DashboardView from "./components/views/DashboardView";
import StudentsView from "./components/views/StudentsView";
import AttendanceView from "./components/views/AttendanceView";
import QRCodesView from "./components/views/QRCodesView";
import PaymentsView from "./components/views/PaymentsView";
import AlertsView from "./components/views/AlertsView";
import HistoryView from "./components/views/HistoryView";
import BackupView from "./components/views/BackupView";
import SettingsView from "./components/views/SettingsView";
import ReportsView from "./components/views/ReportsView";
import PlaceholderView from "./components/views/PlaceholderView";

const navItems: NavItem[] = [
  { id: "dashboard", label: "الرئيسية", icon: LayoutDashboard },
  { id: "students", label: "الطلاب", icon: Users },
  { id: "attendance", label: "الحضور", icon: Calendar },
  { id: "qrcodes", label: "رموز QR", icon: QrCode },
  { id: "payments", label: "المدفوعات", icon: Wallet },
  { id: "alerts", label: "التنبيهات", icon: AlertCircle },
  { id: "history", label: "السجل", icon: HistoryIcon },
  { id: "reports", label: "التقارير", icon: FileText },
  { id: "backup", label: "النسخ الاحتياطي", icon: Database },
  { id: "settings", label: "الإعدادات", icon: Settings },
];

export default function App() {
  const [activeView, setActiveView] = useState<View>("dashboard");
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const CurrentView = useMemo(() => {
    switch (activeView) {
      case "dashboard": return <DashboardView />;
      case "students": return <StudentsView />;
      case "attendance": return <AttendanceView />;
      case "qrcodes": return <QRCodesView />;
      case "payments": return <PaymentsView />;
      case "alerts": return <AlertsView />;
      case "history": return <HistoryView />;
      case "reports": return <ReportsView />;
      case "backup": return <BackupView />;
      case "settings": return <SettingsView />;
      default: return <PlaceholderView title={navItems.find(n => n.id === activeView)?.label || ""} />;
    }
  }, [activeView]);

  const activeItem = useMemo(() => navItems.find(n => n.id === activeView), [activeView]);

  return (
    <div className="flex flex-row-reverse h-screen bg-gray-50 text-gray-900 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-white border-l border-gray-200 transition-all duration-300 flex flex-col items-center py-4 relative z-20 shrink-0",
          sidebarExpanded ? "w-64" : "w-20"
        )}
      >
        <div className="mb-10 flex items-center justify-center p-3">
          <div className="bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-200 p-2 transform rotate-3">
             <QrCode size={sidebarExpanded ? 32 : 24} />
          </div>
          {sidebarExpanded && <span className="mr-3 font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600">SMS Pro</span>}
        </div>

        <nav className="flex-1 w-full px-3 space-y-1 overflow-y-auto overflow-x-hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={cn(
                "w-full flex items-center p-3 rounded-xl transition-all group relative",
                activeView === item.id 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-100" 
                  : "text-gray-500 hover:bg-gray-50"
              )}
            >
              <item.icon size={22} className={cn("shrink-0", activeView === item.id ? "text-white" : "group-hover:text-gray-900")} />
              {sidebarExpanded && (
                <span className="mr-3 font-bold text-sm whitespace-nowrap">{item.label}</span>
              )}
              {!sidebarExpanded && activeView === item.id && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-blue-600 rounded-r-full" />
              )}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
          className="mt-4 mb-4 p-2.5 rounded-xl hover:bg-gray-100 text-gray-400 bg-gray-50 border border-gray-100"
        >
          {sidebarExpanded ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0 shadow-sm z-10">
          <div className="flex items-center gap-5">
            <h1 className="text-xl font-bold tracking-tight text-blue-950">نظام إدارة الطلاب</h1>
            <div className="h-8 w-[1px] bg-gray-200" />
            <div className="flex items-center gap-2 text-gray-400">
               {activeItem?.icon && (
                 <div className="p-1.5 bg-gray-50 rounded-lg">
                   <activeItem.icon size={18} />
                 </div>
               )}
               <span className="text-sm font-bold text-gray-400 capitalize">{activeItem?.label || activeView}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Search Bar - Hidden on small screens if not enough room */}
            <div className="hidden lg:flex items-center relative group">
               <Search size={18} className="absolute right-3 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
               <input 
                 type="text" 
                 placeholder="البحث السريع..." 
                 className="pr-10 pl-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 transition-all"
               />
            </div>

            <button className="relative p-2 text-gray-500 hover:bg-gray-50 rounded-xl transition-all border border-transparent hover:border-gray-200 group">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>

            <div className="flex items-center gap-3 pr-4 border-r border-gray-200">
              <div className="text-left">
                <p className="text-xs font-bold text-gray-900">مينا مجدي</p>
                <p className="text-[10px] text-gray-400 font-medium">مدير النظام</p>
              </div>
              <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center font-bold shadow-md shadow-blue-100">
                M
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50/50 p-8 custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-[1400px] mx-auto w-full h-full"
            >
              {CurrentView}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

