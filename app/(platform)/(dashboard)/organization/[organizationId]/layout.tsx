import { OrgControl } from "./_components/org-control";

interface OrganizationIdLayoutProps {
    children: React.ReactNode;
}

export default function OrganizationIdLayout({
    children
}: OrganizationIdLayoutProps) {
    return (
        <>
            <OrgControl />
            {children}
        </>
    )
}