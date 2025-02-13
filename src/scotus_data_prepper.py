import pandas as pd
import datetime

class SCOTUSDataProcessor:
    def __init__(self, data_file: str):
        self.raw_df = pd.read_excel(data_file)
        self.enhanced_df = None
    
    def _split_name(self, full_name: str) -> tuple:
        """Split 'last name, first name' into separate fields"""
        if pd.isna(full_name):
            return None, None
        try:
            last_name, first_name = map(str.strip, full_name.split(',', 1))
            return first_name, last_name
        except:
            print(f"Error splitting name '{full_name}'")
            return None, None
    
    def _parse_date(self, date_str: str) -> str:
        """Convert dates to string format that Excel can handle"""
        if pd.isna(date_str):
            return None
        try:
            date = pd.to_datetime(date_str)
            return date.strftime('%Y-%m-%d')  # Convert to string format
        except Exception as e:
            print(f"Error parsing date '{date_str}': {e}")
            return None
    
    def process_data(self):
        """Process the dates and names"""
        self.enhanced_df = self.raw_df.copy()
        
        # Split names
        first_names = []
        last_names = []
        for name in self.enhanced_df['Name']:
            first, last = self._split_name(name)
            first_names.append(first)
            last_names.append(last)
        
        self.enhanced_df['first_name'] = first_names
        self.enhanced_df['last_name'] = last_names
        
        # Process dates
        self.enhanced_df['start_date'] = self.enhanced_df['Judicial Oath Taken'].apply(self._parse_date)
        self.enhanced_df['end_date'] = self.enhanced_df['Date Service Terminated'].apply(self._parse_date)
        
        # Drop original columns
        self.enhanced_df = self.enhanced_df.drop(['Name', 'Judicial Oath Taken', 'Date Service Terminated'], axis=1)
    
    def add_demographic_columns(self):
        if self.enhanced_df is None:
            self.process_data()
        
        # Add identifier
        self.enhanced_df.insert(0, 'justice_id', range(1, len(self.enhanced_df) + 1))
        
        # Add demographic columns
        for col in ['gender_presentation', 'race_presentation', 'ethnicity']:
            self.enhanced_df[col] = None
        
        # Reorder columns
        desired_order = [
            'justice_id',
            'first_name',
            'last_name',
            'Type',
            'State App\'t From',
            'Appointed by President',
            'start_date',
            'end_date',
            'gender_presentation',
            'race_presentation',
            'ethnicity'
        ]
        
        # Reorder columns
        self.enhanced_df = self.enhanced_df[desired_order]
        
        # Rename columns to match desired format
        column_mapping = {
            'Type': 'type',
            'State App\'t From': 'state_appointed_from',
            'Appointed by President': 'appointed_by_president'
        }
        self.enhanced_df = self.enhanced_df.rename(columns=column_mapping)
    
    def export_for_enrichment(self, output_file: str = 'scotus_for_enrichment.xlsx'):
        """Export the data with properly formatted dates"""
        if self.enhanced_df is None:
            self.add_demographic_columns()
        
        print("\nExporting data...")
        # Export to Excel without index
        self.enhanced_df.to_excel(output_file, index=False)
        
        print(f"\nExported to {output_file}")
        print("\nPlease add the following demographic information:")
        print("- gender_presentation: 'Male', 'Female', 'Non-Binary'")
        print("- race: 'White', 'Black', 'Asian', 'Native American', etc.")
        print("- ethnicity: 'Hispanic', 'Non-Hispanic'")
        
        print("\nColumns in output file:")
        for col in self.enhanced_df.columns:
            print(f"- {col}")

if __name__ == "__main__":
    try:
        print("Starting SCOTUS data processing...")
        processor = SCOTUSDataProcessor("SCOTUS_Justices.xlsx")
        processor.export_for_enrichment()
        print("\nProcessing completed successfully!")
        
    except Exception as e:
        print(f"\nAn error occurred: {str(e)}")
        print("\nPlease check that:")
        print("1. Your Excel file is in the same directory as this script")
        print("2. The Excel file is named 'SCOTUS_Justices.xlsx'")
        print("3. The Excel file contains the required columns")
