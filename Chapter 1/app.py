import msoffcrypto
from itertools import product
import string

# Function to try all possible password combinations
def brute_force_decrypt(file_path, password_length):
    characters = string.ascii_lowercase + string.ascii_uppercase + string.digits+ "@!#$%^&*()-_=+" # Add special characters as needed
    attempts = 0
    
    with open(file_path, 'rb') as file:
        doc = msoffcrypto.OfficeFile(file)

        # Try combinations of all passwords
        for password_tuple in product(characters, repeat=password_length):
            password = ''.join(password_tuple)
            try:
                doc.load_key(password=password)
                decrypted_file = file_path.replace('.docx', '_decrypted.docx') if file_path.endswith('.docx') else file_path + '_decrypted'
                with open(decrypted_file, 'wb') as output:
                    doc.decrypt(output)
                print(f"Password found: {password}")
                return decrypted_file
            except msoffcrypto.exceptions.InvalidKeyError:
                attempts += 1
                if attempts % 1000 == 0:
                    print(f"Attempted {attempts} passwords...")
    
    return None

# Set password length and path to encrypted document
encrypted_file = r"C:\Users\c4708\Downloads\document.docx"
password_length = 8 # Adjust based on expected password length

# Run brute force attack
result = brute_force_decrypt(encrypted_file, password_length)

if result:
    print(f"File decrypted successfully: {result}")
else:
    print("Password not found.")
