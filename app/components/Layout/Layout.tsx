import { FC, PropsWithChildren } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
