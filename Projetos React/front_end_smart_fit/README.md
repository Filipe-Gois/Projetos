# Criação de página front-end e consumo de api da smart-fit


[`Link do repositório contendo as informações do projeto`](https://github.com/bioritmo/front-end-code-challenge-smartsite)



### Funcionalidades
- Carrega unidades através do arquivo json `https://test-frontend-developer.s3.amazonaws.com/data/locations.json` com method `GET`
- Busca todas as unidades
- Busca unidades com filtros
- Mostra previsão de resultados encontrados
- Mostra unidades ao buscar

### Regras de negócio
- Filtrar unidades abertas ou fechadas
- Filtrar unidades por período de funcionamento
- Caso não encontre unidades, mostrar uma menssagem ao usuário "Nenhuma unidade encontrada"
- Validar para mostrar ícones corretos de acordo com o status

### Componentes Macro
- Formulário de busca com filtros
- Legenda
- Lista de unidades