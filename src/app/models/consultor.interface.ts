export interface ConsultorModel {
  id: number;
  nome: string;
  especialidade: string;

  email?: string;
  telefone?: string;
  cidade?: string;
  anosExperiencia?: number;
  habilidades?: string[];
  bio?: string;
}
