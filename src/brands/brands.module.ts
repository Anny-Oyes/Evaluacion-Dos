import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm"
import { Brands } from "./entities/brands.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Brands])],
    controllers: [],
    providers: [],
})
export class BrandsModules {}