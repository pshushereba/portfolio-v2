import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-16 bg-bg-gray-custom">
      <div className="flex align-middle justify-between">
        <a className="h-full text-white w-1/5 self-center text-center">
          Patrick Shushereba
        </a>

        <div className="flex align-middle w-1/5 justify-evenly pr-16">
          <Link href="/about">
            <a className="m-4 text-white">About</a>
          </Link>
          <Link href="/blog">
            <a className="m-4 text-white">Blog</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <div className="flex justify-between align-middle h-16">
<h1 className="text-xl w-1/5">Patrick Shushereba</h1>

<div className="flex align-middle w-2/5 justify-around pl-4 pr-4">
  <Link href="/about">
    <a className="m-4">About</a>
  </Link>
  <Link href="/projects">
    <a className="m-4">Projects</a>
  </Link>
  <Link href="/blog">
    <a className="m-4">Blog</a>
  </Link>
</div>
</div> */
}
