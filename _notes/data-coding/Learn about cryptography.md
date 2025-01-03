---
title: Learn about cryptography
lang: en
category: data-coding
tags: [learn]
season: summer
created: 2022-08-22
updated: 2025-01-03
sources: https://missing.csail.mit.edu/2020/security/
---

## Entropy
- [Entropy](https://en.wikipedia.org/wiki/Entropy_(information_theory)) is a measure of randomness

![](https://imgs.xkcd.com/comics/password_strength.png)

## Hashing functions
- A cryptographic hash function maps data of arbitrary size to a fixed size
- An example of a hash function is [SHA-1](https://en.wikipedia.org/wiki/SHA-1), which is used in Git references
- At a high level, a hash function can be thought of as a hard-to-invert random-looking (but deterministic) function.
- A hash function has the following properties:
	- *Deterministic*: the same input always generates the same output.
	- *Non-invertible*: it is hard to find an input `m` such that `hash(m) = h` for some desired output `h`.
	- *Target collision resistant*: given an input `m_1`, it’s hard to find a different input `m_2` such that `hash(m_1) = hash(m_2)`.
	- *Collision resistant*: it’s hard to find two inputs `m_1` and `m_2` such that `hash(m_1) = hash(m_2)` (note that this is a strictly stronger property than target collision resistance).
- There is also [[Use MD5 function to create unique IDs|MD5]]

## Key derivation functions (KDFs)
- [Key derivation functions](https://en.wikipedia.org/wiki/Key_derivation_function) are used for a number of applications, including producing fixed-length output for use as keys in other cryptographic algorithms. Usually, KDFs are deliberately slow, in order to slow down offline brute-force attacks.

## Symmetric and asymmetric cryptography
- Symmetric and asymmetric encryption can be compared to physical locks:
	- Symmetric cryptosystem is like a door lock: anyone with the key can lock and unlock it.
	- Asymmetric encryption is like a padlock with a key. You could give the unlocked lock to someone (the public key), they could put a message in a box and then put the lock on, and after that, only you could open the lock because you kept the key (the private key).

### Symmetric cryptography
- Hiding message contents with one key
- Typically: generate `key = KDF(passphrase)`, and then store `encrypt(file, key)`
- Use case: files for storage in an untrusted cloud service, password managers, full disk encryption

### Asymmetric cryptography
- The term “asymmetric” refers to there being two keys, with two different roles:
	- Private key, as its name implies, is meant to be kept private
	- Public key can be publicly shared and it won’t affect security (unlike sharing the key in a symmetric cryptosystem)
- Use case: private messaging, signing software

## Case Study: SSH
When you run `ssh-keygen`, it generates an asymmetric keypair, `public_key, private_key`. This is generated randomly, using entropy provided by the operating system (collected from hardware events, etc.). The public key is stored as-is (it’s public, so keeping it a secret is not important), but at rest, the private key should be encrypted on disk. The `ssh-keygen` program prompts the user for a passphrase, and this is fed through a KDF to produce a key, which is then used to encrypt the private key with a symmetric cipher.

In use, once the server knows the client’s public key (stored in the `.ssh/authorized_keys` file), a connecting client can prove its identity using asymmetric signatures. This is done through [challenge-response](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). At a high level, the server picks a random number and sends it to the client. The client then signs this message and sends the signature back to the server, which checks the signature against the public key on record. This effectively proves that the client is in possession of the private key corresponding to the public key that’s in the server’s `.ssh/authorized_keys` file, so the server can allow the client to log in.
