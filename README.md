# SCSS Tester
Small SCSS tester that lets you enter SCSS into one file and
immediately see the result of the compilation in another file.

It is very, *very* similair to [sassmeister.com](http://www.sassmeister.com/)
and heavily inspired by it, since it is a very nice way to test more advanced SCSS.
I created this project because I wanted the easy testing when I was offline,
or when SassMeister was unreachable in any other way.

## Get started

0. Make sure you have [NodeJS](https://nodejs.org/) installed.
1. Clone this repository
2. Run `npm install` in the project directory
3. Create a SCSS file in the `scss` folder
4. Run `gulp watch` in the project directory
5. Open your favorite editor with the SCSS file open on one side and
the corresponding CSS file (located in the `css` directory) on the other
6. Test your stylez!

The `gulp watch` command sets up so the project recompiles your files whenever you
change the content.