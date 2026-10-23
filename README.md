# 🚀 Fica Comigo

> **Inovação, Tecnologia e Apoio Imediato.**  
> Projeto desenvolvido durante o Hackaton Flash como prova prática para a disciplina de Inovação e Startup.

## 📱 O Aplicativo

![Demonstração do Aplicativo](./assets/tela-do-app.png)

## 📖 Sobre o Projeto

O Fica Comigo é uma ponte de apoio emocional projetada para ajudar o usuário a atravessar os próximos 10 minutos de crise. É um espaço anônimo, seguro e sem fricção para pessoas em sofrimento que não conseguem ou não querem digitar longos desabafos. O aplicativo não tenta diagnosticar nem substitui apoio profissional; ele apenas reduz a barreira do primeiro passo ("não estou bem") por meio de interações visuais simples e acolhedoras.

Seja através de exercícios guiados, técnicas de foco ou uma conversa anônima, o aplicativo é um espaço seguro para ajudar o usuário a se estabilizar e, em seguida, buscar apoio na sua rede de contatos pessoais.

## ✨ Principais Funcionalidades

O escopo do MVP foi estruturado em três frentes principais para reduzir a ansiedade e oferecer opções claras sem exigir digitação inicial:

*   **🚨 Botões SOS Onipresentes:** Componente visual fixo e discreto em todas as telas com discagem rápida para emergências no Brasil (📞 SAMU 192 e 💛 CVV 188), garantindo que ajuda profissional esteja sempre a um toque de distância.
*   **📍 Check-in Imediato e Sem Fricção:** Tela inicial com login anônimo invisível e botões grandes de autoatendimento ("Quero companhia", "Quero ajuda para me acalmar", "Preciso de ajuda urgente").
*   **🫁 Regulação Emocional (Frente A):**
    *   **Respiração 4-7-8:** Interface visual guiada que ajuda a acalmar o sistema nervoso simpático através de ciclos de respiração controlada.
    *   **Aterramento 5-4-3-2-1:** Exercício para trazer os pensamentos ao presente, guiando o usuário a focar em coisas que pode ver, tocar, ouvir, cheirar e reconhecer.
*   **💬 Conexão com Voluntário (Frente B):** Um chat anônimo que conecta o usuário a um voluntário (companhia silenciosa) pronto para ouvir sem julgamentos.
*   **🤝 Próximos Passos (Encerramento):** Após os 10 minutos, o app sugere compartilhar um alerta de "Preciso de você" no WhatsApp para um contato de confiança previamente cadastrado, além de fornecer links rápidos de saúde mental.

## 🎨 UI/UX e Acessibilidade

O usuário em crise possui coordenação motora e foco reduzidos. Por isso, a interface prioriza:
*   **Design System Suave:** Modo escuro (Dark Mode) por padrão ou paleta de cores pastéis anti-ansiedade (tons de azul *dark slate*, verde *teal* e amarelo suave). Vermelhos alarmantes são restritos apenas aos botões de emergência crítica.
*   **Acessibilidade:** Fontes grandes, alto contraste e áreas de toque (*touch targets*) generosas para evitar frustração durante o uso.

## 🛠️ Tecnologias e Estrutura

Este projeto é um aplicativo mobile construído com as melhores práticas do ecossistema moderno do React:

*   **Framework:** Expo / React Native.
*   **Navegação:** Expo Router (utilizando rotas baseadas em arquivos na pasta `src/app/` para manter a organização padrão do ecossistema).
*   **Build & Deploy:** EAS (Expo Application Services) para gerar as builds na nuvem (`eas build`) sem a necessidade de configurações complexas locais.

### Estrutura de Pastas

Abaixo está a arquitetura base dos componentes e telas desenvolvidas para o MVP:

```text
fica-comigo/
├── App.tsx
├── package.json
├── app.json
└── src/
    ├── components/
    │   ├── SosHeader.tsx        # Botões onipresentes SAMU 192 / CVV 188
    │   └── BreathingGuide.tsx   # Animação do exercício 4-7-8
    ├── screens/                 
    │   ├── CheckInScreen.tsx     # Tela 1: Escolha rápida sem digitação
    │   ├── RegulationScreen.tsx  # Tela 2A: 4-7-8 e 5-4-3-2-1
    │   ├── ChatScreen.tsx        # Tela 2B: Chat mockado com voluntário
    │   └── NextStepsScreen.tsx   # Tela 3: Fechamento e rede de apoio
    ├── navigation/
    │   └── AppNavigator.tsx     # Fluxo de navegação do aplicativo
    ├── theme/
    │   └── colors.ts            # Paleta anti-ansiedade
    └── types/
        └── navigation.ts        # Tipagem de rotas

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar o aplicativo localmente:

1. Clone este repositório:
   `git clone https://github.com/Ivaneudo/nome-do-repo.git`

2. Instale as dependências (utilizamos o comando recomendado do Expo para garantir a compatibilidade do SDK):
   `npx expo install`

3. Inicie o servidor de desenvolvimento:
   `npx expo start`

Dica: Para verificar problemas de dependências no futuro, você pode utilizar npx expo-doctor ou npx expo install --fix.

## 👥 A Equipe (Os Hackers)

Conheça as mentes por trás deste projeto:

| [![Ivaneudo](https://github.com/Ivaneudo.png?size=115)](https://github.com/Ivaneudo) | [![Luana Matos](https://github.com/LuanaRMatos.png?size=115)](https://github.com/LuanaRMatos) | [![Samuel](https://github.com/Samuellfc94.png?size=115)](https://github.com/Samuellfc94) |
| :---: | :---: | :---: |
| **Ivaneudo**<br>Desenvolvedor | **Luana Matos**<br>Criativa / Marketing | **Samuel**<br>Diretor / Líder |

---
*Feito com ☕ e 💻 durante o Hackaton Flash.*