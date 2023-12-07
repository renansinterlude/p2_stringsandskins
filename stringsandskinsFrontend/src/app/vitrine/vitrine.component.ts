import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DetalheProduto } from '../detalhe-produto/detalhe-produto.model';


@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent {
  produtos: DetalheProduto[] = [];

  constructor(private router: Router) {
    this.produtos.push(
      new DetalheProduto(
        1,
        "CD If I can't have love, I want power - Halsey",
        29.99,
        "CD do álbum If I can't have love, I want power da cantora Halsey. Aprecie a qualidade sonora clássica do CD com as músicas emocionantes da Halsey.",
        "./assets/iichliwp.png"
      ),
      new DetalheProduto(
        2, "CD Taylor Swift - folklore", 
        69.90, 
        "'folklore é o oitavo álbum de estúdio da cantora e compositora Taylor Swift, lançado em 24 de julho de 2020. Este álbum marca uma mudança notável no estilo musical de Swift, afastando-se do pop mais convencional de seus trabalhos anteriores e abraçando um som mais folk e indie.", 
        "./assets/folklore.png"
      ),
      new DetalheProduto(
        3, 
        "CD Halsey - Hopeless Fountain Kingdom", 
        114.90, 
        '"Hopeless Fountain Kingdom" é o segundo álbum de estúdio da cantora e compositora Halsey, lançado em 2 de junho de 2017. Este álbum é uma jornada musical que explora temas como amor, traição, redenção e autodescoberta.', 
        "./assets/hfk.png"
      ),
      new DetalheProduto(
        4, 
        "CD Bastille - Wild World", 
        29.99, 
        '"Wild World" é o segundo álbum de estúdio da banda britânica Bastille, lançado em 9 de setembro de 2016. O álbum é uma exploração multifacetada das complexidades do mundo moderno, tocando em temas que vão desde a política e a sociedade até as questões pessoais e existenciais.', 
        "./assets/wildworld.png"
      ),
      new DetalheProduto(
      5,
      "CD Halsey - Manic",
      139.99,
      "Tracklist:\n1. Ashley\n2. Clementine\n3. Graveyard\n4. You should be sad\n5. Forever... (is a long time)\n6. Dominic's Interlude\n7. I HATE EVERYBODY\n8. 3am\n9. Without Me\n10. Finally // beautiful stranger\n11. Alanis' Interlude\n12. killing boys\n13. SUGA's Interlude\n14. More\n15. Still Learning\n16. 929",
      "./assets/manic.png"
      ),

      new DetalheProduto(
        6,
        "Vinil Lana Del Rey - Chemtrails Over the Country Club",
        169.99,
        "Vinil exclusivo do álbum Chemtrails Over the Country Club de Lana Del Rey. Desfrute da atmosfera única e das letras envolventes neste formato clássico.",
        "./assets/cotccvinil.png"
      ),
  
      new DetalheProduto(
        7,
        "Camiseta Taylor Swift - Midnight Collection",
        159.99,
        "Camiseta da coleção Midnight da Taylor Swift, apresentando um design elegante e inspirado. Feita com material de alta qualidade para o máximo conforto.",
        "./assets/blusamidnights.png"
      ),

      new DetalheProduto(
        8,
        "Camiseta Taylor Swift - Midnight Collection",
        159.99,
        "Camiseta da coleção Midnight da Taylor Swift, apresentando um design elegante e inspirado. Feita com material de alta qualidade para o máximo conforto.",
        "./assets/blusamidnights2.png"
      ),
      
      new DetalheProduto(
        9,
        "Camiseta Bastille - Estampada",
        399.99,
        "Camiseta estampada da banda Bastille, destacando elementos exclusivos de suas músicas e álbuns mais populares. Um must-have para os fãs!",
        "./assets/camisetabastille.png"
      ),
      
      new DetalheProduto(
        10,
        "Vinil Bastille - Doom Days",
        259.99,
        "Edição especial em vinil do álbum Doom Days da banda Bastille. Aprecie a qualidade sonora clássica do vinil com as músicas emocionantes do Bastille.",
        "./assets/doomdaysvinil.png"
      ),

      new DetalheProduto(
        11,
        "Boné Bastille - Edição Especial",
        499.99,
        "Boné exclusivo da banda Bastille, com design único e detalhes especiais.",
        "./assets/bonebastille.png"
      ),

      new DetalheProduto(
        12,
        "Moletom Manic - Halsey",
        449.99,
        "Moletom exclusivo do álbum Manic da Halsey, com design único e detalhes especiais.",
        "./assets/moletommanic.png"
      ),

      new DetalheProduto(
        13,
        "Vinil Lana Del Rey - Ultraviolence (Urban Outfitters Exclusive)",
        799.99,
        "Vinil exclusivo do álbum Ultraviolence da Lana Del Rey. Desfrute da atmosfera única e das letras envolventes neste formato clássico.",
        "./assets/ultraviolencevinil.png"
      ),

      new DetalheProduto(
        14,
        "CD Bastille - Doom Days",
        59.99,
        "CD do álbum Doom Days da banda Bastille. Aprecie a qualidade sonora clássica do CD com as músicas emocionantes do Bastille.",
        "./assets/doomdays.png"
      ),

      new DetalheProduto(
        16,
        "CD Halsey - Badlands (Deluxe)",
        139.99,
        "Tracklist:\n1. Castle\n2. Hold Me Down\n3. New Americana\n4. Drive\n5. Roman Holiday\n6. Colors\n7. Coming Down\n8. Haunting\n9. Control\n10. Young God\n11. Ghost\n12. Hurricane\n13. Gasoline\n14. Control (Young Bombs Remix) [Bonus Track]\n15. Young God (Halsey vs. R3hab Remix) [Bonus Track]\n16. Ghost (Lost Kings Remix) [Bonus Track]",
        "./assets/badlands.png"
      ),

      new DetalheProduto(
        18,
        "CD Blaenavon - That's Your Lot",
        139.99,
        "That's Your Lot é o álbum de estreia da banda britânica Blaenavon, lançado em 7 de abril de 2017. O álbum é uma exploração multifacetada das complexidades do mundo moderno, tocando em temas que vão desde a política e a sociedade até as questões pessoais e existenciais.",
        "./assets/tyal.png"
      ),

      new DetalheProduto(
        19,
        "Toca-discos Crosley - Edição Especial",
        1299.99,
        "Toca-discos exclusivo da marca Crosley, com design único e detalhes especiais. Perfeito para os fãs de vinil!",
        "./assets/tocadiscos.png"
      ),

      new DetalheProduto(
        20,
        "CD Bad Blood - Bastille",
        79.99,
        "Bad Blood é o álbum de estreia da banda britânica Bastille, lançado em 4 de março de 2013. O álbum é uma exploração multifacetada das complexidades do mundo moderno, tocando em temas que vão desde a política e a sociedade até as questões pessoais e existenciais.",
        "./assets/badblood.png"
      ),
      
    );
  }

  verDetalhes(id: number) {
    this.router.navigate(['/detalhes', id]);
  }
}