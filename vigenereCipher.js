function vigenereCipher(text, key, encrypt = true) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const adjustCase = (c) => (encrypt ? c.toUpperCase() : c.toLowerCase());
  let encryptedText = '';
  
  for (let i = 0, j = 0; i < text.length; i++) {
    const char = text[i];
    const keyChar = key[j % key.length].toUpperCase();
    
    if (alphabet.includes(char.toUpperCase())) {
      const shift = alphabet.indexOf(keyChar);
      const position = alphabet.indexOf(char.toUpperCase());
      
      if (encrypt) {
        encryptedText += adjustCase(alphabet[(position + shift) % alphabet.length]);
      } else {
        encryptedText += adjustCase(alphabet[(position - shift + alphabet.length) % alphabet.length]);
      }
      
      j++;
    } else {
      encryptedText += char;
    }
  }
  
  return encryptedText;
}

// Example usage:
const text = 'HELLO WORLD';
const key = 'VIGENERE';
const encrypted = vigenereCipher(text, key); // Encrypt
const decrypted = vigenereCipher(encrypted, key, false); // Decrypt

console.log(encrypted); // Encrypted text
console.log(decrypted); // Decrypted text (should be 'HELLO WORLD')
