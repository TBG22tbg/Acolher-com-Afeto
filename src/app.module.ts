import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { FormularioUsuarioModule } from './formulario_usuario/formulario_usuario.module';
import { FormProfissionalModule } from './form_profissional/form_profissional.module';
import { FormUsuarioModule } from './form_usuario/form_usuario.module';

@Module({
  imports: [DatabaseModule, FormularioUsuarioModule, FormProfissionalModule, FormUsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
