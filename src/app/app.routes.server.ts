import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'login', renderMode: RenderMode.Prerender },
  { path: 'consultores', renderMode: RenderMode.Client }, // login controla
  { path: 'consultores/novo', renderMode: RenderMode.Client },
  { path: 'consultores/editar/:id', renderMode: RenderMode.Client },
  { path: 'consultor/:id', renderMode: RenderMode.Client },
  { path: 'sobre', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Prerender }
];
