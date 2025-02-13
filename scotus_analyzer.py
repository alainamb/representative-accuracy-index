import pandas as pd
import datetime

class SCOTUSDataProcessor:
    def __init__(self, data_file: str):
        self.raw_df = pd.read_excel(data_file)
        self.enhanced_df = None
    
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
    
    def process_dates(self):
        """Process the dates and print debug information"""
        self.enhanced_df = self.raw_df.copy()
        
        print("\nProcessing dates...")
        print("Original date examples:")
        print("Judicial Oath Taken:", self.enhanced_df['Judicial Oath Taken'].head())
        print("Date Service Terminated:", self.enhanced_df['Date Service Terminated'].head())
        
        # Convert dates to formatted strings
        self.enhanced_df['start_date'] = self.enhanced_df['Judicial Oath Taken'].apply(self._parse_date)
        self.enhanced_df['end_date'] = self.enhanced_df['Date Service Terminated'].apply(self._parse_date)
        
        print("\nProcessed date examples:")
        print("start_date:", self.enhanced_df['start_date'].head())
        print("end_date:", self.enhanced_df['end_date'].head())
        
        # Drop original date columns
        self.enhanced_df = self.enhanced_df.drop(['Judicial Oath Taken', 'Date Service Terminated'], axis=1)
    
    def add_demographic_columns(self):
        if self.enhanced_df is None:
            self.process_dates()
        
        # Add demographic columns
        for col in ['gender presentation', 'race', 'ethnicity']:
            self.enhanced_df[col] = None
        
        # Add identifier
        self.enhanced_df['justice_id'] = range(1, len(self.enhanced_df) + 1)
    
    def export_for_enrichment(self, output_file: str = 'scotus_for_enrichment.xlsx'):
        """Export the data with properly formatted dates"""
        if self.enhanced_df is None:
            self.add_demographic_columns()
        
        print("\nExporting data...")
        # Export to Excel without index
        self.enhanced_df.to_excel(output_file, index=False)
        
        print(f"\nExported to {output_file}")
        print("\nPlease add the following demographic information:")
        print("- gender presentation: 'Male', 'Female', 'Non-Binary'")
        print("- race: 'White', 'Black', 'Asian', 'Native American', etc.")
        print("- ethnicity: 'Hispanic', 'Non-Hispanic'")

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
        print("3. The Excel file has columns: 'Judicial Oath Taken' and 'Date Service Terminated'")