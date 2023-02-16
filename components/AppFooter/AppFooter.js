import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "../../public/icons/facebook_icon_white.webp";
import YoutubeIcon from "../../public/icons/youtube_white_icon.webp";
import InstagramIcon from "../../public/icons/instagram_icon_white.webp";

const AppFooter = () => {
  return (
    <div className="w-full h-52 bg-blueBase flex flex-row justify-center">
      <div className="w-4/5 h-full flex flex-col items-center py-4 justify-between">
        <div className="w-full flex flex-row justify-center ">
          <Link
            href={"/o-nama"}
            className="text-base uppercase text-secondary font-medium border-r border-secondary pr-4"
          >
            O Nama
          </Link>
          <Link
            href={"/faq"}
            className="text-base uppercase text-secondary font-medium border-r border-secondary px-4"
          >
            FAQ
          </Link>
          <Link
            href={"/kontakt"}
            className="text-base uppercase text-secondary font-medium px-4"
          >
            Kontakt
          </Link>
        </div>

        <div className="flex flex-row w-full gap-4 justify-center">
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
          <Link href={"https://youtube.com/"} passHref={true} target={"_blank"}>
            <Image
              src={YoutubeIcon}
              alt={"facebook icon"}
              width={24}
              height={20}
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>

        <div className="w-full flex flex-row justify-center ">
          <Link
            href={"mailto:gavrilovic.stefan12@gmail.com"}
            className="text-base  text-secondary font-medium border-r border-secondary px-4"
          >
            gavrilovic.stefan12@gmail.com
          </Link>
          <p className="text-base uppercase text-secondary font-medium border-r border-secondary px-4">
            060/733-7301
          </p>
          <p className="text-base  text-secondary font-medium px-4">
            &copy;2023 Copyright
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
