import React, { ReactNode } from "react";

export const TitledTextBlock = (props: { content: { title: string, annotation: string, text: string }, direction: "left" | "right" }) => {
    const { title, annotation, text } = props.content;
    return (
        <div className={`flex flex-col text-${props.direction} w-[60vh] gap-5`}>
            <h1 className={`text-[2.5rem] font-bold`}>
                {title}
            </h1>
            <p className={`text-black/40`}>{annotation}</p>
            <p className={`text-[1.2rem] whitespace-pre-line`}>
                {text}
            </p>
        </div>
    );
}