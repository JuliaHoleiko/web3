if __name__ == '__main__':
    
    if not os.path.exists(data_path):
        update_data()
    else:
        read_data()
    app.run(debug=True)