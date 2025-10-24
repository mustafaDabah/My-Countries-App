import { countriesApi } from "@apis/api";

// Minimal fields for country cards
const COUNTRY_CARD_FIELDS = [
  'name',
  'population',
  'region',
  'capital',
  'flags',
  'cca3'
].join(',');

// Extended fields for country detail pages
const COUNTRY_DETAIL_FIELDS = [
  'name',
  'population',
  'region',
  'subregion',
  'capital',
  'flags',
  'cca3',
  'currencies',
  'languages',
  'tld',
  'borders'
].join(',');

export const countriesService = {
  async getAllCountries(): Promise<Countries[]> {
    const response = await countriesApi.get<Countries[]>(`/all?fields=${COUNTRY_CARD_FIELDS}`);
    return response.data;
  },

  async searchByName(name: string): Promise<Countries[]> {
    const response = await countriesApi.get<Countries[]>(
      `/name/${name}?fields=${COUNTRY_CARD_FIELDS}`
    );
    return response.data;
  },

  async filterByRegion(region: string): Promise<Countries[]> {
    const response = await countriesApi.get<Countries[]>(
      `/region/${region}?fields=${COUNTRY_CARD_FIELDS}`
    );
    return response.data;
  },

  async getCountryByCode(code: string): Promise<Country> {
    const response = await countriesApi.get<Country>(
      `/alpha/${code}?fields=${COUNTRY_DETAIL_FIELDS}`
    );

    return response.data;
  },

  async getCountriesByCodes(codes: string[]): Promise<Country[]> {
    if (codes.length === 0) return [];

    const promises = codes.map(code => this.getCountryByCode(code));
    return Promise.all(promises);
  },
};