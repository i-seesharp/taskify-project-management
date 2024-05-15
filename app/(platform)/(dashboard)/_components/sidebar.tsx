"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";
import { NavItem, Organization } from "./nav-item";
import { Accordion } from "@/components/ui/accordion";

interface SidebarProps {
    storageKey?: string; 
}

export function Sidebar({
    storageKey = "t-sidebar-state"
}: SidebarProps) {
    const [expanded, setExpanded] = useLocalStorage<Record<string,any>>(storageKey, 
        {}
    );
    const { 
        organization: activeOrganization,
        isLoaded: isLoadedOrg,
    } = useOrganization();
    const {
        userMemberships,
        isLoaded: isLoadedOrgList,
    } = useOrganizationList({
        userMemberships: {
            infinite: true,
        }
    });

    let defaultAccordionValue: string[] = [];
    Object.keys(expanded).forEach((key: string) => {
        if (!expanded[key]) return;
        defaultAccordionValue.push(key);
    });

    const onExpand = (id: string) => {
        setExpanded(current => {
            const currentExpansionState = current[id];

            return {...current, [id]: !currentExpansionState};
        });
    }

    if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
        return (
            <>
                <Skeleton />
            </>
        )
    }

    return (
        <>
            <div className="font-medium text-xs flex items-center mb-1
            justify-between">
                <span className="pl-4">
                    Workspaces
                </span>
                <Button
                asChild
                size="icon"
                variant="ghost"
                >
                    <Link href="/select-org">
                        <Plus className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
            <Accordion 
            type="multiple"
            defaultValue={defaultAccordionValue}
            className="space-y-2"
            >
                {userMemberships.data.map(({ organization }) => {
                    return (
                        <NavItem 
                        key={organization.id}
                        isActive={activeOrganization?.id === organization.id}
                        isExpanded={!!expanded[organization.id]}
                        organization={organization as Organization}
                        onExpand={onExpand}
                        />
                    )
                })}
            </Accordion>
        </>
    )
}