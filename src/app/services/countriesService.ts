import { countriesApi } from "@apis/api";

export const countriesService = {
  async getAllCountries(): Promise<Country[]> {
    const response = await countriesApi.get<Country[]>('/all?fields=name');
    return response.data;
  },

  async searchByName(name: string): Promise<Country[]> {
    const response = await countriesApi.get<Country[]>(`/name/${name}`);
    return response.data;
  },

  async filterByRegion(region: string): Promise<Country[]> {
    const response = await countriesApi.get<Country[]>(`/region/${region}`);
    return response.data;
  },

  async getCountryByCode(code: string): Promise<Country> {
    const response = await countriesApi.get<Country[]>(`/alpha/${code}`);
    return response.data[0];
  },

  async getCountriesByCodes(codes: string[]): Promise<Country[]> {
    const promises = codes.map(code => this.getCountryByCode(code));
    return Promise.all(promises);
  },
};
