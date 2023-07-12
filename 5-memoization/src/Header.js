import { memo } from "react";

function Header() {
    console.log("Header rendered");
    return (
        <header>HEADER</header>
    )
}

export default memo(Header)