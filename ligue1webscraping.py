import pandas as pd
#pip install lxml
df = pd.read_html('https://fbref.com/gototheteamstatsurl',
                  attrs = {'id': "tableid"})[0]
df.to_csv('G:\\your\\path\\team_stats.csv', index=False)  # usually it's the same id for every team in the league
df.head() # to see the first 5 rows of the dataframe