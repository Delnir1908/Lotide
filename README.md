# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @delnir/lotide`

**Require it:**

`const _ = require('@delnir/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `function1(asserArraysEqual)`: assertions for two exactly same arrays
- `function2(asserEqual)`: assertions for two exactly same primitive
- `function3(assertObjectsEqual)`: assertions for two exactly same objects
- `function4(countLetters)`: counting how many letters in a string 
- `function5(countOnly)`: counting how many given element(s) in a string/ array
- `function6(eqArrays)`: checking if two arrays are the same
- `function7(eqObjects)`: checking if two objects are the same 
- `function8(findKey)`: finding the object's key of given value
- `function9(findKeyByValue)`: finding the obejct's key of given string
- `function10(flatten)`: making nested arrays into one array
- `function11(head)`: finding the first element of an array
- `function12(index)`: main index file for the whole project
- `function13(letterPositions)`: finding the array's indices of a given letter
- `function14(map)`: modifying every element in an array with given callback function
- `function15(middle)`: finding the middle part of an array (excluding first and last element from original array)
- `function16(tail)`: finding the last element of the array
- `function17(takeUntil)`: excluding certain elements that meet the given conditions from an array
- `function18(without)`: excluding certain given element(s) from an array
