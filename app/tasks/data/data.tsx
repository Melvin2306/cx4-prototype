import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle,
  CircleOff,
  FileText,
  HelpCircle,
  PlugZap,
  ReceiptText,
  Timer,
  Users,
} from "lucide-react";

export const labels = [
  {
    value: "e-charging",
    label: "E-Charging",
  },
  {
    value: "billing",
    label: "Billing",
  },
  {
    value: "documents",
    label: "Documents",
  },
];

export const statuses = [
  {
    value: "open",
    label: "Open",
    icon: HelpCircle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: Timer,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CircleOff,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUp,
  },
];

export const editors = [
  {
    label: "CRH",
    value: "crh",
    icon: Users,
  },
  {
    label: "Billings",
    value: "billings",
    icon: ReceiptText,
  },
  {
    label: "Documents",
    value: "documents",
    icon: FileText,
  },
  {
    label: "E-Charging",
    value: "e-charging",
    icon: PlugZap,
  },
];
