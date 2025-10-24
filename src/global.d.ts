
interface Country {
  flags: Flags
  name: Name
  cca3: string
  capital: string[]
  region: string
  population: number
}

interface Flags {
  png: string
  svg: string
  alt: string
}

interface Name {
  common: string
  official: string
  nativeName: NativeName
}

interface NativeName {
  lit: Lit
}

interface Lit {
  official: string
  common: string
}
