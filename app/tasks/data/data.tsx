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
    value: "billing",
    label: "Billing",
  },
  {
    value: "e-charging",
    label: "E-Charging",
  },
  {
    value: "shipping",
    label: "Shipping",
  },
  {
    value: "hardware",
    label: "Hardware",
  },
  {
    value: "software",
    label: "Software",
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
    label: "Software",
    value: "software",
    icon: FileText,
  },
  {
    label: "E-Charging",
    value: "e-charging",
    icon: PlugZap,
  },
];

export const assignees = [
  {
    label: "Max Mustermann",
    value: "max_mustermann",
  },
  {
    label: "Alex Mustermann",
    value: "alex_mustermann",
  },
];

export const languages = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "Spanish",
    value: "es",
  },
  {
    label: "Italian",
    value: "it",
  },
];
