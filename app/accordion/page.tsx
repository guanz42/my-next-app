"use client";

import { MouseEventHandler, useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2 className="align-middle font-bold font-serif m-10">
        Almaty, Kazakhstan
      </h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan&apos;s
        largest city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from xxxx, the Kazakh word for &quot;apple&quot; and is
        often translated as &quot;full of apple&quot;.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow,
}: {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onShow: MouseEventHandler;
}) {
  return (
    <section className="panel m-5">
      <h3 className="font-bold">{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}
