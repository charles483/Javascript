import os

# Specify the directory where you want to create the folders
parent_dir = r"C:\Users\c4708\Desktop\Learning\Javascript"  # Change this to your desired path

# Create folders named Chapter 1 to Chapter 19
for i in range(1, 20):  # 1 to 19
    folder_name = f"Chapter {i}"
    folder_path = os.path.join(parent_dir, folder_name)
    
    # Create the folder
    os.makedirs(folder_path, exist_ok=True)
    print(f"Folder created: {folder_name}")