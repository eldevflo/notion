type Props = {
  children: JSX.Element | string
  className?: string
}
const Page = ({ children , className }: Props) => (
  <div className={className ?? 'grid place-content-center min-h-screen justify-items-center p-4 bg-gray-bg'}>{children}</div>
)

export default Page
