import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "../../public/icons/facebook_icon_white.webp";
import YoutubeIcon from "../../public/icons/youtube_white_icon.webp";
import InstagramIcon from "../../public/icons/instagram_icon_white.webp";
import Navigation from "../../public/navigation.json";

const AppFooter = () => {
  return (
    <div className="w-full  bg-blueBase flex flex-row justify-center">
      <div className="w-11/12 sm:w-4/5 h-full flex flex-col items-center py-4 gap-4">
        <h6 className="w-full text-base font-normal uppercase text-secondary text-center">
          Pratite nas
        </h6>
        <div className="w-full flex flex-row justify-between ">
          <nav className="w-fit flex flex-col gap-2 items-start">
            {Navigation.map((link) => (
              <li
                key={link.name}
                className="text-base font-normal text-secondary uppercase list-none"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </nav>

          <div className="flex flex-row w-full pl-4 gap-4 justify-center">
            <Link
              href={"https://facebook.com/"}
              passHref={true}
              target={"_blank"}
            >
              <Image
                src={FacebookIcon}
                alt={"facebook icon"}
                width={18}
                height={18}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <Link
              href={"https://instagram.com/"}
              passHref={true}
              target={"_blank"}
            >
              <Image
                src={InstagramIcon}
                alt={"facebook icon"}
                width={18}
                height={18}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <Link
              href={"https://youtube.com/"}
              passHref={true}
              target={"_blank"}
            >
              <Image
                src={YoutubeIcon}
                alt={"facebook icon"}
                width={24}
                height={20}
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>

          <div className="w-fit flex flex-col gap-2 items-start">
            <Link
              href={"/kontakt"}
              className="text-base uppercase text-secondary font-normal"
            >
              Kontakt
            </Link>
            <Link
              href={"/marketing"}
              className="text-base uppercase text-secondary font-normal "
            >
              Marketing
            </Link>
            <Link
              href={"/o-nama"}
              className="text-base uppercase text-secondary font-normal "
            >
              O Nama
            </Link>
          </div>
        </div>

        <div className="w-full h-px bg-secondary" />

        <p className="w-full text-base text-secondary font-normal text-start">
          &copy;2023 Copyright TimeOut
        </p>
      </div>
    </div>
  );
};

export default AppFooter;
