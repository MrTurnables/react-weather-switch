# 🌤️ React Weather Toggle Switch

A beautiful animated day/night toggle switch built with **React** and **CSS** — perfect for theme switchers, weather apps, or any UI that needs a fun and visually appealing toggle component.

---

## 📦 Installation Options

You can use this component in two ways:

---

### 🔁 Option 1: Install via NPM

```bash
npm install react-weather-switch
```
- Use it in your app:
```tsx
import WeatherSwitch from 'react-weather-switch';
import { useState } from 'react';

function App() {
  const [isNight, setIsNight] = useState(false); // false = day, true = night

  return (
    <div className="App">
      <div style={{width:"100px"}}>
        <WeatherSwitch value={isNight} setValue={setIsNight} />
      </div>
    </div>
  );
}
```

### ⚙️ Props
- value:	(boolean)	Toggle state — false for day, true for night
- setValue	(val: boolean) => void	Callback function to update the state

### 🛠 Built With

React + TypeScript

CSS (no external dependencies)


