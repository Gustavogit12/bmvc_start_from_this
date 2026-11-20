# Demigod RPG: Guia das Linhagens (BMVC I)

Página web em **Python + Bottle**, na estrutura BMVC (Bottle Model-View-Controller), que apresenta as classes jogáveis e as criaturas do **Demigod RPG**, com um simulador de ataque em JavaScript. O projeto parte do repositório base `bmvc_start_from_this`.

## Propósito

Funcionar como guia de consulta do jogo. O jogador vê os atributos de cada linhagem olímpica (Zeus, Poseidon e Hades), conhece as criaturas do labirinto e testa um ataque simulado contra o Minotauro.

Os dados exibidos vêm de **objetos Python** (as classes do Model), não de texto escrito direto no HTML.

## Funcionalidades

- Página inicial servida por um template `.tpl` do Bottle.
- Cartões das três linhagens, com atributos, poder especial e habilidades.
- Cartões das criaturas do labirinto, com HP, ataque, defesa e XP.
- Simulador em JavaScript: ataque contra o Minotauro (com chance de acerto crítico) e sorteio de atributos de um novo semideus.
- CSS e JavaScript carregados como arquivos estáticos.

## Conceitos de Orientação a Objetos

| Conceito | Onde aparece |
|---|---|
| Herança | `Demigod` e `Enemy` herdam de `Entity`; `ChildOfZeus`, `ChildOfPoseidon` e `ChildOfHades` herdam de `Demigod` |
| Polimorfismo | `basic_attack` e `take_damage` são sobrescritos nas subclasses |
| Composição | Um `Demigod` possui uma lista de objetos `Ability`; o `Application` possui um `DataRecord` |
| Encapsulamento | O `DataRecord` guarda as listas em atributos privados e as entrega por métodos |

## Estrutura do projeto

```
bmvc_start_from_this/
├── route.py
├── README.md
├── .gitignore
└── app/
    ├── controllers/
    │   ├── application.py
    │   └── datarecord.py
    ├── models/
    │   └── rpg_engine.py
    ├── static/
    │   ├── css/style.css
    │   └── js/script.js
    └── views/html/
        └── inicio.tpl
```

| Camada | Arquivo | Responsabilidade |
|---|---|---|
| Model | `app/models/rpg_engine.py` | Classes do jogo |
| Controller | `app/controllers/application.py` e `datarecord.py` | Escolhe a página e fornece os objetos |
| View | `app/views/html/inicio.tpl` | Monta o HTML com os dados |
| Estáticos | `app/static/` | CSS e JavaScript |

## Como executar

Pré-requisito: Python 3.9 ou superior.

**Windows (PowerShell), na pasta do projeto:**

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install bottle
python route.py
```

Se o PowerShell bloquear a ativação do ambiente virtual, rode antes:
`Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`

Depois acesse **http://localhost:8080** no navegador.

## Rotas

| Método | Rota | Descrição |
|---|---|---|
| GET | `/` e `/inicio` | Página principal |
| GET | `/helper` | Página de ajuda do projeto base |
| GET | `/static/<arquivo>` | Serve o CSS e o JavaScript |

## Tecnologias

Python, Bottle, HTML5, CSS3 e JavaScript puro.

## Autor

Gustavo