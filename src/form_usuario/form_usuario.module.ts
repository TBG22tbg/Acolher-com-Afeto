import { Module } from '@nestjs/common';
import { FormUsuarioController } from './form_usuario.controller';
import { FormUsuarioService } from './form_usuario.service';

@Module({
  controllers: [FormUsuarioController],
  providers: [FormUsuarioService]
})
export class FormUsuarioModule {}
