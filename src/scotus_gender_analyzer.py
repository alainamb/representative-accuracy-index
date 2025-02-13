import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

def load_scotus_data(filename="SCOTUS_Justices_Enriched_Gender.xlsx"):
    """
    Loads Supreme Court justice data from Excel file with proper handling of gender_presentation
    """
    try:
        # Read Excel file
        df = pd.read_excel(filename, dtype={'gender_presentation': str})
        
        # Clean gender_presentation values
        df['gender_presentation'] = df['gender_presentation'].fillna('Unknown')
        df['gender_presentation'] = df['gender_presentation'].str.lower().str.strip()
        
        # Convert date columns
        date_columns = ['start_date', 'end_date']
        for col in date_columns:
            df[col] = pd.to_datetime(df[col])
            
        return df
    except FileNotFoundError:
        print(f"Error: Could not find file '{filename}'")
        return None
    except Exception as e:
        print(f"Error loading data: {str(e)}")
        return None

def analyze_scotus_gender_representation(date, df):
    """
    Analyzes Supreme Court gender representation for a given date
    """
    # Convert date to datetime if it's not already
    date = pd.to_datetime(date)
    
    # Get active justices
    active_justices = df[
        (df['start_date'] <= date) & 
        ((df['end_date'] >= date) | (df['end_date'].isnull()))
    ].copy()
    
    # Clean and standardize gender values
    active_justices['gender_presentation'] = active_justices['gender_presentation'].fillna('Unknown')
    active_justices['gender_presentation'] = active_justices['gender_presentation'].str.lower().str.strip()
    
    # Replace empty strings, 'nan', 'none', 'null' with 'Unknown'
    mask = (active_justices['gender_presentation'].isin(['nan', 'none', 'null', '']) | 
           active_justices['gender_presentation'].isna())
    active_justices.loc[mask, 'gender_presentation'] = 'Unknown'
    
    # Calculate gender statistics
    gender_counts = active_justices['gender_presentation'].value_counts()
    gender_percentages = (gender_counts / len(active_justices) * 100).round(2)
    
    # Sort gender counts to ensure consistent order
    ordered_categories = ['male', 'female', 'nonbinary', 'Unknown']
    gender_counts = gender_counts.reindex(ordered_categories, fill_value=0)
    gender_percentages = gender_percentages.reindex(ordered_categories, fill_value=0)
    
    return {
        'date': date,
        'active_justices': active_justices,
        'gender_counts': gender_counts,
        'gender_percentages': gender_percentages,
        'total_justices': len(active_justices)
    }

def print_analysis(results):
    """Prints formatted analysis results"""
    print(f"\nSupreme Court Gender Analysis for {results['date'].strftime('%Y-%m-%d')}")
    print("=" * 50)
    
    print("\nActive Justices:")
    for _, justice in results['active_justices'].iterrows():
        print(f"- {justice['first_name']} {justice['last_name']} ({justice['gender_presentation']})")
    
    print("\nGender Breakdown:")
    for gender, count in results['gender_counts'].items():
        percentage = results['gender_percentages'][gender]
        if count > 0:  # Only show categories with non-zero counts
            print(f"{gender}: {int(count)} ({percentage:.1f}%)")

def plot_gender_representation(results):
    """Creates visualization of gender representation"""
    plt.figure(figsize=(10, 6))
    
    # Create color map for genders
    colors = {
        'male': '#2E86C1',     # Blue
        'female': '#E74C3C',   # Red
        'nonbinary': '#8E44AD',# Purple
        'Unknown': '#95A5A6'   # Gray
    }
    
    # Filter out categories with 0%
    mask = results['gender_percentages'] > 0
    percentages = results['gender_percentages'][mask]
    
    # Create bar plot
    bars = plt.bar(
        percentages.index,
        percentages.values,
        color=[colors.get(x, '#808080') for x in percentages.index]
    )
    
    plt.title(f"Supreme Court Gender Representation on {results['date'].strftime('%Y-%m-%d')}")
    plt.ylabel('Percentage')
    plt.ylim(0, 100)
    
    # Add percentage labels on bars
    for bar in bars:
        height = bar.get_height()
        if height > 0:  # Only show label if percentage is greater than 0
            plt.text(
                bar.get_x() + bar.get_width()/2.,
                height,
                f'{height:.1f}%',
                ha='center',
                va='bottom'
            )
    
    # Add total count in the plot
    plt.text(0.02, 0.98, f'Total Justices: {results["total_justices"]}',
             transform=plt.gca().transAxes,
             bbox=dict(facecolor='white', alpha=0.8))
    
    plt.tight_layout()
    plt.show()

def run_analysis():
    """Main function to run the analysis"""
    # Load data
    df = load_scotus_data()
    if df is None:
        return
    
    # Print unique gender values to debug
    print("\nUnique gender values in dataset:")
    print(df['gender_presentation'].unique())
    
    # Set analysis date
    date = "1975-12-31"  # You can modify this date as needed
    
    # Run analysis
    results = analyze_scotus_gender_representation(date, df)
    print_analysis(results)
    plot_gender_representation(results)

if __name__ == "__main__":
    run_analysis()