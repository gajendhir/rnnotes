---
sidebar_position: 1
---

# Choice of Editor

There are a host of configurable editors out there. For me, [Visual Studio Code](https://code.visualstudio.com/) by Microsoft was the clear winner.

It is highly customizable with a plethora of extensions which make it very friendly, powerful and alive. I like the way the editor responds to different parts of the code and errors / mistakes.

I use Visual Studio Code (a.k.a. VSCode or Code) for editing and testing all my Javascript, Python, JSON, React and React-Native code. 


## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at `http://localhost:3000/my-react-page`.

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at `http://localhost:3000/my-markdown-page`.
