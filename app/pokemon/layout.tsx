import Link from "next/link";
import { getPokemons } from "./getPokemons";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { results } = await getPokemons();

  return (
    <div className="flex gap-10 bg-sky-50">
      <ul>
        {results.map(({ name }: { name: string }, i: number) => (
          <li key={`$name_${i}`}>
            <Link href={`/pokemon/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
