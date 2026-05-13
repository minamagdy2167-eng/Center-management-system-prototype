import { cn } from "@/src/lib/utils";
import { LucideIcon } from "lucide-react";

export function StatCard({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="bg-gray-50 p-4 rounded-xl flex flex-col items-center justify-center text-center gap-1 hover:bg-gray-100 transition-colors cursor-default">
      <span className={cn("text-3xl font-bold", color)}>{value}</span>
      <span className="text-xs text-gray-500 font-medium">{label}</span>
    </div>
  );
}

export function StatusOverviewCard({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className={cn("p-6 rounded-xl text-center space-y-1 hover:brightness-95 transition-all cursor-default", color)}>
      <span className="text-3xl font-bold block">{value}</span>
      <span className="text-sm font-bold">{label}</span>
    </div>
  );
}

export function ReportAction({ icon: Icon, label }: { icon: LucideIcon, label: string }) {
  return (
    <button className="flex flex-col items-center justify-center p-8 bg-white border border-gray-100 rounded-xl hover:shadow-md hover:border-blue-200 transition-all group gap-3 w-full">
      <div className="p-3 bg-gray-50 text-gray-400 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
        <Icon size={24} />
      </div>
      <span className="text-sm font-bold text-gray-700">{label}</span>
    </button>
  );
}
