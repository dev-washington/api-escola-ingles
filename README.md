# ORM-SEQUELIZE COM MYSQL

<div align="center">
  <img src="https://user-images.githubusercontent.com/75760299/155032412-6b9c3a3a-14e7-45fe-b8ee-28186a6a8ca8.png"/>
</div> 

### Banco de Dados

|Table Pessoa             |         |Table Matricula          |
|   :---:    |   :---:    |         |    :---:   |    :---:   |
|column      |datatype    |         |column      |datatype    |
|ID          |int         |         |ID          |int         |
|nome        |string      |         |status      |string      |
|ativo       |bool        |         |estudante_id|int         |
|email       |string      |         |turma_id    |int         |
|role        |string      |         

|Table Turma              |         |Table Nivel              |
|   :---:    |   :---:    |         |    :---:   |    :---:   |
|column      |datatype    |         |column      |datatype    |
|ID          |int         |         |ID          |int         |
|docent_id   |int         |         |descr_nivel |string      |
|data_inicio |dateonly    |         
|nivel_id    |int         |         
 
```bash
# Para subir as bibliotecas intaladas
npm update

# Para inciar a aplicação
npm start
```






 