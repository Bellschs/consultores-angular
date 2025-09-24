import { Injectable } from '@angular/core';
import { ConsultorModel } from '../models/consultor.interface';

@Injectable({ providedIn: 'root' })
export class ConsultorService {

  // 🔹 Array de consultores (mutável para permitir CRUD)
  private consultores: ConsultorModel[] = [
    {
      id: 1,
      nome: 'João Silva',
      especialidade: 'Desenvolvedor Web',
      email: 'joao@senac.com',
      telefone: '(11) 99999-0001',
      cidade: 'São Paulo - SP',
      anosExperiencia: 5,
      habilidades: ['Angular', 'TypeScript', 'RxJS'],
      bio: 'Desenvolvedor front-end focado em SPAs performáticas.'
    },
    { 
      id: 2, 
      nome: 'Maria Silva',  
      especialidade: 'Desenvolvedor Web', 
      email: 'maria@senac.com',
      telefone: '(11) 98888-0002',
      cidade: 'Guarulhos - SP',
      anosExperiencia: 3,
      habilidades: ['Angular', 'HTML', 'CSS'],
      bio: 'Apaixonada por criar interfaces limpas, acessíveis e de fácil usabilidade.'
    },
    { 
      id: 3, 
      nome: 'Lucas Silva',  
      especialidade: 'Desenvolvedor Web', 
      email: 'lucas@senac.com',
      telefone: '(11) 97777-0003',
      cidade: 'Osasco - SP',
      anosExperiencia: 4,
      habilidades: ['Angular', 'Node.js', 'APIs REST'],
      bio: 'Desenvolvedor fullstack que gosta de trabalhar com aplicações em tempo real.'
    },
    { 
      id: 4, 
      nome: 'Mário Silva',   
      especialidade: 'Analista de Dados', 
      email: 'mario@senac.com',
      telefone: '(11) 96666-0004',
      cidade: 'São Paulo - SP',
      anosExperiencia: 6,
      habilidades: ['SQL', 'Python', 'Power BI'],
      bio: 'Analista de dados com experiência em transformar números em insights estratégicos.'
    },
    { 
      id: 5, 
      nome: 'Fernanda Silva',
      especialidade: 'Analista de Dados', 
      email: 'fernanda@senac.com',
      telefone: '(11) 95555-0005',
      cidade: 'Santo André - SP',
      anosExperiencia: 5,
      habilidades: ['R', 'Excel Avançado', 'ETL'],
      bio: 'Especialista em análise de grandes volumes de dados e criação de relatórios detalhados.'
    },
{ 
  id: 6, 
  nome: 'Paula Silva',   
  especialidade: 'Analista de Dados', 
  email: 'paula@senac.com',
  telefone: '(11) 94444-0006',
  cidade: 'São Bernardo - SP',
  anosExperiencia: 2,
  habilidades: ['SQL', 'Tableau'],
  bio: 'Iniciando carreira em análise de dados, com foco em dashboards e visualizações.'
},
{ 
  id: 7, 
  nome: 'Joana Silva',  
  especialidade: 'UX Designer', 
  email: 'joana@senac.com',
  telefone: '(11) 93333-0007',
  cidade: 'Campinas - SP',
  anosExperiencia: 4,
  habilidades: ['Figma', 'Design Thinking', 'Prototipagem'],
  bio: 'UX Designer que ama criar experiências digitais centradas no usuário.'
},
{ 
  id: 8, 
  nome: 'Giovanna Silva', 
  especialidade: 'UX Designer', 
  email: 'giovanna@senac.com',
  telefone: '(11) 92222-0008',
  cidade: 'São Paulo - SP',
  anosExperiencia: 3,
  habilidades: ['Adobe XD', 'Wireframes', 'Pesquisa de Usuário'],
  bio: 'Designer focado em transformar ideias em interfaces práticas e intuitivas.'
},
{ 
  id: 9, 
  nome: 'Victor Silva',  
  especialidade: 'Especialista em Cloud', 
  email: 'victor@senac.com',
  telefone: '(11) 91111-0009',
  cidade: 'São Paulo - SP',
  anosExperiencia: 5,
  habilidades: ['AWS', 'Docker', 'Kubernetes'],
  bio: 'Especialista em soluções de infraestrutura em nuvem e automação de deploy.'
},
{ 
  id: 10, 
  nome: 'Carla Silva',  
  especialidade: 'Especialista em Cloud', 
  email: 'carla@senac.com',
  telefone: '(11) 90000-0010',
  cidade: 'Barueri - SP',
  anosExperiencia: 4,
  habilidades: ['Azure', 'DevOps', 'CI/CD'],
  bio: 'Engenheira de Cloud que adora otimizar ambientes para escalabilidade.'
},
{ 
  id: 11, 
  nome: 'André Silva',  
  especialidade: 'Segurança da Informação', 
  email: 'andre@senac.com',
  telefone: '(11) 98888-0011',
  cidade: 'São Paulo - SP',
  anosExperiencia: 7,
  habilidades: ['Pentest', 'Firewall', 'ISO 27001'],
  bio: 'Profissional focado em proteção de sistemas e análise de vulnerabilidades.'
},
{ 
  id: 12, 
  nome: 'Beatriz Silva',
  especialidade: 'Segurança da Informação', 
  email: 'beatriz@senac.com',
  telefone: '(11) 97777-0012',
  cidade: 'Diadema - SP',
  anosExperiencia: 5,
  habilidades: ['LGPD', 'Segurança em Nuvem'],
  bio: 'Especialista em privacidade e conformidade com regulamentos de segurança.'
},
{ 
  id: 13, 
  nome: 'Carlos Silva', 
  especialidade: 'Banco de Dados', 
  email: 'carlos@senac.com',
  telefone: '(11) 96666-0013',
  cidade: 'São Paulo - SP',
  anosExperiencia: 8,
  habilidades: ['Oracle', 'SQL Server', 'Tuning'],
  bio: 'DBA experiente em performance e alta disponibilidade de bancos de dados.'
},
{ 
  id: 14, 
  nome: 'Patrícia Silva',
  especialidade: 'Banco de Dados', 
  email: 'patricia@senac.com',
  telefone: '(11) 95555-0014',
  cidade: 'São Caetano - SP',
  anosExperiencia: 4,
  habilidades: ['PostgreSQL', 'Backup e Recuperação'],
  bio: 'Administradora de banco de dados dedicada à integridade e segurança da informação.'
},
{ 
  id: 15, 
  nome: 'Isabela Silva',
  especialidade: 'Banco de Dados', 
  email: 'isabela@senac.com',
  telefone: '(11) 94444-0015',
  cidade: 'São Paulo - SP',
  anosExperiencia: 3,
  habilidades: ['MySQL', 'MongoDB'],
  bio: 'Profissional em ascensão, com foco em bancos NoSQL e aplicações modernas.'
}

  ];

  constructor() {}


  listar(): ConsultorModel[] {
    return [...this.consultores];
  }


  buscarPorId(id: number): ConsultorModel | undefined {
    return this.consultores.find(c => c.id === id);
  }


  adicionar(consultor: ConsultorModel): void {
    consultor.id = this.consultores.length > 0
      ? Math.max(...this.consultores.map(c => c.id)) + 1
      : 1;
    this.consultores.push(consultor);
  }


  editar(consultor: ConsultorModel): void {
    const index = this.consultores.findIndex(c => c.id === consultor.id);
    if (index !== -1) {
      this.consultores[index] = consultor;
    }
  }

  remover(id: number): void {
    this.consultores = this.consultores.filter(c => c.id !== id);
  }


  listEspecialidades(): string[] {
    return Array.from(new Set(this.consultores.map(c => c.especialidade))).sort();
  }


  filterByEspecialidade(area: string): ConsultorModel[] {
    if (!area || area === 'Todos') return this.listar();
    return this.consultores.filter(c => c.especialidade === area);
  }
}
