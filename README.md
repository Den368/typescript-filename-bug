# typescript-filename-bug

---
# Setup

```
npm i
npm run build
```

# Run the bug

```
node -r source-map-support/register "build/t1.js"
node -r source-map-support/register "build/t 1.js"
```
