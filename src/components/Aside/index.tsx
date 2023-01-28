import Image from "next/image";
import { Subtitle } from "../Subtitle";
import { Container } from "./styles";

function Aside() {
  return (
    <Container>
      <div className="containerContent">
        <Image
          width={190}
          height={190}
          src="https://github.com/aldovani.png"
          alt="Avatar"
        />
        <div>
          <h1>Aldovani Henrique</h1>
          <p>👨🏻‍🎓 Estudante de Analise e desenvolvimento de sistema</p>

          <h3>aldovanihcosta@gmail.com</h3>
        </div>
        <div>
          <Subtitle>Localização</Subtitle>
          <span>São Paulo - Brasil</span>
        </div>
      </div>
    </Container>
  );
}

export default Aside;
