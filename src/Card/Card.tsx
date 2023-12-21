import React from "react";

import "./Card.css";

export interface CardProps {
  title?: string;
}

function Card({
  title,
  children,
}: React.PropsWithChildren<CardProps>) {
  return (
    <article data-card>
      <h2>subhan</h2>
      sss
    </article>
  );
}

export default Card;