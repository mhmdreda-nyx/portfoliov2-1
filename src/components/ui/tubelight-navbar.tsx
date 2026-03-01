"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
    name: string
    url: string
    icon: LucideIcon
}

interface NavBarProps {
    items: NavItem[]
    className?: string
    activeTab?: string
    onTabChange?: (name: string) => void
}

export function NavBar({ items, className, activeTab: externalActive, onTabChange }: NavBarProps) {
    const [activeTab, setActiveTab] = useState(items[0].name)

    useEffect(() => {
        if (externalActive) setActiveTab(externalActive)
    }, [externalActive])

    const handleNavClick = (name: string, url: string) => {
        setActiveTab(name)
        onTabChange?.(name)
        if (url.startsWith('#')) {
            const el = document.querySelector(url)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className={cn("fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6", className)}>
            <div className="flex items-center gap-1 bg-black/40 border border-[#00ff96]/20 backdrop-blur-xl py-1 px-1 rounded-full shadow-lg shadow-[#00ff96]/5">
                {items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name
                    return (
                        <button
                            key={item.name}
                            onClick={() => handleNavClick(item.name, item.url)}
                            className={cn(
                                "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-colors font-mono",
                                "text-gray-400 hover:text-[#00ff96]",
                                isActive && "text-[#00ff96]",
                            )}
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <span className="md:hidden"><Icon size={18} strokeWidth={2.5} /></span>
                            {isActive && (
                                <motion.div
                                    layoutId="lamp"
                                    className="absolute inset-0 w-full bg-[#00ff96]/5 rounded-full -z-10"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#00ff96] rounded-t-full">
                                        <div className="absolute w-12 h-6 bg-[#00ff96]/20 rounded-full blur-md -top-2 -left-2" />
                                        <div className="absolute w-8 h-6 bg-[#00ff96]/20 rounded-full blur-md -top-1" />
                                        <div className="absolute w-4 h-4 bg-[#00ff96]/20 rounded-full blur-sm top-0 left-2" />
                                    </div>
                                </motion.div>
                            )}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
