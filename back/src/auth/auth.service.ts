import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../routes/usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usuariosService: UsuariosService) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usuariosService.findOneByEmail(email);
    if (!user || !(await bcrypt.compare(pass, user.senha))) {
      throw new UnauthorizedException();
    }
    const { senha, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}