import Image from "next/image";
import React from "react";

import { Container, Details, Label } from "./styles";
import NullBank from "../../assets/images/Nullbank.svg";
import Link from "next/link";

interface ICard {
  image: string;
  link?: string;
  name: string;
  label: string;
  description: string;
}

function Card({ description, image, label, name, link }: ICard) {
  return (
    <Container>
      <Image
        fill
        src={image}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        alt={name}
      />

      <Details>
        <h3>{name}</h3>
        <Label>{label}</Label>
        <p>{description}</p>
        {link && (
          <Link href={link} target="_blank">
            Acessar
          </Link>
        )}
      </Details>
    </Container>
  );
}

export default Card;
