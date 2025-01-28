class Personagem { //como essa classe nao ta exportando entao precisa disso nome: string... confirmando que a classe vai ter esses tipos especificos
    nome: string;
    nivel: number;
    vida: number;
    tipo: string;
  
    constructor(nome: string, nivel: number, vida: number, tipo: string) {
      this.nome = nome;
      this.nivel = nivel;
      this.vida = vida;
      this.tipo = tipo;
    }
  }
  
  class Cozinhar{
    cozinhar(){
        return "cozinhar"
    }
  }
  
  class Espiao{
    espiao(){
        return "abrir fechaduras"
    }
  }
  
  class LancarMagia{
    magica(){
        return "usar mágica"
    }
  }

  class Lutar{
    lutar(){
        return "lutar"
    }
  }
  
  function applyMixins(derivedCtor: any, baseCtors: any[]) {
      baseCtors.forEach(baseCtor => {
          Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
              derivedCtor.prototype[name] = baseCtor.prototype[name];
          });
      });
  }
  
  applyMixins(Personagem, [Cozinhar, Espiao, LancarMagia, Lutar]);
  interface Personagem extends Cozinhar, Espiao, LancarMagia, Lutar {}
  
const Ficcao = new Personagem('Marcille', 50, 100, 'Elfa');
console.log(`A ${Ficcao.nome} consegue ${Ficcao.magica()}, então ela é ${Ficcao.tipo}`)

const Ficcao2 = new Personagem('Laios', 26, 100, 'Humanóide');
console.log(`O ${Ficcao2.nome} consegue ${Ficcao2.lutar()}`)

const Ficcao3 = new Personagem('Chilchuck', 29, 100, 'Pequenino');
console.log(`O ${Ficcao3.nome} consegue ${Ficcao3.espiao()}`)

const Ficcao4 = new Personagem('Senshi', 112, 100, 'Anão');
console.log(`O ${Ficcao4.nome} consegue ${Ficcao4.cozinhar()}`)

const Ficcao5 = new Personagem('Fallin', 23, 2000, 'Meio humano - meio dragão');
console.log(`A ${Ficcao5.nome} consegue ${Ficcao5.magica()}, ${Ficcao5.lutar()} e Soltar fogo pela boca, então ela é ${Ficcao5.tipo}`)



  