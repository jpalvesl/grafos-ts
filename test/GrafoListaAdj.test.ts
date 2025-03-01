import { describe, expect, jest, test } from '@jest/globals'
import GrafoListaAdj from '../src/impl/GrafoListaAdj';

let grafo;

beforeEach(() => {
  grafo = new GrafoListaAdj();
})

describe('Testa a criação de um grafo que utiliza lista de adjacencia', () => {
  test('Criando um grafo com o construtor vazio', () => {
    const grafoListaAdj = new GrafoListaAdj();
    
    expect(grafoListaAdj).toHaveProperty('vertices', []);
    expect(grafoListaAdj).toHaveProperty('arestas', new Set<string>());
  });

  test('Criando com um grafo com o construtor preenchido com valores indevidos', () => {
    const grafoListaAdj = new GrafoListaAdj(undefined, undefined);

    expect(grafoListaAdj).toHaveProperty('vertices', []);
    expect(grafoListaAdj).toHaveProperty('arestas', new Set<string>());
  });

  test('Cria grafo com arrays vazios', () => {

  });

  test('Cria grafos com arrays populados', () => {

  });
});

describe('Adiciona vertices', () => {
  // TODO: CRIA GRAFO
  
  test('Adiciona vertices validos', () => {

  })

  test('Adiciona vertices invalidos', () => {
    
  })
})

describe('Adiciona arestas', () => {
  // TODO: CRIA GRAFO
  
  test('Adiciona aresta valida', () => {

  })

  test('Adiciona arestas invalidas', () => {
    
  })
})