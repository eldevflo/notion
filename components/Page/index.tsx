type Props = {
  children: JSX.Element | string
  className?: string
}
const Page = ({ children , className }: Props) => (
  <div className={className ?? 'flex min-h-screen  p-4 bg-gray-bg'}>{children}</div>
)

export default Page
