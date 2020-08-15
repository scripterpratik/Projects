from selenium import webdriver
import time
browser = webdriver.Chrome(executable_path='/usr/bin/chromedriver')
browser.get('http://www.google.com')
name = 'q'
time.sleep(5)
search_el = browser.find_element_by_name(name)
search_el.send_keys("tinder login")
time.sleep(5)
search_el2 = browser.find_element_by_css_selector("input[type='submit']")
print(search_el2.get_attribute('name'))
search_el2.click()
"""

"""