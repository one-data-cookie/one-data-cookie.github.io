#!/usr/bin/env python3
"""
Generate embeddings for ChatMK content using sentence-transformers
"""
import json
import sys
import os

def generate_embeddings(input_file, output_file):
    try:
        from sentence_transformers import SentenceTransformer
    except ImportError:
        print("Error: sentence-transformers not installed. Install with: pip install sentence-transformers")
        sys.exit(1)
    
    try:
        # Load the content data
        with open(input_file, 'r') as f:
            data = json.load(f)
        
        # Initialize the embedding model (lightweight and good for semantic search)
        print("Loading embedding model...")
        model = SentenceTransformer('all-MiniLM-L6-v2')
        
        # Generate embeddings for pages
        print(f"Generating embeddings for {len(data['pages'])} pages...")
        for page in data['pages']:
            # Combine title and excerpt for better embedding
            text = f"{page['title']}. {page['excerpt']}"
            embedding = model.encode(text).tolist()
            page['embedding'] = embedding
        
        # Generate embeddings for notes
        print(f"Generating embeddings for {len(data['notes'])} notes...")
        for note in data['notes']:
            # Combine title and excerpt for better embedding
            text = f"{note['title']}. {note['excerpt']}"
            embedding = model.encode(text).tolist()
            note['embedding'] = embedding
        
        # Save the enhanced data
        with open(output_file, 'w') as f:
            json.dump(data, f, separators=(',', ':'))
        
        print(f"Generated embeddings for {len(data['pages'])} pages and {len(data['notes'])} notes")
        
    except Exception as e:
        print(f"Error generating embeddings: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python generate_embeddings.py <input_file> <output_file>")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    if not os.path.exists(input_file):
        print(f"Error: Input file '{input_file}' not found")
        sys.exit(1)
    
    generate_embeddings(input_file, output_file)
