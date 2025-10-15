import { Card, CardBody } from "@/components/ui/Card"

export function MetaGrid(props: { items: { label: string, value: string }[] }) {
  const { items } = props
  if (!items.length) return null
  return (
    <Card>
      <CardBody>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
          {items.map((it) => (
            <div key={it.label}>
              <div className="text-[13px] text-foreground/65">{it.label}</div>
              <div className="mt-1 text-[16px] font-medium">{it.value}</div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

