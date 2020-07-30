import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-red-700 w-full h-16">
      <div className="flex align-middle h-full justify-between">
        <div className="w-1/5 flex-row">
          <h1 className="h-full self-center">Patrick Shushereba</h1>
        </div>
        <div className="flex align-middle w-2/5 justify-around">
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
