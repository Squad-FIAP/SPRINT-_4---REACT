import '../scss/estilo.scss'
import { useState, useEffect } from 'react';

function Procedimentos() {
    const [searchTerm, setSearchTerm] = useState('');
    const [procedureDescription, setProcedureDescription] = useState('Aqui haverá um descritivo de preparação do exame para o paciente dependendo da resposta do quadro acima.');

    useEffect(() => {
        const searchProcedures = (searchTerm) => {
            var normalizedSearchTerm = searchTerm.toLowerCase() || searchTerm.toUpperCase();
            if (normalizedSearchTerm === 'Diabetes' || normalizedSearchTerm === 'diabetes') {
                setProcedureDescription('Imagine que seu corpo é como uma casa onde, para tudo funcionar bem, precisamos de energia. E a principal energia que usamos é o açúcar, que vem dos alimentos que comemos. Mas, para esse açúcar entrar nas "salas" do nosso corpo e ser usado como energia, ele precisa de uma chave. Essa chave é chamada de insulina, e é feita em uma parte do nosso corpo chamada pâncreas.\n Agora, em algumas pessoas, o corpo tem um probleminha: ou o pâncreas não faz chaves suficientes (isso é o que chamamos de diabetes tipo 1), ou as chaves que ele faz não funcionam direito nas fechaduras (isso é conhecido como diabetes tipo 2).\n Quando isso acontece, o açúcar não consegue entrar nas salas para dar energia, e acaba ficando muito dele "do lado de fora", no nosso sangue. Isso não é bom porque pode fazer a pessoa se sentir cansada, com sede o tempo todo, ou precisar ir ao banheiro mais vezes. Para ajudar quem tem diabetes, às vezes eles precisam de chaves extras, que podem vir na forma de uma injeção ou medicamento, ou aprender maneiras de fazer as chaves que eles têm funcionar melhor.\n Isso também inclui comer alimentos saudáveis e praticar exercícios, o que ajuda a manter o açúcar no sangue em um bom nível, assim como manter a casa funcionando direitinho.');
            } else if (normalizedSearchTerm === 'Hemograma' || normalizedSearchTerm === 'hemograma') {
                setProcedureDescription('Imagine que seu corpo é como um parque de diversões super grande e dentro dele tem vários tipos de ajudantes especiais que fazem tudo funcionar direitinho. O hemograma é como se a gente tirasse uma foto de todos esses ajudantes para ver como eles estão trabalhando. Os construtores de parques - Eles são como os glóbulos vermelhos que levam oxigênio para todo o corpo, para que tudo possa funcionar bem.\n É como se eles carregassem balões de oxigênio para todos os cantos do parque. Os seguranças - São os glóbulos brancos, e eles ajudam a proteger o parque de invasores, como vírus e bactérias, que querem bagunçar a diversão. Eles estão sempre prontos para defender o parque.\n Os operadores de brinquedos - Eles são como as plaquetas, que ajudam a consertar qualquer parte do parque que se machuque ou quebre. Se você ganha um corte ou arranhão, eles são como os funcionários que colocam um curativo e consertam tudo rapidinho.Então, quando fazemos um hemograma, é como se tirássemos essa foto para garantir que temos o número certo de construtores, seguranças e operadores de brinquedos.\n Se estiver faltando alguns, ou se tivermos muitos de um tipo, o médico vai saber como ajudar a fazer o parque funcionar melhor.');
            } else if (normalizedSearchTerm === 'Lavar as maos' || normalizedSearchTerm === "lavar as maos"){
                setProcedureDescription('Você sabia que as nossas mãos são como super-heróis? Elas fazem muitas coisas incríveis para nós, como nos ajudar a comer, brincar e aprender coisas novas. Mas, às vezes, elas também podem pegar germes invisíveis que podem nos fazer sentir mal. Os germes são como vilões minúsculos que não conseguimos ver sem uma lupa muito poderosa. Eles adoram se esconder nos lugares onde nossas mãos tocam, esperando para nos pegar de surpresa!\nMas não se preocupe, temos um superpoder contra esses vilões: lavar as mãos! Quando lavamos as mãos com água e sabão, é como mandar um exército de super-heróis para combater esses germes e mandá-los pelo ralo. Aqui está como podemos fazer isso:\nMolhar as mãos - Primeiro, abrimos a torneira e molhamos nossas mãos. A água é o nosso campo de batalha.Usar sabão - Depois, colocamos sabão nas mãos. O sabão é como uma capa mágica que ajuda a capturar os germes.\nEsfregar bem - Agora, esfregamos as mãos uma na outra, entre os dedos, e não esquecemos das unhas e do pulso. Temos que fazer isso por pelo menos 20 segundos. Podemos cantar uma música curta duas vezes, como "Parabéns Pra Você", enquanto fazemos isso.\nEnxaguar - Depois que capturamos todos os germes com o sabão, enxaguamos as mãos na água para mandar todos eles pelo ralo.\nSecar - Por último, usamos uma toalha limpa para secar as mãos. Agora, elas estão seguras e livres de germes novamente!\nLavar as mãos é como ter um escudo protetor, nos mantendo saudáveis e prontos para continuar nossas aventuras. É importante lavar as mãos antes de comer, depois de usar o banheiro, quando chegamos em casa e sempre que parecerem sujas. Assim, mantemos os germes-vilões bem longe!');
            } else {
                setProcedureDescription('Resultado da busca para: ' + normalizedSearchTerm);
            }
        }

        searchProcedures(searchTerm);
    }, [searchTerm]);

    const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.elements['procedure-search'].value.trim());
}


    return(
        <>
            <section className="procedures-section">
                <h1>Procedimentos</h1>
                <p>O que fazer antes dos seus exames?</p>
                <form id="procedure-form" onSubmit={handleSubmit}>
                    <label>Digite aqui qual seu procedimento:</label>
                    <input type="text" id="procedure-search" placeholder="Digite aqui"/>
                    <button id="search-btn" type="submit">Buscar</button>
                </form>
                <div id="procedure-description">
                    <p>{procedureDescription}</p>
                </div>
            </section>
        </>
    )
}

export default Procedimentos;