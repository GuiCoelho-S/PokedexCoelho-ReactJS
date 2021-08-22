import { ContainerGrid } from "../../components/Container";
import { ContainerMain, ConteudoMain, Procurar, ProcurarPokemon, Title } from "./style";
import Card from "../../components/Card";
import { useNomePokemons } from "../../hooks/usePokemon";
import { Button } from "../../components/Button";

const Home = () => {

  const { pokemonData } = useNomePokemons();
  

  var arr =[];
  arr.push(pokemonData)
  //console.log(arr)

  return (
    <ContainerMain>
      <ConteudoMain>
        <Title>Saiba mais sobre seu pokemon favorito </Title>
        
        <article>
        <ProcurarPokemon type="text" placeholder="Digite aqui..."/>
        <Procurar>Procurar</Procurar>
        </article>
        <ContainerGrid>
          {
            arr.map((index) => {return(<Card key={index} />)})
          }
        </ContainerGrid>
        
      </ConteudoMain>
    </ContainerMain>
  );
};
export default Home;
