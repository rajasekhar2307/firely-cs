"use client";

import Logo from "@/images/firely_logo_white.svg";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <div className="navbar-container">
      <Container>
        <div className="navbar">
          <Link href="/">
            <Image className="navbar-logo" src={Logo} alt="Firely logo" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
export default Header;
