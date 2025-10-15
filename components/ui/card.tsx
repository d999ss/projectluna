import * as React from "react"

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.15)", ...props.style }}
      className={[
        "rounded-2xl border border-[rgba(12,16,24,.12)] bg-[rgba(255,255,255,.55)] backdrop-blur-xl",
        "dark:border-[rgba(255,255,255,.12)] dark:bg-[rgba(0,0,0,.35)]",
        "transition-all duration-300",
        "hover:border-[rgba(12,16,24,.18)] hover:bg-[rgba(255,255,255,.65)]",
        "dark:hover:border-[rgba(255,255,255,.18)] dark:hover:bg-[rgba(0,0,0,.45)]",
        props.className || ""
      ].join(" ")}
    />
  )
}

export function CardBody(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={["p-6 md:p-8", props.className || ""].join(" ")} />
}

export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={["p-6 md:p-8 pb-4 md:pb-4", props.className || ""].join(" ")} />
}
