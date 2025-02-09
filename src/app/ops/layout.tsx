import DashboardLayout from '@/components/DashboardLayout';

export default function OpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
} 