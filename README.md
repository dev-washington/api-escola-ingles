# ORM-SEQUELIZE COM MYSQL

<div align="center">
  <img src="https://user-images.githubusercontent.com/75760299/155032412-6b9c3a3a-14e7-45fe-b8ee-28186a6a8ca8.png"/>
</div> 

##

### Banco de Dados

- [x] **Table Pessoa**
|column      |datatype    |         
|   :---:    |   :---:    |                  
|ID          |int         |         
|nome        |string      |         
|ativo       |bool        |         
|email       |string      |         
|role        |string      |         

- [x] **Table Matricula**
|column      |datatype    |
|    :---:   |    :---:   |
|ID          |int         |
|status      |string      |
|estudante_id|int         |
|turma_id    |int         |

- [x] **Table Turma**         
|column      |datatype    |
|   :---:    |   :---:    |                  
|ID          |int         |         
|docent_id   |int         |         
|data_inicio |dateonly    |         
|nivel_id    |int         |         

- [x] **Table Nivel**
|column      |datatype    |
|    :---:   |    :---:   |
|ID          |int         |
|descr_nivel |string      |

## 

```bash
# Para subir as bibliotecas intaladas
npm update

# Para inciar a aplicação
npm start
```