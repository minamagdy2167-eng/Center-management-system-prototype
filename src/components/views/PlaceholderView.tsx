import { LayoutDashboard } from "lucide-react";

export default function PlaceholderView({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-gray-400 space-y-4">
      <div className="p-6 bg-gray-100 rounded-full">
        <LayoutDashboard size={48} />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>هذه الصفحة قيد التطوير حالياً</p>
    </div>
  );
}
