import os
import time
import threading
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
from playwright.sync_api import sync_playwright

PORT = 8089
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
SCREENSHOTS_DIR = os.path.join(DIRECTORY, "screenshots")

# Create screenshots directory if it doesn't exist
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

class ThreadingTCPServer(TCPServer):
    allow_reuse_address = True

class CustomHTTPHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def start_server():
    server = ThreadingTCPServer(("", PORT), CustomHTTPHandler)
    print(f"[TEST SETUP] Serving HTTP on port {PORT}...")
    server.serve_forever()

def run_tests():
    # Start local HTTP server in a background thread
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()
    time.sleep(1.5)  # Wait for server to boot up
    
    print("[TESTS] Starting Playwright tests...")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()
        
        # Load the Map Dashboard
        url = f"http://localhost:{PORT}/index.html"
        print(f"[TESTS] Navigating to {url}...")
        page.goto(url)
        page.wait_for_selector("#map")
        page.wait_for_selector("#lang-btn")
        
        # --- TEST 1: Default Persian & Google Maps ---
        print("[TEST 1] Verifying default state (Persian & Google Maps)...")
        lang = page.evaluate("document.documentElement.lang")
        direction = page.evaluate("document.documentElement.dir")
        assert lang == "fa", f"Expected lang 'fa', got '{lang}'"
        assert direction == "rtl", f"Expected dir 'rtl', got '{direction}'"
        
        status_text = page.locator("#status-text").text_content()
        assert "Google Maps" in status_text, f"Expected Google Maps in status, got '{status_text}'"
        
        # Wait for Leaflet tiles to load
        time.sleep(2)
        screenshot_1 = os.path.join(SCREENSHOTS_DIR, "1_persian_google.png")
        page.screenshot(path=screenshot_1)
        print(f"Captured: {screenshot_1}")
        
        # --- TEST 2: Switch to English ---
        print("[TEST 2] Toggling language to English...")
        page.click("#lang-btn")
        time.sleep(1) # wait for DOM translation updates
        
        lang = page.evaluate("document.documentElement.lang")
        direction = page.evaluate("document.documentElement.dir")
        assert lang == "en", f"Expected lang 'en', got '{lang}'"
        assert direction == "ltr", f"Expected dir 'ltr', got '{direction}'"
        
        screenshot_2 = os.path.join(SCREENSHOTS_DIR, "2_english_google.png")
        page.screenshot(path=screenshot_2)
        print(f"Captured: {screenshot_2}")
        
        # --- TEST 3: Switch Map Provider to Neshan ---
        print("[TEST 3] Toggling map provider to Neshan Map...")
        # Click the label wrapper for Neshan
        page.click("#label-neshan")
        time.sleep(2) # Wait for Leaflet to swap layers and render
        
        status_text = page.locator("#status-text").text_content()
        assert "Neshan Map" in status_text, f"Expected Neshan Map in status, got '{status_text}'"
        
        screenshot_3 = os.path.join(SCREENSHOTS_DIR, "3_english_neshan.png")
        page.screenshot(path=screenshot_3)
        print(f"Captured: {screenshot_3}")
        
        # --- TEST 4: Switch Map Provider to Balad ---
        print("[TEST 4] Toggling map provider to Balad Map...")
        # Click the label wrapper for Balad
        page.click("#label-balad")
        time.sleep(2) # Wait for Leaflet to swap layers and render
        
        status_text = page.locator("#status-text").text_content()
        assert "Balad Map" in status_text, f"Expected Balad Map in status, got '{status_text}'"
        
        screenshot_4 = os.path.join(SCREENSHOTS_DIR, "4_english_balad.png")
        page.screenshot(path=screenshot_4)
        print(f"Captured: {screenshot_4}")
        
        # --- TEST 5: Back to Persian, search Cafe and select ---
        print("[TEST 5] Reverting to Persian, searching for Farsi 'Cafe' keyword, and selecting a business...")
        page.click("#lang-btn") # back to Persian
        time.sleep(0.5)
        
        # Search "کافه"
        page.fill("#search-input", "کافه")
        time.sleep(0.5) # Wait for filtering in DOM
        
        # Click the first business-item in results list
        page.click(".business-item:first-child")
        time.sleep(1.5) # Wait for Leaflet popup animation
        
        screenshot_5 = os.path.join(SCREENSHOTS_DIR, "5_persian_search_selected.png")
        page.screenshot(path=screenshot_5)
        print(f"Captured: {screenshot_5}")
        
        # --- TEST 6: Map Bounds Filtering ---
        print("[TEST 6] Testing Map Bounds Filtering...")
        # Clear search input first
        page.fill("#search-input", "")
        time.sleep(0.5)
        
        # Get count of all businesses
        all_count_text = page.locator("#results-count").text_content()
        print("All businesses count read successfully.")
        
        # Enable bounds filter by clicking the visible slider element (which toggles the hidden input)
        page.click(".bounds-filter .slider")
        time.sleep(1) # wait for map bounds calculations
        
        bounds_count_text = page.locator("#results-count").text_content()
        print("Businesses count within current bounds read successfully.")
        # With bounds toggle checked, the count should be smaller than total (30)
        assert bounds_count_text != all_count_text, "Expected bounds filter to reduce business count"
        
        screenshot_6 = os.path.join(SCREENSHOTS_DIR, "6_bounds_filtering.png")
        page.screenshot(path=screenshot_6)
        print(f"Captured: {screenshot_6}")
        
        # Disable bounds filter (click the slider again to untoggle)
        page.click(".bounds-filter .slider")
        time.sleep(0.5)
        
        # --- TEST 7: Search Radius Filtering & Export Buttons ---
        print("[TEST 7] Testing Search Radius Filtering & Export buttons...")
        # Select 3 km radius
        page.select_option("#radius-select", "3000")
        time.sleep(1)
        
        radius_count_text = page.locator("#results-count").text_content()
        print("Businesses within 3km radius read successfully.")
        
        # Verify export buttons are visible
        assert page.is_visible("#export-csv-btn"), "CSV Export button is not visible"
        assert page.is_visible("#export-json-btn"), "JSON Export button is not visible"
        
        screenshot_7 = os.path.join(SCREENSHOTS_DIR, "7_radius_filtering.png")
        page.screenshot(path=screenshot_7)
        print(f"Captured: {screenshot_7}")
        
        # Clean up
        browser.close()
        
    print("\n[SUCCESS] All automated tests passed successfully! Screenshots saved in 'screenshots/' folder.")

if __name__ == "__main__":
    run_tests()
