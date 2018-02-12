# Class 01: Basic Node, CJS Modules, and Testing

Use NodeJS to develop JavaScript outside of the browser. 

## Course Environment

* Frame of reference is a software development team, not academia!
* Your job:
  * Work the machinery
  * Produce clean files of code

## Core Pieces of our Dev Environment

* NodeJS
* npm
* Testing (mocha)

## DEMO

Greeting app

What are responsibilities?

* Has core "library"
* CLI App?
* Web?
* Package?
* What is a(n)... 

  > ...app?
   
  > ...program?

  > ...process?

* What were you calling when you made an AJAX "call"?
* What is a server?

### Key Points

* A process is "unit of execution" controlled by the Operating System (OS)
    * CPU time
    * Memory space
* Distributed Systems
    * The total set of processes involved in the overall "system"
    * Client, Server [, Database]
* Some systems are "Headless" - pure logic and execution, no UI

### Function passing

[Three Function passing patterns](https://github.com/martypdx/workshop-promises-fat-arrows/blob/master/async-js-patterns.md)

### NodeJS

* Version ~~8~~ 9 (everything but ESModule!)
* Check via `node --version`
* Some people like to use `nvm` to handle multiple versions

### npm (Node Package Manager)

* Tooling for us to manage our build environment
* Repository for open source packages
* `npm init`
* `npm install eslint --save-dev`
* `npm install mocha --save-dev`
* add script: `"test": "mocha"`

### Testing

Test-First (TDD) Testing in calling out responsibilities and expectations for the code you _are going to write_.

Code meant to be consumed by other code (modules and libraries)
is most straight-forward to test.
    
* mocha
    * Test-Runner
    * Used via CLI
    * test: `it`
    * suite: `describe`
* assert
    * `const assert = require('assert');`
    * Assertion Library
        * Fail? throw an error
        * Pass? continue on...
    * Order of assertions is `actual`, `expected`

### Config

* Essentials listed in lab

## Submit 401 Lab

[Exercise](https://github.com/alchemy-advanced-js-winter-2018/submit-career-track-way)

## `forEach` demo

* Example of TDD for `forEach`
* Copypasta WARNING!