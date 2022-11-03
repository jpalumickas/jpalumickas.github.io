import Image from "next/image";

export default function Page() {
  return (
    <div className="w-screen h-screen flex flex-col flex-1 justify-center items-center">
      <div className="mb-4">
        <Image
          src="https://www.gravatar.com/avatar/6d5c3a1354b53442fe342b2189e76a7a?s=200"
          alt="{{ site.author }}"
          width="100"
          height="100"
          className="rounded-full"
        />
      </div>
      <h1 className="text-4xl text-gray-400 font-extralight">
        {"Hi, I'm "}
        <span className="font-light text-gray-600">Justas Palumickas</span>
      </h1>
    </div>
  );
}
