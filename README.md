# Molecule.js

Molecule is project skeleton for adding custom control logic to and
running [Atom.js](https://github.com/mattiasrunge/atom.js). Molecule
comes bundled with a sample configuration for Atom as well as example
control logic scripts.

## Getting started

### Set up environment

In order to get started, clone this repository and create your own
branch.

    $ git clone https://github.com/bjorne/molecule.js
    $ cd molecule.js
    $ git branch <your name>

By creating your own branch, you can freely commit and push changes
and easily share your code with other users.

_(TODO)_ Copy `config/atom.json.sample` to `config/atom.json` and make
the changes necessary to suit your environment.

Run `npm install` to install the necessary packages.

### Scripting basics

A molecule script resides under the `lib/` directory and exports a
function which will automatically be invoked by molecule upon startup,
like so:

    module.exports = function($) {
      // logic goes here
    }

The `$` argument is the __unit selector__ function. If you've every
used jQuery, you should feel quite at home. The unit selector function
is used to find __units__ - which are abstractions of modules and
functions in the CAN network. For example, there is a unit called
`BusVoltage`. We can select all `BusVoltage` units using

    $({ type: 'BusVoltage' })

The result of the `$` function is a __unit selection__ upon which you
can apply commands or listen for events. Suppose, we would like to
print the bus voltage in the console when a new value is received. The
script could look like this:
    
    module.exports = function($) {
      $({ type: 'BusVoltage' })
        .on('meta:voltage', function(unit, voltage) {
          console.log('current voltage is ' + voltage);
      });
    };

The `meta:` prefix indicates we are listening for __metadata
changes__. Whenever a unit receives a new value, the metadata will be
updated and an event is emitted.

Once you see everything is working, it may be a good idea to commit.

Checkout the `examples/` directory for more examples of scripts.

### Launching

Now, in order to try out the code, just run

    $ ./bin/molecule

and see your logic coming to work.

## Development notes

When developing Atom alongside Molecule it is handy to point Molecule
directly to the Atom source directory. You can do this using `npm
link`.

    $ cd /path/to/atom.js
    $ npm link
    $ cd /path/to/molecule.js
    $ npm link atom.js
