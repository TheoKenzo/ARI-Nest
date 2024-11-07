import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../routes/usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usuariosService.findOneByEmail(email);
    if (!user || !(await bcrypt.compare(pass, user.senha))) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.nome };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
