import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/hakkimizda">Hakkimizda</Link>
      <br />
      <Link 
        href={{
          pathname: "/hakkimizda",
          query: "",
        }}>
        Hakkimizda with Object
      </Link>
    </div>
  );
}

