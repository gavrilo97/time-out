"use client";

import * as React from "react";
import Link from "next/link";
import Logo from "../../public/images/logoSajt1.png";
import FacebookIcon from "../../public/icons/facebook_icon_white.webp";
import YoutubeIcon from "../../public/icons/youtube_white_icon.webp";
import InstagramIcon from "../../public/icons/instagram_icon_white.webp";
import CloseIcon from "../../public/icons/close_icon.png";
import Image from "next/image";
import s from "./AppHeader.module.css";

const AppHeader = () => {
  const [expanded, setExpanded] = React.useState(false);

  const socials = [
    {
      href: "https://facebook.com/",
      passHref: true,
      target: "_blank",
      image: {
        src: FacebookIcon,
        alt: "facebook icon",
        height: 24,
        width: 24,
      },
    },
    {
      href: "https://instagram.com/",
      passHref: true,
      target: "_blank",
      image: {
        src: InstagramIcon,
        alt: "instagram icon",
        height: 24,
        width: 24,
      },
    },
    {
      href: "https://youtube.com/",
      passHref: true,
      target: "_blank",
      image: {
        src: YoutubeIcon,
        alt: "youtube icon",
        height: 23,
        width: 28,
      },
    },
  ];

  const links = [
    {
      name: "Pocetna",
      href: "/",
    },
    {
      name: "Kosarka",
      href: "/kosarka",
    },
    {
      name: "Fudbal",
      href: "/fudbal",
    },
    {
      name: "Tenis",
      href: "/tenis",
    },
    {
      name: "Ostalo",
      href: "/ostalo",
    },
  ];

  React.useEffect(() => {
    if (document) {
      if (expanded) document.body.classList.add("overflow-hidden");
      if (!expanded && document.body.classList?.[0])
        document.body.classList.remove("overflow-hidden");
    }
  }, [expanded]);

  return (
    <header className="w-full h-48 flex flex-row justify-center items-start bg-blueBase ">
      <div
        className={`w-4/5 h-full bg-blueBase grid place-items-center ${s.headerContainer}`}
      >
        <div className="relative block h-full w-full">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt={"Website logo"}
              fill
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
        <div className="flex flex-col w-full h-4/5 max-md:gap-8 items-end justify-center md:justify-start">
          <div className="hidden md:flex flex-row w-full gap-4 justify-end">
            {socials.map((social) => (
              <Link
                href={social.href}
                passHref={social.passHref}
                target={social.target}
                key={social.image.alt}
              >
                <Image
                  src={social.image.src}
                  alt={social.image.alt}
                  width={social.image.width}
                  height={social.image.height}
                  style={{ objectFit: "contain" }}
                />
              </Link>
            ))}
          </div>

          <nav className="hidden w-full h-full md:grid place-items-end">
            <ul className="flex flex-row w-full h-full items-center justify-end gap-8">
              {links.map((link) => (
                <li
                  key={link.name}
                  className="text-base font-medium text-secondary uppercase "
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className="grid place-items-end md:hidden w-full ">
            <button
              type="button"
              aria-label="burger button"
              onClick={() => setExpanded(true)}
              className="p-4 space-y-2 rounded "
            >
              <span className="block w-8 h-0.5 bg-secondary "></span>
              <span className="block w-8 h-0.5 bg-secondary "></span>
              <span className="block w-8 h-0.5 bg-secondary "></span>
            </button>

            <div
              className={`h-screen  bg-blueBase absolute right-0 top-0 z-10  ${s.navBarDrawer} `}
              style={{
                width: expanded ? 579 : 0,
                maxWidth: "100%",
              }}
            >
              {expanded && (
                <div className="p-8 flex flex-col items-start justify-between h-full">
                  <div className="flex flex-col items-start gap-4 w-full ">
                    <button
                      type="button"
                      aria-label="close menu"
                      onClick={() => setExpanded(false)}
                      className="w-full h-12 flex justify-end"
                    >
                      <Image
                        src={CloseIcon}
                        alt={"close menu"}
                        width={24}
                        height={24}
                        style={{ objectFit: "contain" }}
                      />
                    </button>

                    <div className="w-full h-px bg-secondary" />

                    <div className="flex flex-col items-start pt-4 gap-12">
                      <h1 className="text-2xl text-secondary font-black">
                        Navigacija
                      </h1>
                      <nav className=" w-full h-full grid place-items-start">
                        <ul className="flex flex-col w-full h-full items-start gap-8">
                          {links.map((link) => (
                            <li
                              key={link.name}
                              className="text-base font-medium text-secondary uppercase "
                            >
                              <Link href={link.href}>{link.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className=" flex flex-row w-full gap-8 justify-center">
                    {socials.map((social) => (
                      <Link
                        href={social.href}
                        passHref={social.passHref}
                        target={social.target}
                        key={social.image.alt}
                        className="grid place-items-center"
                      >
                        <Image
                          src={social.image.src}
                          alt={social.image.alt}
                          width={social.image.width}
                          height={social.image.height}
                          style={{ objectFit: "contain" }}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
