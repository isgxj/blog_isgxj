import { TypeOrmModule } from '@nestjs/typeorm';

export default TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'blog_isgxj',
  username: 'blog_isgxj',
  password: 'Mm.29673db6c',
  charset: 'utf8mb4',
  entities: [
  ],
  synchronize: true,
  autoLoadEntities: true,
})