import { IsString} from "class-validator";
import { IsNotEmpty, IsOptional, MinLength } from "class-validator/types/decorator/decorators";
import { Unique } from "typeorm";

export class CreateProductsDto {
    @IsString()
    @MinLength(5)
    @Unique(['name'])
    @IsNotEmpty()
    name: string;

    @IsString()
    @Unique(['categoria'])
    @IsNotEmpty()
    categoria: string;

    @IsString()
    @MinLength(3)
    @Unique(['pais_origen'])
    @IsNotEmpty()
    pais_origen: string;

    @IsString()
    @IsOptional()
    observacion:string;
}