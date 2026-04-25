# Landing Page Colaborativa

Este projeto é um aplicativo mobile desenvolvido com **React Native** e **Expo** como parte de um trabalho prático. O objetivo é criar uma interface de apresentação de equipe com navegação entre telas, seguindo uma estrutura profissional de componentes e estilização.

## 👥 Integrantes

- Gustavo Gennari
- Henrique Andrade
- Henrique Garcia

## 📝 Descrição do App

O aplicativo funciona como um portfólio colaborativo de um trio de desenvolvedores, dividido em duas telas principais:

1. **Tela Home (Início):** Apresentação visual com logo ou nome do app no topo.
    - Imagem de perfil
    - Breve texto introdutório (Título + Descrição).
    - Seção "Acesse minhas redes" com links para GitHub, LinkedIn e Instagram.
    - Botão interativo "Entre em contato!" (exibe um `Alert`).
    - Controle de alternância (**Switch**) que demonstra interação com o usuário através de um `Alert`.
    - Botão "Sobre mim" de navegação para a tela de cada integrante.
2. **Tela Sobre Mim:**
    - Espaço dedicado à biografia e trajetória da equipe.
    - Layout focado em legibilidade e hierarquia de informação.
    - Rodapé com os créditos do projeto.

## 🛠 Tecnologias Utilizadas

- **React Native**
- **Expo**
- **TypeScript**
- **React Navigation** (para transição entre telas)
- **StyleSheet / Styled-components**

## 📂 Estrutura de Pastas

A organização do projeto segue as boas práticas de desenvolvimento:

Plaintext

```python
/src
  /assets      # Imagens, logos e ícones personalizados
  /components  # Componentes reutilizáveis (Botões, Cards, Seções)
  /screens     # Telas do aplicativo (Home.tsx, SobreMim.tsx)
  /navigation  # Configuração das rotas
```

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**Bash
    
    https://github.com/3Henriques/landing-page.git
    
2. **Instale as dependências:**Bash
    
    `npm install`
    
3. **Inicie o Expo Go**
    
    `npx expo start`

4. **Execute as seguintes dependências**
    npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
    npx expo install @expo/vector-icons
    

---