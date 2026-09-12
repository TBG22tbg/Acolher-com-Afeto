import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { FormUsuarioModule } from './form_usuario/form_usuario.module';


@Module({

    imports: [
        // Carrega as variáveis do arquivo .env
        // e disponibiliza o ConfigService globalmente
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        DatabaseModule,
        FormUsuarioModule,
    ],
    controllers: [],
    providers: [],

})
export class AppModule {}