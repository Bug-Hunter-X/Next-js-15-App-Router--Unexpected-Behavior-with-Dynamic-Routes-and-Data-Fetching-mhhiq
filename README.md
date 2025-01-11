# Next.js 15 App Router Unexpected Behavior

This repository demonstrates an unexpected behavior encountered while using dynamic routes and data fetching in a Next.js 15 app directory.

## Bug Description

When navigating to a dynamic route, the data fetching logic does not work as expected, leading to unexpected behavior or errors.  The issue occurs even with seemingly straightforward setups.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to a dynamic route (e.g., `/products/1`).
5. Observe the unexpected behavior or errors in the console and the rendered output.

## Expected Behavior

The data fetching should work correctly, displaying the expected content for the given dynamic route parameters.

## Actual Behavior

The data fetching either fails to execute, produces incorrect data, or shows other unexpected results.

## Potential Causes

* Issues with the new `app` directory routing in Next.js 15.
* Incorrect usage of data fetching methods within the `app` directory context.
* Unhandled edge cases or bugs in Next.js 15 itself.