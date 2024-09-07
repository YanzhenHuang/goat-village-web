import { ReactNode } from "react"

export const StaggeredSection = (props: { children: ReactNode[], direction: "left" | "right" }) => {
    const { children, direction } = props;
    return (
        <div className={`flex flex-wrap items-center justify-around w-full min-h-[50vh]`}>
            <div className={`order-${direction == "left" ? "first" : "last"}`}>
                {children[0]}
            </div>
            <div className={`order-${direction == "right" ? "first" : "last"}`}>
                {children[1]}
            </div>
        </div>
    );
}