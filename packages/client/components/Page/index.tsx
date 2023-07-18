type Props = {
  children: JSX.Element | string
  className?: string
}
const Page = ({ children , className }: Props) => (
  <div className={className ?? 'flex min-h-screen   bg-white'}>{children}</div>
)

export default Page
