import { IsString, IsNumber } from "class-validator";
import { IsNotEmpty, IsOptional, MinLength } from "class-validator/types/decorator/decorators";
import { Unique } from "typeorm";

export class CreateProductsDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    @Unique(['nombre'])
    nombre: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    descripcion: string;

    @IsNumber()
    @IsNotEmpty()
    @MinLength(15)
    precio: number;

    @IsNumber()
    @IsNotEmpty()
    stock: number;
}