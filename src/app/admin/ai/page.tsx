"use client";

import AISynthesisLab from "@/features/admin/components/AISynthesisLab";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function AdminAIPage() {
  usePageTitle("AI Synthesis Lab");
  return <AISynthesisLab onSuccess={() => {}} />;
}
