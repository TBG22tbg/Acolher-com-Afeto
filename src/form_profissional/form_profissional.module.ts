import { Module } from '@nestjs/common';
import { FormProfissionalController } from './form_profissional.controller';
import { FormProfissionalService } from './form_profissional.service';

@Module({
  controllers: [FormProfissionalController],
  providers: [FormProfissionalService]
})
export class FormProfissionalModule {}
