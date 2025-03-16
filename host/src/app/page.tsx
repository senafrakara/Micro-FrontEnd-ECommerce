import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <div className="flex flex-col items-center gap-4">
        <Link
          className="flex items-center gap-2 text-black hover:underline "
          href="/products"
        >
          Go to Products →
        </Link>

        <Link
          className="flex items-center gap-2 text-black hover:underline "
          href="/basket"
        >
          Go to Basket →
        </Link>
      </div>
    </div>
  );
}
