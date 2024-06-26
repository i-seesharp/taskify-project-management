import { Navbar } from "./_components/navbar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({
    children
}: DashboardLayoutProps) {
    return (
        <div className="h-full">
            <Navbar />
            {children}
        </div>
    )
}