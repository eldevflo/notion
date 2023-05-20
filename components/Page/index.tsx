type Props = {
  children: JSX.Element | string
}
const Page = ({ children }: Props) => (
  <div className='grid place-content-center min-h-screen justify-items-center p-4'>{children}</div>
)

export default Page
