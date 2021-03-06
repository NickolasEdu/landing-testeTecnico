# landing-testeTecnico

[Projeto Link](https://nickolasedu.github.io/landing-testeTecnico/)

<p>
  Dando inicio ao projeto real que foi usado no teste técnico do processo seletivo de uma vaga de emprego
</p>

<p>
  O teste original foram 3 dias de produção, baseado no meu tempo livre de estudo, entendi que deve ser uma média de 3 semanas - no caso três semanas somando os dias de commit e não necessariamente dias corridos.
 </p>
 
 - [Mock layout](https://xd.adobe.com/spec/4025e242-a495-4594-71d2-5fd89d774b57-3614/specs/)
 - [API endpoint](https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1)

 ## Conclusão do projeto

 <p>
  Para desenvolver este projeto eu dei uma pausa no meu roteiro de estudos, mesmo sabendo que haveria necessidade de revisar alguns temas durante a produção, mas no geral me surpreendi com o meu progresso. Houveram 4 momentos onde eu travei, mas foram por motivos simples - como erro de syntax, problema com o feedback de responsividade - ou em momentos que tentei fazer mais do que era pedido, como no inicío quando quis implementar o Mailchimp.
 </p>

 <p>
  Durante o processo de desenolvimento eu comprei e comecei a ler o livro SCRUM de Jeff & JJ Suntherland, o que me ajudou a priorizar e melhorar minha produtividade. Já que eu estabeleci uma meta de dias, e eu precisei focar no que era realmente preciso para entregar dentro desta meta, aliado ao fato de que eu defini dias, mas o tempo de desenvolvimento em cada dia foi dentre 1h a 4 horas em que eu realmente escrevia código. As técnicas de SCRUM  me ajudaram a utilizar melhor esse tempo.
 </p>

 <p>
  No geral eu considerei o resultado satisfatório, apesar de ainda sentir necessidade de fazer alterações, mas valeu de uma experiência muito positiva. Agora é coletar os feedbacks da avaliação, redirecionar o roteiro de estudos e me preparar para melhorar esta versão atual.
 </p>

## Relatório do LightHouse
 <img src="./assets/landinglight.png" alt="Exemplo de imagem" width="95%" height="600">

## Depoimento dos dias de desenvolvimento
<dl>
  <dt>Day 0</dt>
  <dd>Dei uma olhada no projeto ao todo e terminei colocando a estrutura inicial, header está posicionado mas os elementos estão com comportamentos errados</dd>
</dl>

<dl>
  <dt>Day 1</dt>
  <dd>Foquei em colocar todos os elementos HTML - no caso a maioria, já que falta os produtos da API e a devida definição dos formulários. Fiz a implementação do Grid tamplate, porém por conta de um bug no primeiro input voltei atrás e foquei em resolver o problema do background, minha intenção é resolver com o uso do clip-path </dd>
</dl>

<dl>
  <dt>Day 2</dt>
  <dd>Consegui resolver o style do background do header, e posicionei o footer, falta apenas o estilo adequado. O conteúdo principal está pré organizado, os inputs estão colocados e agora falta definir os fieldsets. Na sessão de produtos adicionei um texto placeholder que por algum motivo quebrou o width, mas esse problema já foi consertado. A esta altura pensei que já estaria trabalhando com o JS, mas o layout requer mais detalhes do que eu previ, e a parte de forms requer uma atenção especial também. </dd>
</dl>

<dl>
  <dt>Day 3</dt>
  <dd>Bom progresso hoje, faltam detalhes específicos do layout para serem resolvidos. O clip-path não está funcionando no footer como no header, preciso decidir em como fazer os inputs alinhados em linha com o label sobre eles e por as divisórias descritivas das sessões. Após isso é definir o mailchimp e fieldsets antes de partir para a validação e consumo da API.</dd>
</dl>

<dl>
  <dt>Day 4-5</dt>
  <dd>
    De principio tive um atraso por ter que aprender a usar a plataforma do Mailchimp, fiz algumas definições mas ainda falta fazer funcionar. Para aproveitar o tempo que fiquei empacado, acabei fazendo algumas alterações no style para melhorar minha visibiidade do projeto.
  </dd>
</dl>

<dl>
  <dt>Day 6</dt>
  <dd>
    Depois de alguns contratempos aprendendo sobre Mailchimp e decidindo como iria fazer a integração com os dois fieldsets de formulário na página, resolvi dar uns passos para trás e revisar a proposta do projeto. Então eu acabei percebendo que a integração com o Mailchimp não faz parte desde teste - eu vi um repositório de um projeto parecido com o uso do Mailchimp e por algum motivo fiz uma correlação que não existia. Apesar do contratempo consegui fazer e maior parte da validção da página, até aqui validei os inputs principais, agora resta as opções do input radio, e por fim adicionar a resposta de erro visual antes de partir para o consumo da API.
  </dd>
</dl>

<dl>
  <dt>Day 7-8</dt>
  <dd>
    Validação visual e retorno de sucesso para o usuários definidas, também resolvi o problema do checkbox do input radio. Agora falta zerar os valores do formulário assim que ele for concluído. Também comecei a fazer o consumo da API, tenho detalhes para resolver como o chamado para pesquisar os produtos e o conteúdo que irá aparecer antes da API ser carregada e em caso de não for possível carregar. Devo fazer isso antes de começar exibir o conteúdo em si.
  </dd>
</dl>

<dl>
  <dt>Day 9</dt>
  <dd>
    Cadeia de promisses funcionando, porém ainda com problemas na apresentação dos dados. Provavelmente vou precisar buscar uma solução diferente, talvez o uso do aync await seja útil. O problema aqui é na comportamento das promises - *.then()* - pois na cadeia algo sempre precisa ser retornado para a próxima promisse, eu estou com problemas nessa execução.
  </dd>
</dl>

<dl>
  <dt>Day 10-11</dt>
  <dd>
    Passei dois dias com um problema em conseguir usar os dados obtidos pela API, até enfim pedir ajuda e perceber que estava cometendo um erro de syntax no consumo da API. Resolvido agora só preciso fazer algumas modificações no HTML e CSS para fazer os estilos das caixas dos produtos, e para isso devo adicionar ou remover algumas classes. Resolvendo isso só preciso me certificar do consumo da next page da API.
  </dd>
</dl>

<dl>
  <dt>Day 12</dt>
  <dd>
    Definidos os estilos das duas sessões de input, completando os estilos da versão web vou concluir a parte das funcionalidades antes de partir para os estilos mobile. Atualmente estou com um problema com a apresentação dos produtos na tela com um comportamento inesperado, resolvido isso vou partir para o evento que vai chamar a próxima página da API.
  </dd>
</dl>

<dl>
  <dt>Day 13-14</dt>
  <dd>
    Após travar novamente resolvi reorganizar o arquivo js, ajudou a clarear as ideias. Consegui um avanço no uso do evento de click, no qual já está me retornando a next page da API, falta apresentar na tela junto do conteúdo anterior. Após isso vou terminar os estilos CSS e dar uma última resivada no javascrip antes de considerar como terminado.
  </dd>
</dl>

<dl>
  <dt>Day 15</dt>
  <dd>
    Consegui fazer o botão apresentar novos produtos, onde na realidade acabei apenas consumindo novamente os mesmos dados da API. Porém com esse retorno eu acabei identificando dois problemas no layout quando novos produtos são mostrados. Aproveitei para finalizar os estilos dos dados nas caixas de cada produto e resolvi os problemas de display. Agora novamente estou focado em fazer com que apresente os itens corretos na tela. Vou deixar para fazer a responsividade por último e ainda quero dar uma repassada no código do script. 
  </dd>
</dl>

<dl>
  <dt>Days 16-17</dt>
  <dd>
    Passei os últimos dois dias focado em resolver a questão da paginação. Por fim deixei de lado em usar o 'nextPage', uma documentação sobre o uso teria ajudado. Voltei a atenção para a requisição pelo fetch e usar uma string literal para incrementar o valor das páginas através de uma variavél, de inicio não deu certo, tentei dividir a algumas partes da cadeia de promisses e em um momento fazer com que os dados do resultado fossem retornador para diferentes arrays onde pensei em usar o spread para contatenar cada página de items, porém acreditei que deixaria o código complicado, voltei a revisar um conteúdo de fetch e resolvi em voltar e separar a cadeia de promisses em funções o que achei um resultado mais satisfatório. Agora vou trabalhar a responsividade e concluir o layout antes de revisitar o código JS.
  </dd>
</dl>

<dl>
  <dt>Days 18-19</dt>
  <dd>
    Definindo os estilos responsivos, porém dei uma pausa no processo pois está dando uma incoerência com a ferramenta de simulação de dispositivo móvel e o meu smartphone, apresentendo estilos diferentes em algumas partes do projeto. No momento vou investigar isso antes de prosseguir.
  </dd>
</dl>

<dl>
  <dt>Days 20-21-22</dt>
  <dd>
    Usando o live server atravéns do celular consegui ser mais produtivo na responsividade, fiz alguns alinhamentos finais nos estilos do menu e caixas dos produtos. E final das contas o projeto está funcional, apesar de ainda existir pontos nele no qual queria mexer, o projeto está dentro do que foi pedido. Vou resumir um relato sobre o processo de desenolvimento e pedir feedbacks para poder direcionar melhor os meus estudos.
  </dd>
</dl>
