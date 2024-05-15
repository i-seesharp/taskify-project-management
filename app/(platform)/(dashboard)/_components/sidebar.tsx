"use client";

import Link from "next/link"

interface SidebarProps {
    storageKey?: string; 
}

export function Sidebar({
    storageKey
}: SidebarProps) {
    return (
        <div>
            Sidebar!
        </div>
    )
}