
interface Country {
  name: Name
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
