interface Grafo {

  verticeValido(vertice: string): boolean;
  arestaValida(aresta: string): boolean;
  
  existeVertice(vertice: string): boolean;
  existeAresta(aresta: string): boolean;

  adicionaVertice(aresta: string): void;
  adicionaAresta(vertice: string): void;

  toString(): void;
}

export default Grafo;