import Image from 'next/image'
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <Image src="/cover.jpg" alt="Cover Image" fill className="object-cover object-center" />
      <div className="absolute inset-0 bg-black/20" />
      {children}
    </div>
  )
}
