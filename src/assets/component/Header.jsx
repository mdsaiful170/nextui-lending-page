import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Menu } from "lucide-react";
import { Contact } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const list = ["Home", "About", "Contact", "Services"];

  return (
    <Navbar
      shouldHideOnScroll
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent mx-auto pt-5 w-full"
      isBlurred={false}
      maxWidth="xl"
    >
      {/* Mobile Menu Toggle */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden text-white"
        indicator={<Menu />}
      />

      {/* Logo Section */}
      <NavbarBrand className="flex items-center">
        <img
          src="./logo.svg"
          alt="Logo"
          className="h-12 w-12 md:w-20 md:h-20"
        />
        <p className="font-bold text-base sm:text-lg lg:text-xl text-white ps-2">
          Wern Finance
        </p>
      </NavbarBrand>

      {/* Desktop Menu */}
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {list.map((item, i) => (
          <NavbarItem key={i}>
            <Link
              href="#"
              color="foreground"
              className="text-base font-medium px-2 lg:px-4 hover:text-purple-300 transition"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Contact Button */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="lg:px-6 sm:px-4 text-base font-semibold"
            color="primary"
            href="#"
            variant="bordered"
            radius="full"
            startContent={<Contact />}
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu
        className={`bg-[#1a1e1c]/25 backdrop-blur-lg mt-5 text-white transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {list.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              as={Link}
              href="#"
              className="block py-2 px-4 text-white text-lg hover:bg-primary/20 rounded"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
