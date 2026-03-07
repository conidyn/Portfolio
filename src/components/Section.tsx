import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { Container } from "./Container";

type Props = {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: Props) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      <Container>
        {title ? (
          <h2 className="text-center text-3xl font-semibold tracking-tight text-amber-700 sm:text-4xl">
            {title}
          </h2>
        ) : null}
        <div className={cn(title ? "mt-8" : "")}>{children}</div>
      </Container>
    </section>
  );
}