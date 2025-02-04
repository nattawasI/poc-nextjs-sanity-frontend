import { HTMLAttributes } from 'react'
import { cn } from '@/libs/utils'

const Layout = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('relative flex h-screen min-h-[667px] flex-col md:p-10', className)} {...props} />
}

const LayoutContent = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('flex-1 overflow-hidden', className)} {...props} />
}

const LayoutScrollArea = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('no-scrollbar h-full overflow-y-auto', className)} {...props} />
}

export { Layout, LayoutContent, LayoutScrollArea }
