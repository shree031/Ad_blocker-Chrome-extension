# Ad Blocker Chrome Extension

This Chrome extension blocks ads from loading on web pages, ensuring a faster and cleaner browsing experience. It hides ad containers and prevents common ad networks from serving ads, giving you a distraction-free environment.

## Features:
- Blocks ads from DoubleClick, Google Ad Services, and other ad networks.
- Hides ad elements (like banners, pop-ups, and sponsored content) on various websites.
- Improves page performance by preventing resource-heavy ad scripts.
- Customizable rules to easily extend the ad-blocking capabilities.

---

## How It Works

1. **Blocking Ad URLs**: 
   The extension uses Chrome’s `declarativeNetRequest` API to block requests to known ad domains like `doubleclick.net`, `googleadservices.com`, and others. You can also add your own ad URLs to the blocking list.

2. **Hiding Ad Elements**:
   The extension scans the web page for elements that typically host ads (like banners and pop-ups) using CSS selectors. It hides those elements to remove blank spaces where ads might have been displayed.

3. **Auto-updates on Page Load**:
   Every time a page loads, the extension checks for ad elements and hides them using the custom CSS rules. It runs automatically without manual intervention.

![image](https://github.com/user-attachments/assets/c1e29ee5-0446-4d58-9e3d-932a86a597e1)

---

## How to Use

1. **Clone or Download**:
   Clone the repository or download the source code as a ZIP file.

2. **Load the Extension into Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" (toggle in the top right corner).
   - Click "Load unpacked" and select the folder where the extension files are located.

4. **Using the Extension**:
   Once loaded, the extension will automatically start blocking ads. You can view the extension icon in the toolbar and click it to enable or disable the ad blocker.
