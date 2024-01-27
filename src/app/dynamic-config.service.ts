import { Injectable } from '@angular/core';
import { client } from './http-client';

@Injectable({
  providedIn: 'root',
})
export class DynamicConfigService {
  public baseUrl!: string;

  async load(): Promise<any> {
    try {
      const result = await client.get('/dynamic-config.json');

      Object.assign(this, result.data);

      return result.data;
    } catch (e) {
      alert('Errore durante il caricamento del file do configurazione');
      throw e;
    }
  }
}
