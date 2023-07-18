import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function SideBarItem({
  item,
}: {
  item: {
    title: string;
    icon: React.JSX.Element;
    link: string;
  };
}) {
    const router = useRouter()
  return (
    <li className={`cursor-pointer text-white text-sm leading-3 tracking-normal hover:bg-light-gray ${router.pathname === item.link ? 'bg-light-gray': ''} `}>
      <Link href={item.link} className="flex items-center px-5 py-3">
        <div>{item.icon}</div>
        <span className="ml-2 text-black">{item.title}</span>
      </Link>
    </li>
  );
}

export default SideBarItem;
