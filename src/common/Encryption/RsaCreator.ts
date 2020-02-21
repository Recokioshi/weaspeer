import NodeRSA from 'node-rsa';
import pbkdf2 from 'pbkdf2';
import aesjs from 'aes-js';

export class RsaCreator {
  private privateKey!: NodeRSA;
  private keyDer!: string;

  constructor(encryptedKey?: string, passphrase?: string) {
    if (encryptedKey && passphrase) {
      const decryptedKey = this.decryptWithPassphrase(encryptedKey, passphrase);
      if (this.isKeyCorrect(decryptedKey)) {
        this.privateKey = new NodeRSA(decryptedKey);
        this.keyDer = this.privateKey.exportKey();
      } else {
        throw new Error('Wrong passphrase!');
      }
    } else {
      this.generateNewPrivate();
    }
  }

  getPrivateKey(): string {
    return this.privateKey.exportKey();
  }

  getPublicKey(): string {
    return this.privateKey.exportKey('public');
  }

  private isKeyCorrect = (key: String) => key.indexOf('-----BEGIN RSA PRIVATE KEY-----') > -1;

  private generateNewPrivate() {
    this.privateKey = new NodeRSA({ b: 512 });
    this.keyDer = this.privateKey.exportKey();
  }

  private getPassphraseHash(passphrase: string): Buffer {
    return pbkdf2.pbkdf2Sync(passphrase, 'salt', 1, 128 / 8, 'sha512');
  }

  encryptWithPassphrase(passphrase: string): String {
    const rsaKey = this.keyDer;
    const passKey = this.getPassphraseHash(passphrase);
    // An example 128-bit key (16 bytes * 8 bits/byte = 128 bits)

    var textBytes = aesjs.utils.utf8.toBytes(rsaKey);

    // The counter is optional, and if omitted will begin at 1
    var aesCtr = new aesjs.ModeOfOperation.ctr(passKey, new aesjs.Counter(5));
    var encryptedBytes = aesCtr.encrypt(textBytes);

    // To print or store the binary data, you may convert it to hex
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex;
    // "a338eda3874ed884b6199150d36f49988c90f5c47fe7792b0cf8c7f77eeffd87
    //  ea145b73e82aefcf2076f881c88879e4e25b1d7b24ba2788"
  }

  private decryptWithPassphrase = (rsaKey: string, passphrase: string) => {
    const passKey = this.getPassphraseHash(passphrase);
    var encryptedBytes = aesjs.utils.hex.toBytes(rsaKey);

    // The counter mode of operation maintains internal state, so to
    // decrypt a new instance must be instantiated.
    var aesCtr = new aesjs.ModeOfOperation.ctr(passKey, new aesjs.Counter(5));
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);

    // Convert our bytes back into text
    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return decryptedText;
  };
}
