"use client"

import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export default function NotificationsPage() {
    const [emailNotifications, setEmailNotifications] = useState({
        sendReceiveCrypto: true,
        merchantOrders: true,
        recommendedActions: true,
    })

    const handleCheckboxChange = (key: keyof typeof emailNotifications) => {
        setEmailNotifications((prev) => ({
            ...prev,
            [key]: !prev[key],
        }))
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex min-h-screen bg-background">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Header title="Notifications" walletConnected={false} />

                    <div className="p-6">
                        <div className="mb-8">
                            <h2 className="text-xl font-bold mb-2">Manage</h2>
                            <p className="text-gray-500">Manage how you receive notifications</p>
                        </div>

                        <div className="border rounded-lg p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-medium">Email</h3>
                                <Button variant="link" className="text-orange-500">
                                    Clear all
                                </Button>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    <Checkbox
                                        id="send-receive"
                                        checked={emailNotifications.sendReceiveCrypto}
                                        onCheckedChange={() => handleCheckboxChange("sendReceiveCrypto")}
                                        className="mt-1 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                                    />
                                    <label
                                        htmlFor="send-receive"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        When I send or receive crypto
                                    </label>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Checkbox
                                        id="merchant-orders"
                                        checked={emailNotifications.merchantOrders}
                                        onCheckedChange={() => handleCheckboxChange("merchantOrders")}
                                        className="mt-1 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                                    />
                                    <label
                                        htmlFor="merchant-orders"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        When I receive merchant orders
                                    </label>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Checkbox
                                        id="recommended-actions"
                                        checked={emailNotifications.recommendedActions}
                                        onCheckedChange={() => handleCheckboxChange("recommendedActions")}
                                        className="mt-1 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                                    />
                                    <label
                                        htmlFor="recommended-actions"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        When there are recommended actions for my account
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <Button className="bg-orange-500 hover:bg-orange-600">Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
