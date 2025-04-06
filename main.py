import streamlit as st
import pandas as pd
from io import StringIO

st.title("Taekwondo App")
st.write("Dispatch fighter")

uploaded_file = st.file_uploader("Choose a file", type=["xlsx", "xls", "csv"])

if uploaded_file is not None:
    
    try:
        if uploaded_file.name.endswith('.csv'):
            dataframe = pd.read_csv(uploaded_file)
            
            stringio = StringIO(uploaded_file.getvalue().decode("utf-8"))
            string_data = stringio.read()
            st.write("First 100 characters:", string_data[:100])
            
        elif uploaded_file.name.endswith(('.xlsx', '.xls')):
            dataframe = pd.read_excel(uploaded_file)
            
        required_columns = {'name', 'age', 'weight', 'sex'}
        if not required_columns.issubset(dataframe.columns):
            missing = required_columns - set(dataframe.columns)
            st.error(f"Missing required columns: {', '.join(missing)}")
            st.stop()

        st.write("Data Preview:")
        st.dataframe(dataframe.head())

        if st.button("Categorize Fighters"):
            results = []
            
            for _, row in dataframe.iterrows():
                name = row['name']
                age = row['age']
                weight = row['weight']
                sex = row['sex'].lower()
                
                # Initialize categories
                tech_category = ""
                combat_category = ""
                
                # Determine technical category
                if 3 <= age <= 5:
                    tech_category = "BABIES"
                elif age == 6:
                    tech_category = "PUPILLES"
                elif age == 7:
                    tech_category = "PUPILLES"
                elif age == 8:
                    tech_category = "BENJAMINS"
                elif age == 9:
                    tech_category = "BENJAMINS"
                elif 10 <= age <= 11:
                    tech_category = "MINIMES"
                elif 12 <= age <= 14:
                    tech_category = "CADETS"
                elif 15 <= age <= 17:
                    tech_category = "JUNIORS"
                elif 18 <= age <= 29:
                    tech_category = "Moins de 30 ans"
                elif age >= 30:
                    tech_category = "+31 ans"
                
                # Determine combat category
                if 3 <= age <= 5:
                    combat_category = "BABIES"
                elif age == 6:
                    combat_category = "PUPILLES 1"
                elif age == 7:
                    combat_category = "PUPILLES 2"
                elif age == 8:
                    combat_category = "BENJAMINS 1"
                elif age == 9:
                    combat_category = "BENJAMINS 2"
                elif age == 10:
                    combat_category = "MINIMES"
                elif 11 <= age <= 14:
                    combat_category = "CADETS"
                elif 15 <= age <= 17:
                    combat_category = "JUNIORS"
                elif age >= 18:
                    combat_category = "SENIORS"
                
                # Determine weight category
                weight_category = ""
                
                if tech_category in ["BABIES", "PUPILLES", "BENJAMINS"]:
                    if sex == "male":
                        if weight <= 21: weight_category = "-21kg"
                        elif weight <= 24: weight_category = "21-24kg"
                        elif weight <= 27: weight_category = "27-30kg"
                        elif weight <= 30: weight_category = "27-30kg"
                        elif weight <= 33: weight_category = "33-37kg"
                        elif weight <= 37: weight_category = "33-37kg"
                        elif weight <= 41: weight_category = "41-45kg"
                        elif weight <= 45: weight_category = "41-45kg"
                        elif weight <= 49: weight_category = "49-48kg"
                        else: weight_category = "+49kg"
                    else:  # female
                        if weight <= 17: weight_category = "-17kg"
                        elif weight <= 20: weight_category = "17-20kg"
                        elif weight <= 23: weight_category = "23-26kg"
                        elif weight <= 26: weight_category = "23-26kg"
                        elif weight <= 29: weight_category = "29-38kg"
                        elif weight <= 38: weight_category = "29-38kg"
                        elif weight <= 41: weight_category = "41-44kg"
                        elif weight <= 44: weight_category = "41-44kg"
                        elif weight <= 46: weight_category = "46-44kg"
                        else: weight_category = "+46kg"
                
                elif tech_category == "MINIMES":
                    if sex == "male":
                        if weight <= 27: weight_category = "-27kg"
                        elif weight <= 30: weight_category = "27-30kg"
                        elif weight <= 33: weight_category = "33-37kg"
                        elif weight <= 37: weight_category = "33-37kg"
                        elif weight <= 41: weight_category = "41-45kg"
                        elif weight <= 45: weight_category = "41-45kg"
                        elif weight <= 49: weight_category = "49-38kg"
                        elif weight <= 51: weight_category = "51-57kg"
                        else: weight_category = "+57kg"
                    else:  # female
                        if weight <= 23: weight_category = "-23kg"
                        elif weight <= 26: weight_category = "23-26kg"
                        elif weight <= 29: weight_category = "29-38kg"
                        elif weight <= 38: weight_category = "29-38kg"
                        elif weight <= 41: weight_category = "41-44kg"
                        elif weight <= 44: weight_category = "41-44kg"
                        elif weight <= 46: weight_category = "46-44kg"
                        elif weight <= 51: weight_category = "51-57kg"
                        else: weight_category = "+57kg"
                
                elif tech_category == "CADETS":
                    if sex == "male":
                        if weight <= 33: weight_category = "-33kg"
                        elif weight <= 37: weight_category = "33-37kg"
                        elif weight <= 41: weight_category = "41-45kg"
                        elif weight <= 45: weight_category = "41-45kg"
                        elif weight <= 49: weight_category = "49-38kg"
                        elif weight <= 51: weight_category = "51-57kg"
                        else: weight_category = "+57kg"
                    else:  # female
                        if weight <= 29: weight_category = "-29kg"
                        elif weight <= 38: weight_category = "29-38kg"
                        elif weight <= 41: weight_category = "41-44kg"
                        elif weight <= 44: weight_category = "41-44kg"
                        elif weight <= 46: weight_category = "46-44kg"
                        elif weight <= 51: weight_category = "51-57kg"
                        else: weight_category = "+57kg"
                
                elif tech_category == "JUNIORS":
                    if sex == "male":
                        if weight <= 45: weight_category = "-45kg"
                        elif weight <= 48: weight_category = "45-48kg"
                        elif weight <= 51: weight_category = "51-55kg"
                        elif weight <= 55: weight_category = "51-55kg"
                        elif weight <= 59: weight_category = "59-63kg"
                        elif weight <= 63: weight_category = "59-63kg"
                        elif weight <= 68: weight_category = "68-73kg"
                        elif weight <= 73: weight_category = "68-73kg"
                        elif weight <= 78: weight_category = "78-78kg"
                        else: weight_category = "+78kg"
                    else:  # female
                        if weight <= 42: weight_category = "-42kg"
                        elif weight <= 44: weight_category = "42-44kg"
                        elif weight <= 49: weight_category = "49kg"
                        elif weight <= 52: weight_category = "52-55kg"
                        elif weight <= 55: weight_category = "52-55kg"
                        elif weight <= 59: weight_category = "59-63kg"
                        elif weight <= 63: weight_category = "59-63kg"
                        elif weight <= 68: weight_category = "68-68kg"
                        else: weight_category = "+68kg"
                
                elif tech_category in ["Moins de 30 ans", "+31 ans"]:
                    if sex == "male":
                        if weight <= 58: weight_category = "-58kg"
                        elif weight <= 68: weight_category = "58-68kg"
                        elif weight <= 80: weight_category = "80-80kg"
                        else: weight_category = "+80kg"
                    else:  # female
                        if weight <= 49: weight_category = "-49kg"
                        elif weight <= 57: weight_category = "49-57kg"
                        elif weight <= 67: weight_category = "67-67kg"
                        else: weight_category = "+67kg"
                
                results.append({
                    'Name': name,
                    'Age': age,
                    'Weight': weight,
                    'Sex': sex.capitalize(),
                    'Technical Category': tech_category,
                    'Combat Category': combat_category,
                    'Weight Category': weight_category
                })
            
            results_df = pd.DataFrame(results)
            st.success("Categorization complete!")
            st.dataframe(results_df)
            
            # Download button
            csv = results_df.to_csv(index=False)
            st.download_button(
                label="Download Results as CSV",
                data=csv,
                file_name='taekwondo_categories.csv',
                mime='text/csv'
            )
    
        
    except Exception as e:
        st.error(f"Error reading file: {e}")
