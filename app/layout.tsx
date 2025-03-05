import { FC, PropsWithChildren } from "react"
import "@/app/ui/global.css"
import {roboto} from "./ui/fonts"

const RootLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <html>
            <body className={`${roboto.className} antialiased`}>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
