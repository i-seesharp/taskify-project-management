import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
    return (
        <div className="fixed bottom-0 w-full border-t">
            <div className="flex md:max-w-screen-2xl items-center justify-between
            p-4">
                <div className="flex gap-x-2 items-center justify-center">
                    <div>
                        <Image 
                        src="/logo.svg"
                        alt="Logo"
                        width={30}
                        height={30}
                        />
                    </div>
                    <p className="font-sans font-semibold">
                        Taskify
                    </p>
                </div>
                <div className="flex md:block text-muted-foreground">
                    <Button size="sm" variant="ghost">
                        Privacy Policy
                    </Button>
                    <Button size="sm" variant="ghost">
                        Terms & Conditions
                    </Button>
                </div>
            </div>
        </div>
    )
}