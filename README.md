# cipher-collection
<h1>JavaScript collection of ciphers </h1>
<h3>Caesar Cipher</h3>



<h5>Introduction </h5>

<p>
The Caesar cipher is one of the earliest known and simplest ciphers. It is a type of substitution cipher in which each letter in the plaintext is 'shifted' a certain number of places down the alphabet. For example, with a shift of 1, A would be replaced by B, B would become C, and so on. The method is named after Julius Caesar, who apparently used it to communicate with his generals. </p>



<h5> Mathematical Description <h5>

<p>First we translate all of our characters to numbers, 'a'=0, 'b'=1, 'c'=2, ... , 'z'=25. We can now represent the caesar cipher encryption function, e(x), where x is the character we are encrypting, as:</p>

<h4> e(x) = (x + k) mod 26 </h4>


Where k is the key (the shift) applied to each letter. After applying this function the result is a number which must then be translated back into a letter. The decryption function is :

<h4> e(x) = (x - k) mod 26 </h4>

    References
    
    http://practicalcryptography.com/ciphers/caesar-cipher/
          
    Wikipedia has a good description of the encryption/decryption process, history and cryptanalysis of this algorithm
    Simon Singh's 'The Code Book' is an excellent introduction to ciphers and codes, and includes a section on caesar ciphers.
    Singh, Simon (2000). The Code Book: The Science of Secrecy from Ancient Egypt to Quantum Cryptography. ISBN 0-385-49532-3.











<h3>Vigenre Cipher</h3>


<h5>Introduction </h5>

<p>The Vigenère Cipher is a polyalphabetic substitution cipher. The method was originally described by Giovan Battista Bellaso in his 1553 book La cifra del. Sig. Giovan Battista Bellaso; however, the scheme was later misattributed to Blaise de Vigenère in the 19th century, and is now widely known as the Vigenère cipher.

Blaise de Vigenère actually invented the stronger Autokey cipher in 1586.

The Vigenère Cipher was considered le chiffre ind hiffrable (French for the unbreakable cipher) for 300 years, until in 1863 Friedrich Kasiski published a successful attack on the Vigenère cipher. Charles Babbage had, however, already developed the same test in 1854. Gilbert Vernam worked on the vigenere cipher in the early 1900s, and his work eventually led to the one-time pad, which is a provably unbreakable cipher.</p>



<h5> Variants </h5>

<p>There are several ciphers that are very similar to the vigenere cipher.

The Gronsfeld cipher is exactly the same as the vigenere cipher, except numbers are used as the key instead of letters. There is no other difference. The numbers may be picked from a sequence, e.g. the Fibonacci series, or some other pseudo-random sequence.

The gronsfeld cipher is cryptanalysed in the same way as the vigenere algorithm, however the autokey cipher will not be broken using the kasiski method since the key does not repeat. The best way to break the autokey cipher is to try and guess portions of the plaintext or key from the ciphertext, knowing they must both follow the frequency distribution of english text. Guessing how the plaintext begins is the easiest way of cracking the cipher.</p>



     References 
                
      http://practicalcryptography.com/ciphers/caesar-cipher/
                
     [1] Wikipedia has a good description of the encryption/decryption process, history and cryptanalysis of this algorithm
     [2] Kahn, D (1973) The CodeBreakers. Macmillan: New York
     [3] http://www.trincoll.edu/depts/cpsc/cryptography/vigenere.html has a good description of the algorithm along with cryptanalysis.
      Simon Singh's 'The Code Book' is an excellent introduction to ciphers and codes, and includes a section on ADFGVX ciphers.
     Singh, Simon (2000). The Code Book: The Science of Secrecy from Ancient Egypt to Quantum Cryptography. ISBN 0-385-49532-3.
