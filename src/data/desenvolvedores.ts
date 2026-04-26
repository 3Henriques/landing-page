import { Desenvolvedor } from "../types/desenvolvedor"
import { imagens } from "../../assets"

export const desenvolvedores: Desenvolvedor[] = [
    {
        id: 1,
        nome: "Gustavo Henrique Gennari",
        especialidade: "Desenvolvimento Front-end e Soluções Web",
        imagens: imagens[0],
        apelido: "Gustavo",
        fraseAprensentacao: "Transformando ideias em interfaces modernas e funcionais.",
        descricao: "Estudante de Análise e Desenvolvimento de Sistemas, focado em criação de aplicações web, interfaces responsivas e evolução constante na área de tecnologia.",
        sobreMim: "Sou estudante do quinto semestre de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e desenvolvimento de software. Tenho experiência acadêmica com Angular, React, Java, Spring Boot, linguagem C e banco de dados MongoDB. Também já trabalhei com modelagem de sistemas utilizando DER, diagramas de classes, casos de uso e diagramas de sequência. Gosto de aprender novas tecnologias, enfrentar desafios e transformar ideias em soluções práticas e eficientes.",
        redesSociais:{
            GitHub: "ghgennari",
            LinkedIn: "ghgennari",
            Instagram: "ghgennari"
        },
        cor: "#F34"
    },
    {
        id: 2,
        nome: "Henrique Andrade Rodrigues",
        especialidade: "Backend Developer",
        imagens: imagens[1],
        apelido: "Tímido",
        fraseAprensentacao: "Backend com confiabilidade",
        descricao: "Me chamo Henrique, desenvolvedor focado em backend Java SpringBoot. Gosto bastante de TI então o que tiver de desafio, pode chamar!",
        sobreMim: "Possuo conhecimentos em desenvolvimento e programação, com domínio intermediário em Python e Java, aplicação de Programação Orientada a Objetos e uso do framework Spring Boot em nível intermediário. Tenho contato com bancos de dados relacionais e não relacionais, incluindo SQL, SQL Server, PL/SQL, PostgreSQL e MongoDB, além de utilização do Microsoft Access. Também possuo familiaridade com versionamento de código utilizando Git e com containerização por meio do Docker em nível básico. Na área de infraestrutura e redes, tenho experiência com suporte técnico, Active Directory, configuração de roteadores, endereçamento IP, roteamento estático e dinâmico, virtualização com Oracle VM VirtualBox e configuração básica de serviços em nuvem, como Amazon EC2 e AWS Amplify. Além disso, já utilizei ferramentas de inteligência artificial como o Google AI Studio. Tenho familiaridade com metodologias e práticas de gestão e melhoria de processos, incluindo Scrum, Kanban, Agile e PDCA. Também possuo experiência com ferramentas de produtividade e colaboração, como Microsoft Word, Excel, PowerPoint e Teams, bem como com edição de vídeo utilizando o Sony Vegas Pro 17.",
        redesSociais:{
            GitHub: "h-and-rod",
            LinkedIn: "",
            Instagram: ""
        },
        cor: "#F34"
    },
    {
        id: 3,
        nome: "Henrique Garcia Carvalho",
        especialidade: "Software Architect",
        imagens: imagens[2],
        apelido: "Porto",
        fraseAprensentacao: "Arquitetura confiável e segura",
        descricao: "Estudante de ADS com foco em estruturação de sistemas, organização de projetos e desenvolvimento de soluções escaláveis",
        sobreMim: "Estudo de Análise e Desenvolvimento de Sistemas e tenho grande interesse em arquitetura de software, boas práticas de desenvolvimento e segurança de aplicações. Busco criar sistemas bem estruturados, eficientes e preparados para crescimento futuro. Tenho experiência acadêmica com modelagem de sistemas, banco de dados, documentação técnica e desenvolvimento utilizando tecnologias modernas. Valorizo organização, lógica e soluções sólidas para desafios reais.",
        redesSociais:{
            GitHub: "carvalh0Henrique",
            LinkedIn: "",
            Instagram: ""
        },
        cor: "#F34"
    }

]