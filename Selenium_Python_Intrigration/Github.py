from selenium import webdriver
from fb import temp_var
import time
browser = webdriver.Chrome(executable_path='/usr/bin/chromedriver')
browser.get('https://github.com/login')
time.sleep(2)
search_el = browser.find_element_by_name('login')
search_el.send_keys("scripterpratik")
search_el1 = browser.find_element_by_css_selector("input[tabindex='2']")
search_el1.send_keys(temp_var)
time.sleep(2)
search_el2 = browser.find_element_by_css_selector("input[name='commit']")
search_el2.click()
"""
<a href="/login" class="HeaderMenu-link no-underline mr-3" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="cd4f672ed9a2fa51ea92c28de162e81edb2d11a2aad6884ec89a6d60b21b1cfb" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">
          Sign&nbsp;in
        </a>

        search_el = browser.find_element_by_name(name)
search_el.send_keys("tinder login")
time.sleep(5)
print(search_el2.get_attribute('name'))
search_el1 = browser.find_element_by_css_selector("input[data-ga-click='(Logged out) Header, clicked Sign in, text:sign-in']")
search_el1.click()

<input type="submit" name="commit" value="Sign in" tabindex="3" class="btn btn-primary btn-block" data-disable-with="Signing in…">
"""