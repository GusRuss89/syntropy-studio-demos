# Syntropy Studio Demos

This is a Syntropy Studio workspace that contains a small collection of demo programs to help new users find their way around.

## How to use it
1. Clone the repo
1. Run `npm install`
1. Open Syntropy Studio
1. Choose "Open Workspace"
1. Select the folder containing this workspace
1. Click "Open Workspace"

## What is Syntropy Studio
Syntropy Studio is a platform for developing small JavaScript programs quickly and easily. It has the following features:
- Zero boilerplate and automatic code transpilation (use the latest JavaScript features out-of-the-box)
- Simple rendering within the same window (your program's output is right next to your code)
- Link your variables to input controls to rapidly test different variations
- Code and variable changes are hot-reloaded and your program's state is maintained
- Work on multiple programs and quickly switch between them (great for experiments)
- Share your code blocks with other users, and easily pull-in blocks from the web to rapidly build your program

## How it works

### Blocks, Programs and WorkSpaces
Syntropy Studio programs are made up of individual code blocks that run in sequence. A workspace is simply a collection of programs.

Code blocks have a tiny API made up of two functions: `run` and `update`. `run` is called the first time your block is invoked, and again every time you change it (or one of the preceeding blocks). If you define an `update` function in your block, your program will loop continuously, and the code in the `update` function is called on every iteration.

You can disable blocks, or "de-throttle" them (by default they will run at up to 60fps) by hovering over them in the program panel and selecting the appropriate icon.

### Running a program
First, select the program you wish to run from the "Programs" panel in the sidebar. Then the "Program" panel will show buttons to play, pause, step (advance by one iteration), and reset.

### State
Both `run` and `update` have access to a shared `state` variable that is internal to the block. You can make pieces of your blocks `state` accessible to other blocks in your program by creating an "Output Member". Likewise, your block can use the output members of the other blocks in your program by creating an "Input Member" of type `link` and linking to the other block's output.

Thus, a block takes inputs, performs operations, and returns outputs that can be used by other blocks.

### Members
Your block can use other types of Input Members as well (not just links to other blocks). For example, a variable in your code might be a number that controls the speed of something you're rendering on a canvas. You could change this code from:

    const speed = 10

to

    const speed = state.speed

Then create an input member called `speed` of type `slider` and drag it back and forth to quickly experiment with different speed values.

### Rendering
Both `run` and `update` also have access to `element`, which is a `HTMLDivElement` in the output panel that is reserved for your block's output. You can append things to `element` using regular JavaScript. Things you append in `run` will be cleared before the next `run` (i.e. when you change some code, or an input member that is linked to the `run` function). `update` will not clear anything, so it's a good place to do things like update a canvas, a counter, etc.

### Asynchronous Code
If your `run` function returns a promise, subsequent blocks will wait for that promise to resolve before running themselves. The simplest way to do asynchronous work is by making your function `async` and using `await`. E.g.

<pre language="JavaScript"><code>export const run = <b>async</b> ({ state }) => {
  const res = <b>await</b> fetch('https://example.com')
  state.data = <b>await</b> res.text()
}</code></pre>

### Using blocks from the web
You can search for a block from the web by clicking the search icon in the "Web Blocks" panel. Find one that suits and add it to your workspace as an available block. You can then add it to your program by right clicking and selecting "Add to current program".

### Sharing your own blocks
Simply publish a block folder to NPM and set the first keyword to `syntropy-studio-block`. If it uses it's own dependencies, they should be included in `package.json`. Check out some of the [existing blocks](https://www.npmjs.com/search?q=syntropy-studio-block) for more guidance.
