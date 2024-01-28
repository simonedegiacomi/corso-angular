import { Injectable, isDevMode } from '@angular/core';
import { client } from './http-client';

@Injectable({
  providedIn: 'root',
})
export class DynamicConfigService {
  public baseUrl!: string;

  async load(): Promise<any> {
    try {
      const configFile = isDevMode()
        ? '/dynamic-config.json'
        : '../dynamic-config.json';
      const result = await client.get(configFile);

      Object.assign(this, result.data);
      client.defaults.baseURL = this.baseUrl;

      return result.data;
    } catch (e) {
      alert('Errore durante il caricamento del file do configurazione');
      throw e;
    }
  }
}
