import Grafo from "../interface/Grafo";

class GrafoListaAdj implements Grafo {
  vertices = [] as string[];
  arestas = new Set<string>;
  
  constructor(vertices: string[], arestas: Set<string>) {
    this.vertices = vertices;
    this.arestas = arestas;
  }

  verticeValido(vertice: string): boolean {
    const duplicatedSeparatorRE = /(-).*(\1)/
    
    return vertice !== '' && duplicatedSeparatorRE.test(vertice)
  }

  arestaValida(aresta: string): boolean {
    throw new Error("Method not implemented.");
  }

  existeVertice(vertice: string): boolean {
    throw new Error("Method not implemented.");
  }

  existeAresta(aresta: string): boolean {
    throw new Error("Method not implemented.");
  }

  adicionaVertice(aresta: string): void {
    throw new Error("Method not implemented.");
  }

  adicionaAresta(vertice: string): void {
    throw new Error("Method not implemented.");
  }

  toString(): void {
    throw new Error("Method not implemented.");
  }


}

export default GrafoListaAdj;