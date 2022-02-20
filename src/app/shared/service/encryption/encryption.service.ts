import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  key = '123456';
  constructor() { }

  encrypt(data) {
    const b64 = CryptoJS.AES.encrypt(JSON.stringify(data), this.key).toString();
    const e64 = CryptoJS.enc.Base64.parse(b64);
    const eHex = e64.toString(CryptoJS.enc.Hex);
    return eHex;
  }

  decrypt(data) {
    const reb64 = CryptoJS.enc.Hex.parse(data);
    const bytes = reb64.toString(CryptoJS.enc.Base64);
    const decrypt = CryptoJS.AES.decrypt(bytes, this.key);
    const plain = JSON.parse(decrypt.toString(CryptoJS.enc.Utf8));
    return plain;
  }
}
