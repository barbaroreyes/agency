import React from "react"
import {GlobalStyle} from "../styles/GlobalStyle"
import Header from "./Header"
import "./styles/layout.css"

function Layout({children}) {
    return (
        <>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        </>
    )
}
export default Layout
