#Import Modules
from selenium import webdriver
from fb import temp_var
import time

#take to login page of github
browser = webdriver.Chrome(executable_path='/usr/bin/chromedriver')
browser.get('https://github.com/login')
time.sleep(2)

#login action region
search_el = browser.find_element_by_name('login')
search_el.send_keys("scripterpratik")
search_el1 = browser.find_element_by_css_selector("input[tabindex='2']")
search_el1.send_keys(temp_var)
time.sleep(2)
search_el2 = browser.find_element_by_css_selector("input[name='commit']")
search_el2.click()
time.sleep(2)
"""
#select repository
search_el3 = browser.find_element_by_css_selector("input[title='scripterpratik']")
search_el3.click()
"""