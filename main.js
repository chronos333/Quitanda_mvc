// Importa o Model (dados e regras de negócio)
import { QuitandaModel } from "./model/QuitandaModel.js";

// Importa a View (interface e interação com o DOM)
import { QuitandaView } from "./view/QuitandaView.js";

// Importa o Controller (faz a ligação entre Model e View)
import { QuitandaController } from "./controller/QuitandaController.js";

// INSTÂNCIAS DO MVC

// Cria o Model (onde ficam os dados)
const model = new QuitandaModel();

// Cria a View (onde fica a interface)
const view = new QuitandaView();

// Cria o Controller, conectando Model + View
const controller = new QuitandaController(model, view);

// INICIALIZA O SISTEMA

// Inicia o sistema (define eventos e renderiza a tela)
controller.init();
