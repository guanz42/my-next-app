import Link from "next/link";
import { getPokemons } from "./getPokemons";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { results } = await getPokemons();

  return (
    <div className="flex m-10">
      <ul>
        {results.map(({ name }: { name: string }, i: number) => (
          <li key={`$name_${i}`}>
            <Link href={`/pokemon/${name}`} className="underline">
              <b>{name}</b>
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
