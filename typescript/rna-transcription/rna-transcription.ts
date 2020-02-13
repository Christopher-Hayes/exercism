export default class Transcriptor {
    toRna(dna: string): string {
      // Catch invalid characters
      if (dna.match(/[^GCAT]/)) {
        throw 'Invalid input DNA.'
      }
      return (dna as any).replace(/[GCTA]/g, (m: string) => {
        switch (m) {
          case 'G': return 'C';
          case 'C': return 'G';
          case 'T': return 'A';
          case 'A': return 'U';
        }
      });
    }
}
