import { ClerkProvider } from "@clerk/nextjs";

interface PlatformLayoutProps {
    children: React.ReactNode;
}

export default function PlatformLayout({
    children
}: PlatformLayoutProps) {
    return (
        <ClerkProvider>
            {children}
        </ClerkProvider>
    )
}