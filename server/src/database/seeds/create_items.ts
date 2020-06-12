
import * as Knex from 'knex'; 

export async function seed(knex: Knex){

        await knex('items').insert([

            {title:'Lâmpadas', image:'lampadas.svg'},
            {title:'Pilhas e Baterias', image:'baterias.svg'},
            {title:'Papeis e Papelão', image:'papeis-palelao.svg'},
            {title:'Resíduos Eletronicos', image:'eletronicos.svg'},
            {title:'Resíduos Organicos', image:'organicos.svg'},
            {title:'Óleo de Cozinha', image:'oleo.svg'}

        ]);
}