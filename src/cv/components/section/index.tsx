function Section({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <article className="space-y-1">
      <h2 className="text-2xl font-bold">{label}</h2>
      {children}
    </article>
  )
}

export default Section
