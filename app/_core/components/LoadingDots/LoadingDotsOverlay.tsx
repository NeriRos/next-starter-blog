import { LoadingDots } from "@/components/LoadingDots/LoadingDots"

export const LoadingDotsOverlay = ({ color = "#000" }: { color?: string }) => {
    return (
        <div
            style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <LoadingDots color={color} />
        </div>
    )
}
