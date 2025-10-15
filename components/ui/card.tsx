import * as React from "react"

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={[
        "rounded-[var(--radius-card)] border border-border/60",
        "bg-card/80 supports-[backdrop-filter]:backdrop-blur",
        "shadow-[var(--shadow-inset)]",
        props.className || ""
      ].join(" ")}
    />
  )
}

export function CardBody(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={["p-6 md:p-8", props.className || ""].join(" ")} />
}
