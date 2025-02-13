# Representative Accuracy Index
The Representative Accuracy in Decision Making Index is a data-driven framework designed to measure and quantify the demographic representativeness of decision-making bodies relative to the populations they serve. This project aims to make measurable the inaccuracy of decisions made by groups that are not demographically representative of the populations impacted by their decision-making.

## Project Overview

Research has shown that homogeneous decision-making groups tend to:
- Be less accurate in their recollection and application of facts
- Experience more groupthink that reinforces confidence in potentially inaccurate decisions
- Be less innovative and consider fewer alternative solutions
- Show higher confidence in incorrect answers compared to diverse groups

Sources:
Rock, David and Heidi Grant. “Why Diverse Teams Are Smarter.” Harvard Business Review, Harvard Business Publishing, 2016 Nov 4, https://hbr.org/2016/11/why-diverse-teams-are-smarter. Accessed 2022 Apr 1.
Apfelbaum, Evan. Interview with Martha E. Mangelsdorf. “The Trouble with Homogenous Teams.” MIT Sloan Management Review, Massachusetts Institute of Technology, 2017 Dec 11, https://sloanreview.mit.edu/article/the-trouble-with-homogeneous-teams/. Accessed 2022 Apr 1.

This index provides a quantitative framework to:
1. Calculate representation gaps between decision-making bodies and the populations they serve
2. Generate an accuracy score that reflects how well a group’s composition mirrors the diversity of its constituents
3. Track changes in representative accuracy over time
4. Enable data-driven discussions about improving demographic representation

## Methodology

The index calculates representative accuracy through the following process:

1. Gather demographic data for:
   - The decision-making body being analyzed
   - The population impacted by the body’s decisions

2. Calculate representation gaps across key demographic dimensions:
   - Gender identity
   - Race and ethnicity
   - Disability status
   - Age
   - Additional demographic factors relevant to the context

3. Generate an accuracy score:
   - 100% represents perfect demographic alignment
   - Lower scores indicate greater demographic misalignment

## Current Implementation

The initial implementation focuses on binary sex representation, with planned expansions to include:
- Full gender spectrum including non-binary and transgender populations
- Race and ethnicity 
- Disability status
- Age demographics
- Additional intersectional factors

### Example: Supreme Court Analysis

The repository includes Jupyter notebooks analyzing the representative accuracy of the U.S. Supreme Court compared to U.S. population demographics. Key findings from recent analysis:

- Male justices over-represented by ~6%
- Female justices under-represented by ~6%
- Overall accuracy score: 93.9%

## Project Structure

```
representative-accuracy-index/
├── notebooks/                    # Jupyter notebooks with analyses
│   ├── gender_representation/    # Gender-focused analyses
│   ├── race_ethnicity/          # Race and ethnicity analyses
│   └── intersectional/          # Intersectional demographic analyses
├── data/                        # Population and institutional datasets
├── src/                         # Source code for index calculations
└── docs/                        # Documentation and methodology details
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/username/representative-accuracy-index.git
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Explore the Jupyter notebooks in the `notebooks/` directory for examples and analyses.

## Contributing

We welcome contributions to expand the index’s capabilities and improve its methodology. Key areas for contribution include:

- Adding support for additional demographic dimensions
- Improving statistical methodologies
- Contributing population datasets
- Creating analysis notebooks for different institutions
- Enhancing documentation and examples

Please see CONTRIBUTING.md (forthcoming) for detailed contribution guidelines.

## Citation

If you use this index in your research or analysis, please cite:

```
Brandt, Alaina. 2024. Representative Accuracy Index.
https://github.com/username/representative-accuracy-index
```

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

## Acknowledgments

This project builds on research demonstrating the importance of diverse decision-making groups and the potential inaccuracies that can arise from homogeneous group composition.

## Contact

For questions about the project, please open an issue or contact Alaina Brandt on GitHub.
