import { LucideIcon } from "lucide-react";

export type View = "dashboard" | "students" | "attendance" | "qrcodes" | "payments" | "alerts" | "history" | "reports" | "backup" | "settings";

export interface NavItem {
  id: View;
  label: string;
  icon: LucideIcon;
}
