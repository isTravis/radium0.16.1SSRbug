## Installation

```
npm install
```

## Running Dev Server

```
npm run dev
```

## Reproducing Error 
In `/src/helpers/Html.js` (which is imported and used by `src/server.js` and `src/client.js`) there are two possible return statements. One has `this.props.components` wrapped in `<StyleRoot>` tags and the other has it wrapped in `<div>` tags. The former caused a data-reactid mismatch, while the latter works with no warnings.





