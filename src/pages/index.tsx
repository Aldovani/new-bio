import { Container, ContainerSocialLinks, Wrap } from "@/assets/styles/home";

import Aside from "@/components/Aside";
import { Subtitle } from "@/components/Subtitle";
import Card from "@/components/Card";
import Link from "@/components/Link";

import { personalLinks, socialLinks } from "@/databases/links";
import { GetStaticProps } from "next";
import { getData } from "@/services/googleApi";
import { useState } from "react";

type List = {
  name: string;
  image: string;
  link: string;
  label: string;
  description: string;
  type: string;
}[];

interface IHome {
  list: List;
}

export default function Home({ list }: IHome) {
  return (
    <Container>
      <div className="circle circle-1" />

      <Aside />
      <div>
        <section>
          <Subtitle>Redes sociais</Subtitle>
          <ContainerSocialLinks>
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                colors={link.colors}
                href={link.href}
                icon={link.icon}
                name={link.name}
              />
            ))}
          </ContainerSocialLinks>
        </section>

        <section className="section">
          <Subtitle>Pessoal</Subtitle>
          <ContainerSocialLinks>
            {personalLinks.map((link) => (
              <Link
                key={link.name}
                colors={link.colors}
                href={link.href}
                icon={link.icon}
                name={link.name}
              />
            ))}
          </ContainerSocialLinks>
        </section>

        <section className="section">
          <Subtitle>Últimos projetos</Subtitle>

          <Wrap>
            {list
              .filter((item) => item.type === "projects")
              .map((item) => (
                <Card
                  description={item.description}
                  image={item.image}
                  label={item.label}
                  name={item.name}
                  key={item.name}
                  link={item.link}
                />
              ))}
          </Wrap>
        </section>

        <section className="section">
          <Subtitle>Recomendações</Subtitle>

          <Wrap>
            {list
              .filter((item) => item.type !== "projects")
              .map((item) => (
                <Card
                  description={item.description}
                  image={item.image}
                  label={item.label}
                  name={item.name}
                  key={item.name}
                  link={item.link}
                />
              ))}
          </Wrap>
        </section>
      </div>
      <div className="circle circle-2" />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const list: List = await getData();
  return {
    props: { list },
    revalidate: 60 * 60 * 24, //1 dia
  };
};
