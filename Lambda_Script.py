#!/usr/bin/env python
# coding: utf-8

# In[3]:


from bs4 import BeautifulSoup
import concurrent.futures
import requests
import pandas as pd
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.common.exceptions import TimeoutException
import time
import re
import os
import threading


# In[4]:


def main(letter):
    # Creating driver for each letter instance and using template url
    service = Service(executable_path="/usr/local/bin")
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    options.add_argument("--disable-javascript")
    driver = webdriver.Chrome(service=service, options=options)
    
    template_url = 'https://www.basketball-reference.com{}'
    letter_url = 'https://www.basketball-reference.com/players/{}/'.format(letter)
    
    # Scanning entire page to get list of players
    driver.get(letter_url)
    html_main = driver.page_source
    soup = BeautifulSoup(html_main, "lxml")
    
    # Create array of all players without header rows
    all_players = soup.find(id="players")
    all_player_rows = all_players.find_all("tr", class_=lambda x: x is None or 'thead' not in x.split())
    
    
    folder = "threadedPlayers/{}".format(letter)
    os.makedirs(folder, exist_ok=True)
    
    # writing code to store all "Letter" players in a folder to look at later
    for i in range(len(all_player_rows) - 1):
        player_link = [a['href'] for a in all_player_rows[i+1].find_all('a', href=True)][0]
        player_name = all_player_rows[i+1].find('a').text
        full_url = template_url.format(player_link)
        print(f"Scraping for '{player_name}'")
        
        if os.path.exists(folder + "/{}.html".format(player_name)):
            continue
        
        try:
            driver.get(full_url)
            driver.execute_script("window.scrollTo(1, 100000)")
            time.sleep(2)
            full_html = driver.page_source
    
            # Writing results to folder
            with open(folder + "/{}.html".format(player_name), "w+") as f:
                f.write(full_html)
        except TimeoutException:
            print(f"Timeout occurred for '{player_name}'. Skipping to the next player.")
            time.sleep(5)
            continue
    
    driver.quit()
    print(f"Scraping for letter '{letter}' completed")


# In[ ]:


# FOR LOOP TO RUN FOR ALL LETTERS

# List of letters to process concurrently
letters = ['b', 'c', 'd', 'e']


"""# Create threads for each letter and start them
threads = []
for letter in letters:
    thread = threading.Thread(target=main, args=(letter, ))
    threads.append(thread)
    thread.start()
    print(f"Scraping for letter '{letter}' started...")

# Wait for all threads to finish
for thread in threads:
    thread.join()

print("Scraping completed!") """


# Using ThreadPoolExecutor to submit tasks for each letter
with concurrent.futures.ThreadPoolExecutor() as executor:
    # Create a list of futures for the scraping tasks
    futures = []

    for letter in letters:
        # Submit tasks for each letter to the executor
        future = executor.submit(main, letter)
        futures.append(future)

        print(f"Scraping for letter '{letter}' started...")

        # Wait for all tasks to complete
    concurrent.futures.wait(futures)

print("Scraping completed!")


# In[ ]:




