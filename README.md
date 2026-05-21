# Appium Portfolio

Android mobile test automation framework built with Appium and WebdriverIO.

## Tech Stack

| Tool                                                                 | Purpose                                                          |
| -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [Appium v3](https://appium.io)                                       | Mobile automation server — bridges test code and Android devices |
| [WebdriverIO v9](https://webdriver.io)                               | Test framework — provides the JS API and test runner             |
| [UiAutomator2](https://github.com/appium/appium-uiautomator2-driver) | Android automation driver — talks directly to the device         |
| [Mocha](https://mochajs.org)                                         | Test runner — provides `describe()`, `it()`, hooks               |

## Project Structure

```
appium-portfolio/
├── apps/                        # APK files go here
│   └── ApiDemos-debug.apk       # Sample app used for testing
├── test/
│   ├── specs/                   # Test files (what to test)
│   │   └── home.spec.js
│   └── pageObjects/             # Page Objects (how to interact with screens)
│       └── home.page.js
├── wdio.conf.js                 # WebdriverIO configuration
└── package.json
```

## Prerequisites

Before running tests you need:

- [Node.js](https://nodejs.org) v18+
- [Java JDK](https://adoptium.net) v11+
- [Android Studio](https://developer.android.com/studio) with:
  - Android SDK Platform Tools
  - An Android Virtual Device (emulator) running

### Environment Variables

Set these in your system environment variables:

```
ANDROID_HOME=C:\Users\<you>\AppData\Local\Android\Sdk
```

## Setup

```bash
# Install dependencies
npm install
```

## Running Tests

Tests require two things running at the same time:

**Terminal 1 — Start Appium server:**

```bash
npm run appium
```

**Terminal 2 — Run tests:**

```bash
npm test
```

> Make sure your Android emulator is booted before running tests.

## How It Works

```
Your test code  →  Appium server (port 4723)  →  UiAutomator2 driver  →  Android Emulator
```

1. WebdriverIO reads `wdio.conf.js` and connects to Appium on port 4723
2. Appium installs the APK on the emulator and launches it
3. Your tests send commands (tap, swipe, read text) via the WebDriver protocol
4. UiAutomator2 executes those commands on the real Android UI

## Page Object Pattern

Tests use the Page Object Model (POM) to keep things maintainable:

- **Page Objects** (`test/pageObjects/`) — describe what's on a screen and how to interact with it
- **Spec files** (`test/specs/`) — describe what should happen (the actual test assertions)

This means if the UI changes, you only update the page object — not every test that uses it.

## Demo App

Tests run against [ApiDemos](https://github.com/appium/appium/tree/master/packages/appium/sample-code/apps) — a sample Android app provided by the Appium team. It contains a variety of UI components making it ideal for learning automation.
