import os
import pandas as pd
import pickle
from flask import Flask, request, jsonify

app = Flask(__name__)

# Load the pre-trained model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        # Check if a file is part of the request
        if 'file' not in request.files:
            return jsonify({'error': 'No file provided'}), 400
        
        file = request.files['file']
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)

        # Read the CSV file
        df = pd.read_csv(file_path)

        # Get the row index from the request
        row_index = request.form.get('row_index')
        if row_index is None:
            return jsonify({'error': 'No row index provided'}), 400
        
        row_index = int(row_index)

        # Validate the row index
        if row_index < 0 or row_index >= len(df):
            return jsonify({'error': f'Invalid row index: {row_index}. It should be between 0 and {len(df) - 1}.'}), 400

        # Extract the row for prediction
        row_data = df.iloc[row_index].values.reshape(1, -1)

        # Log the row data for debugging
        print(f"Row data for prediction: {row_data}")

        # Make a prediction
        prediction = model.predict(row_data)

        # Log the prediction result for debugging
        print(f"Prediction result: {prediction}")

        # Interpret the result
        result = 'Pure Milk' if prediction[0] == 0 else 'Adulterated Milk'

        return jsonify({'result': result})

    except Exception as e:
        # Log any exception that occurs
        print(f"Error: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
