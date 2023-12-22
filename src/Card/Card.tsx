import React from "react";

export interface CardProps {
  title?: string;
}

function Card({
  title,
  children,
}: React.PropsWithChildren<CardProps>): JSX.Element {
  return (
    <article data-card>
      <h2>subhan</h2>
      sss
    </article>
  );
}

export default Card;