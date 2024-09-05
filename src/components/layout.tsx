import { ReactNode } from "react"

export const Layout = ({children}: {children: ReactNode}) => {
    return (
        <div className="min-h-dvh grid" style={{gridTemplateRows: 'auto 1fr auto'}}>
            <header>header</header>
            {children}
            <footer>footer</footer>
        </div>
    )
}