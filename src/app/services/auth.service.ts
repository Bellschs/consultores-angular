import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { email: 'admin@empresa.com', senha: 'admin123', perfil: 'admin' },
    { email: 'user@empresa.com', senha: 'user123', perfil: 'user' }
  ];

  private currentUser: any = null;

  constructor(private router: Router) {}

  login(email: string, senha: string): boolean {
    const user = this.users.find(u => u.email === email && u.senha === senha);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  getUserRole(): string {
    return this.currentUser?.perfil || '';
  }
}
