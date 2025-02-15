# Representative Accuracy Index
The Representative Accuracy in Decision Making Index is a data-driven framework designed to measure and quantify the demographic representativeness of decision-making bodies relative to the populations they serve.

## Project Overview

Research has shown that homogeneous decision-making groups tend to:
- Be less accurate in their recollection and application of facts
- Experience more groupthink that reinforces confidence in potentially inaccurate decisions
- Be less innovative and consider fewer alternative solutions
- Show higher confidence in incorrect answers compared to diverse groups

This index provides a quantitative framework to:
1. Calculate representation gaps between decision-making bodies and the populations they serve
2. Generate an accuracy score that reflects how well a group's composition mirrors the diversity of its constituents
3. Track changes in representative accuracy over time
4. Enable data-driven discussions about improving demographic representation

## Methodology

The index calculates representative accuracy through the following process:
1. Gather demographic data for the decision-making body and impacted population
2. Calculate representation gaps across key demographic dimensions
3. Generate an accuracy score (100% represents perfect demographic alignment)

## Docusaurus Website Development

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Project Structure

```
representative-accuracy-index/
├── notebooks/                    # Jupyter notebooks with analyses
│   ├── gender_representation/    
│   ├── race_ethnicity/          
│   └── intersectional/          
├── data/                        # Population and institutional datasets
├── src/                         # Source code and reusable functions
│   ├── __init__.py
│   ├── calculations.py          # Core index calculation functions
│   ├── data_processing.py       # Data cleaning and preprocessing
│   ├── visualizations.py        # Plotting and visualization functions
│   └── utils.py                 # Helper utilities
```

## Getting Started

1. Clone the repository
2. Install dependencies
3. Explore the Jupyter notebooks in the `notebooks/` directory

## Contributing

We welcome contributions to expand the index's capabilities and improve its methodology:
- Adding support for additional demographic dimensions
- Improving statistical methodologies
- Contributing population datasets
- Creating analysis notebooks for different institutions

## License

This project is licensed under the Apache License 2.0.

## Contact

For questions, please open an issue or contact Alaina Brandt on GitHub.