import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { FormProfissionalModule } from './form_profissional/form_profissional.module';
import { FormUsuarioModule } from './form_usuario/form_usuario.module';

@Module({
  imports: [DatabaseModule, FormProfissionalModule, FormUsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
