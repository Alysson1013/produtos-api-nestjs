import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController {

    @Get()
    obterTodos(): string {
        return 'Lista todos os produtos';
    }

    @Get(':id')
    obterUm(@Param() params): string {
        return `Retorna os dados de um produto ${params.id}`; 
    }

    @Post()
    criar(@Body() produto): string {
        return 'Produto criado';
    }

    @Put()
    alterar(@Body() produto): string {
        return 'Produto atualizado';
    }

    @Delete(":id")
    apagar(@Param() params): string {
        return `Produto apagado ${params.id}`;
    }
}