# Setting up jest and react-testing-library  
**Copy config files palced in repo in your project's root directory then follow given below steps**
## 1-Dependencies and other config in packge.json file 
Add these packges to **dependencies** sesction in **package,json** file 
```
"dependencies": {
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
  }
  
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
```

**Then Run **
```npm install```

## 2-Npm Scripts
Add following comamnds in scripts section of **package.json** file
```
    "test": "jest --ci --coverage --coverageDirectory=coverage/jest",
    "test:debug": "jest",
    "test:watch": "jest --watch",
```
**Important scripts versions**

Reactjs Environment
```
    "@types/react": "^17.0.39",
    "react": "^17.0.2",
    "react-scripts": "5.0.0",
    "typescript": "^4.5.5",
```
Node Environment
```
nodejs v16.15.0 
npm 8.5.5
```


**Thanks**
