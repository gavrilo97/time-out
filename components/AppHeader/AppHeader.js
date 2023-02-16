import * as react from "react";
import Link from "next/link";
import Logo from "../../public/images/logoSajt1.png";
import FacebookIcon from "../../public/icons/facebook_icon_white.webp";
import YoutubeIcon from "../../public/icons/youtube_white_icon.webp";
import InstagramIcon from "../../public/icons/instagram_icon_white.webp";
import Image from "next/image";

const AppHeader = () => {
  return (
    <header className="w-full h-48 flex flex-row justify-center items-start bg-blueBase">
      <div
        className="w-4/5 h-full bg-blueBase grid place-items-center"
        style={{ gridTemplateColumns: "1fr 3fr" }}
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
        <div className="flex flex-col w-full h-4/5 items-end">
          <div className="flex flex-row w-full gap-4 justify-end">
            <Link
              href={"https://facebook.com/"}
              passHref={true}
              target={"_blank"}
            >
              <Image
                src={FacebookIcon}
                alt={"facebook icon"}
                width={24}
                height={24}
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
                width={24}
                height={24}
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

          <nav className="w-full h-full grid place-items-end">
            <ul className="flex flex-col md:flex-row w-full h-full items-center justify-end gap-8">
              <li className="text-base font-medium text-secondary uppercase ">
                <Link href={"/"}>Pocetna</Link>
              </li>
              <li className="text-base font-medium text-secondary uppercase">
                <Link href={"/kosarka"}>kosarka</Link>
              </li>
              <li className="text-base font-medium text-secondary uppercase">
                <Link href={"/fudbal"}>fudbal</Link>
              </li>
              <li className="text-base font-medium text-secondary uppercase">
                <Link href={"/tenis"}>Tenis</Link>
              </li>
              <li className="text-base font-medium text-secondary uppercase">
                <Link href={"/ostalo"}>Ostalo</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
