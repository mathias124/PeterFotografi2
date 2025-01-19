import os

# Folder path containing your images
image_folder = r"C:\Users\veouser\PycharmProjects\PeterFotografi2\public\sorthvid"

# Prefix for the file paths (adjust this if needed)
prefix = "/sorthvid/"

# Generate references
image_references = []
for filename in os.listdir(image_folder):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):  # Filter for image files
        image_references.append(f"'{prefix}{filename}'")

# Format as a JavaScript array
output = f"[{', '.join(image_references)}]"

# Save to a file
with open("image_references.txt", "w") as file:
    file.write(output)

print("Image references generated and saved to image_references.txt!")
