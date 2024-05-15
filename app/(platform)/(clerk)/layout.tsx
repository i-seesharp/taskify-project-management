interface ClerkLayoutProps {
    children: React.ReactNode;
}

export default function ClerkLayout({
    children
}: ClerkLayoutProps) {
    return (
        <div className="h-full flex items-center justify-center bg-slate-100">
            { children }
        </div>
    )
}