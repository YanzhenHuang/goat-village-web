import { ReactNode } from "react"

export const StaggeredSection = (props: { children: ReactNode[], direction: "left" | "right" }) => {
    const { children, direction } = props;
    return (
        <section className={`flex flex-wrap pl-5 py-16 items-center justify-around w-full min-h-[50vh]`}>
            <div className={`order-${direction == "left" ? "first" : "last"}`}>
                {children[0]}
            </div>
            <div className={`order-${direction == "right" ? "first" : "last"}`}>
                {children[1]}
            </div>
        </section>
    );
}