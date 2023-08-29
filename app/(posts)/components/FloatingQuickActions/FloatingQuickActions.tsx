import {ReactNode} from "react";

export const FloatingQuickActions = ({children}: {children: ReactNode}) => {
    return <div className="fixed bottom-0 right-0 mr-4 mb-4">
        <div className="flex flex-col space-y-2">
            {children}
        </div>
    </div>
}