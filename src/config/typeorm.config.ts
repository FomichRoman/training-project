import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";

export const getTypeOrmConfig = async (configServise:ConfigService):Promise<TypeOrmModuleOptions> => ({
  type: 'postgres',
  host: 'localhost',
  port: configServise.get('DATABASE_PORT'),
  database: configServise.get('DATABASE_NAME'),
  username: configServise.get('DATABASE_USER'),
  password: configServise.get('DATABASE_PASSWORD'),
  autoLoadEntities: true,
  synchronize: true
})