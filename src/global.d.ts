
interface Countries {
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

interface Country {
  flags: Flags;
  name: Name;
  tld?: string[];
  cca3: string;
  currencies?: Record<string, Currency>;
  capital?: string[];
  region: string;
  subregion?: string;
  languages?: Record<string, string>;
  borders?: string[];
  population: number;
}

interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

interface Name {
  common: string;
  official: string;
  nativeName?: Record<string, NativeLanguage>;
}

interface NativeLanguage {
  official: string;
  common: string;
}

interface Currency {
  name: string;
  symbol?: string;
}