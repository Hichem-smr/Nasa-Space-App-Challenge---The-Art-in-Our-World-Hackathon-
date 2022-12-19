import scrapy
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import pandas as pd

pages = 1
service = Service('./chromedriver')
options = Options()
# options.add_argument('--headless')
options.add_argument("download.default_directory=/home/hichem-semmar/Desktop/SIC/'Machine learning'/Nasa")
driver = webdriver.Chrome(service=service, options=options)
driver.maximize_window()
wait = WebDriverWait(driver, 10)
full_scrapes = []

# for i in range(15,21):
    # url = "https://cdaweb.gsfc.nasa.gov/pub/data/dscovr/h0/mag/20" + str(i)

    # driver.get(url)
driver.get("https://cdaweb.gsfc.nasa.gov/pub/data/dscovr/h0/mag/2020")
wait.until(EC.presence_of_element_located((By.XPATH, "//h1")))
links = driver.find_elements(By.XPATH, ("//a[contains(@href,'cdf')]"))
for k in links:
    k.click()
    # for link in links:
    # links[0].click()
    # print(links)

driver.quit()
