import { cn } from '@/lib/utils'

import Menu from './components/menu'

import BaseLayout from '@/components/layout/base'

export default function ComponentsLibraryLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <BaseLayout>
      <main>
        <section className="w-full h-[calc(100vh-60px)] flex">
          <div
            className={cn(
              'bg-muted w-[240px] hidden md:block fixed h-full flex-grow border-0 border-b-[1px] border-border',
              ''
            )}
          >
            <div className="space-y-3 pt-4 px-3">
              <h2 className="font-bold text-2xl px-3">Components</h2>
              <Menu />
            </div>
          </div>
          <div
            className={cn(
              'bg-muted flex-grow min-w-1 md:pl-[240px] overflow-x-auto'
            )}
          >
            {children}
          </div>
        </section>
      </main>
    </BaseLayout>
  )
}
