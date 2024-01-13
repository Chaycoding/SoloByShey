from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

browser = webdriver.Chrome(
    r'C:\Users\User\.wdm\drivers\chromedriver\win64\109.0.5414.74\chromedriver')

wait = WebDriverWait(browser, 10)
browser.maximize_window()

browser.get('https://www.instagram.com/')

wait.until(ec.element_to_be_clickable(
    (By.NAME, "username"))).send_keys("grealtwork@gmail.com")
el = wait.until(ec.element_to_be_clickable((By.NAME, "password")))
el.send_keys("5SX/*5ZH@B@rB!Z")
el.send_keys(Keys.ENTER)

sleep(20)

browser.close()
