type ContentSectionProps = {
  children: React.ReactNode
  sectionName: string
  className?: string
}

const ContentSection: React.FC<ContentSectionProps> = ({
  children,
  sectionName,
  className,
}: ContentSectionProps) => {
  return (
    <section className={className}>
      <h2 className='text-2xl capitalize font-semibold'>{sectionName}</h2>
      {children}
    </section>
  )
}

export default ContentSection
