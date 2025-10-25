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
    try {
      const response = await countriesApi.get<Country[]>(
        `/name/${encodeURIComponent(name)}?fields=${COUNTRY_CARD_FIELDS}`
      );
      return response.data.map(country => ({
        ...country,
        capital: country.capital || []
      }));
    } catch (error: any) {
      const status = error?.response?.status;

      if (status === 404 || status === 400 || status === 300) {
        return [];
      }

      if (error?.message?.includes('Network Error') || error?.code === 'ERR_BAD_REQUEST') {
        return [];
      }

      // Re-throw genuine server errors (500+)
      throw error;
    }
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