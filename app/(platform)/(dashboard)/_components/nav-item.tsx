"use client";

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Activity, CreditCard, Layout, Settings } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export interface Organization {
    id: string;
    slug: string;
    name: string;
    imageUrl: string;
}

interface NavItemProps {
    organization: Organization;
    isActive: boolean;
    isExpanded: boolean;
    onExpand: (id: string) => void;
}

export function NavItem ({
    organization,
    isActive,
    isExpanded,
    onExpand,
}: NavItemProps) {
    const router = useRouter();
    const pathname = usePathname();

    const routes = [
        {
            label: "Boards",
            icon: <Layout className="h-4 w-4 mr-2" />,
            href: `/organization/${organization.id}`,
        },
        {
            label: "Activity",
            icon: <Activity className="h-4 w-4 mr-2" />,
            href: `/organization/${organization.id}/activity`,
        },
        {
            label: "Settings",
            icon: <Settings className="h-4 w-4 mr-2" />,
            href: `/organization/${organization.id}/settings`,
        },
        {
            label: "Billing",
            icon: <CreditCard className="h-4 w-4 mr-2" />,
            href: `/organization/${organization.id}/billing`,
        },
    ]

    const onClick = (href: string) => {
        router.push(href);
    }

    return (
        <AccordionItem
        value={organization.id}
        className="border-none"
        >
            <AccordionTrigger
            onClick={() => onExpand(organization.id)}
            className={cn(
                "flex items-center gap-x-2 p-1.5 rounded-md text-neutral-700",
                "hover:bg-neutral-500/10 transition text-start no-underline",
                "hover:no-underline",
                isActive && !isExpanded && "bg-sky-500/10 text-sky-700",
            )}
            >
                <div className="flex items-center gap-x-2">
                    <div className="w-7 h-7 relative">
                        <Image 
                        fill
                        src={organization.imageUrl}
                        alt="Organization"
                        className="rounded-sm object-cover"
                        />
                    </div>
                    <p className="font-medium text-sm">
                        {organization.name}
                    </p>
                </div>
            </AccordionTrigger>
            <AccordionContent className="pt-1 text-neutral-700">
                {routes.map(route => (
                    <Button
                    key={route.href}
                    size="sm"
                    onClick={() => onClick(route.href)}
                    className={cn(
                        "flex justify-start w-full font-normal pl-10 mb-1",
                        pathname === route.href && "bg-sky-500/10 text-sky-700"
                    )}
                    variant="ghost"
                    >
                        {route.icon}
                        {route.label}
                    </Button>
                ))}
            </AccordionContent>
        </AccordionItem>
    )
}