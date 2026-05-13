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
          sidebarExpanded ? "w-64" : "w-16"
        )}
      >
        <div className="mb-10 flex items-center justify-center">
          <div className="bg-[#0f172a] rounded-lg text-white p-2.5 shadow-sm">
             <QrCode size={24} />
          </div>
        </div>

        <nav className="flex-1 w-full px-2 space-y-1 overflow-y-auto overflow-x-hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={cn(
                "w-full flex items-center p-3 rounded-xl transition-all group relative",
                activeView === item.id 
                  ? "bg-gray-50 text-gray-900 font-bold" 
                  : "text-gray-500 hover:bg-gray-50/50"
              )}
            >
              <item.icon size={22} className={cn("shrink-0", activeView === item.id ? "text-gray-900" : "group-hover:text-gray-900")} />
              {sidebarExpanded && (
                <span className="mr-3 text-sm whitespace-nowrap">{item.label}</span>
              )}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
          className="mt-4 mb-4 p-2.5 rounded-xl hover:bg-gray-100 text-gray-400 group"
        >
          {sidebarExpanded ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0 z-10">
          <div className="flex items-center gap-4">
             <h1 className="text-xl font-bold tracking-tight text-gray-800">نظام إدارة السنتر</h1>
             <div className="p-1 px-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 cursor-pointer flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panel-right"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/></svg>
             </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Header left side empty in ref */}
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50/10 p-8 custom-scrollbar">
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

