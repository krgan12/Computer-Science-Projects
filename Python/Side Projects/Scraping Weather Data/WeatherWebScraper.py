import requests
import bs4

# Taking input from the user
city = str(input("Enter your city name: "))

# Create URL
url = "https://www.google.com/search?q="+"weather"+city

# Get the data
result = requests.get(url).content

# Getting the raw data
soup = bs4.BeautifulSoup(result, "html.parser")

# Getting the Temperature
temperature = soup.find('div', attrs={'class': 'BNeawe iBp4i AP7Wnd'}).text

# Getting the time and sky description
time_skyDescription = soup.find('div', attrs={'class': 'BNeawe tAd8D AP7Wnd'}).text

# Formatting the data
data = time_skyDescription.split('\n')
time = data[0]
sky = data[1:]
sky2 = str(sky)
sky3 = sky2.strip("[]''")

# List all div tags with a particular class name
list_div = soup.findAll('div', attrs={'class': 'BNeawe s3v9rd AP7Wnd'})

# The data we need is available at index 5
strd = list_div[5].text

# Formatting the string
position = strd.find("Wind")
otherData = strd[position:]

# Printing the data we need
print("Temperature is", temperature)
print("Time: ", time)
print("Sky Description: ", sky3)
print(otherData)

